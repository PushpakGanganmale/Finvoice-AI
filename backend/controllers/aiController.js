const Groq = require("groq-sdk");
const mongoose = require("mongoose");
const Invoice = require("../models/Invoice");

const getGroqClient = () => {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  return new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });
};

const GROQ_MODEL =
  process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

// Reusable Groq chat completion function
const generateAIResponse = async (systemPrompt, userPrompt) => {
  const groq = getGroqClient();

  const completion = await groq.chat.completions.create({
    model: GROQ_MODEL,
    temperature: 0.3,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  const content = completion.choices?.[0]?.message?.content;

  if (!content || typeof content !== "string") {
    throw new Error("Groq returned an empty response");
  }

  return content.trim();
};

// Extract JSON safely from an AI response
const parseAIJson = (responseText) => {
  const cleanedText = responseText
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleanedText);
  } catch {
    const firstBrace = cleanedText.indexOf("{");
    const lastBrace = cleanedText.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error("AI response did not contain valid JSON");
    }

    return JSON.parse(
      cleanedText.substring(firstBrace, lastBrace + 1)
    );
  }
};

// @desc    Parse invoice details from text using Groq
// @route   POST /api/ai/parse-text
// @access  Private
const parseInvoiceFromText = async (req, res) => {
  const { text } = req.body || {};

  if (!text || typeof text !== "string" || !text.trim()) {
    return res.status(400).json({
      message: "Valid invoice text is required",
    });
  }

  if (text.length > 12000) {
    return res.status(400).json({
      message: "Invoice text is too long. Maximum 12000 characters allowed.",
    });
  }

  try {
    const systemPrompt = `
You are an expert invoice data extraction assistant.

Extract invoice information from the user's text.

Return ONLY a valid JSON object.
Do not include markdown, explanations, or code fences.

Use this exact structure:

{
  "clientName": "string",
  "email": "string",
  "address": "string",
  "items": [
    {
      "name": "string",
      "quantity": 1,
      "unitPrice": 0
    }
  ]
}

Rules:
- Use an empty string when client information is unavailable.
- Use an empty array when no invoice items are found.
- Quantity must be a number.
- Unit price must be a number.
- Do not invent missing information.
- Do not include tax calculations.
`;

    const responseText = await generateAIResponse(
      systemPrompt,
      `Extract invoice details from this text:\n\n${text}`
    );

    const parsedData = parseAIJson(responseText);

    if (
      !parsedData ||
      typeof parsedData !== "object" ||
      Array.isArray(parsedData)
    ) {
      throw new Error("Invalid invoice data returned by AI");
    }

    const items = Array.isArray(parsedData.items)
      ? parsedData.items.map((item) => ({
          name: String(item.name || ""),
          quantity: Number(item.quantity) || 1,
          unitPrice: Number(item.unitPrice) || 0,
        }))
      : [];

    return res.status(200).json({
      clientName: String(parsedData.clientName || ""),
      email: String(parsedData.email || ""),
      address: String(parsedData.address || ""),
      items,
    });
  } catch (error) {
    console.error("Groq invoice parsing error:", error.message);

    return res.status(502).json({
      message: "Failed to parse invoice data. Please try again.",
    });
  }
};

// @desc    Generate payment reminder email using Groq
// @route   POST /api/ai/generate-reminder
// @access  Private
const generateReminderEmail = async (req, res) => {
  const { invoiceId } = req.body || {};

  if (!invoiceId || !mongoose.Types.ObjectId.isValid(invoiceId)) {
    return res.status(400).json({
      message: "A valid invoice ID is required",
    });
  }

  try {
    // Only allow the authenticated user to access their invoice
    const invoice = await Invoice.findOne({
      _id: invoiceId,
      user: req.user.id,
    });

    if (!invoice) {
      return res.status(404).json({
        message: "Invoice not found",
      });
    }

    const clientName = invoice.billTo?.clientName || "Client";
    const invoiceNumber = invoice.invoiceNumber || "N/A";
    const amount = Number(invoice.total || 0).toFixed(2);

    const dueDate = invoice.dueDate
      ? new Date(invoice.dueDate).toLocaleDateString("en-IN")
      : "Not specified";

    const systemPrompt = `
You are a professional accounts receivable assistant.

Write a polite, professional, concise payment reminder email.

Requirements:
- Start with a Subject line.
- Address the client by name.
- Mention the invoice number.
- Mention the outstanding amount.
- Mention the due date when available.
- Politely request payment.
- Avoid aggressive or threatening language.
- Do not invent payment links or bank details.
- Return only the email text.
`;

    const userPrompt = `
Write a payment reminder email using these invoice details:

Client Name: ${clientName}
Invoice Number: ${invoiceNumber}
Amount Due: ${amount}
Due Date: ${dueDate}
Invoice Status: ${invoice.status}
`;

    const reminderText = await generateAIResponse(
      systemPrompt,
      userPrompt
    );

    return res.status(200).json({
      reminderText,
    });
  } catch (error) {
    console.error("Groq reminder generation error:", error.message);

    return res.status(502).json({
      message: "Failed to generate payment reminder. Please try again.",
    });
  }
};

// @desc    Generate dashboard financial insights using Groq
// @route   GET /api/ai/dashboard-summary
// @access  Private
const getDashboardSummary = async (req, res) => {
  try {
    const invoices = await Invoice.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    if (invoices.length === 0) {
      return res.status(200).json({
        insights: [
          "No invoice data available to generate insights.",
        ],
      });
    }

    const totalInvoices = invoices.length;

    const paidInvoices = invoices.filter(
      (invoice) => invoice.status === "Paid"
    );

    const unpaidInvoices = invoices.filter(
      (invoice) => invoice.status !== "Paid"
    );

    const totalRevenue = paidInvoices.reduce(
      (sum, invoice) => sum + Number(invoice.total || 0),
      0
    );

    const totalOutstanding = unpaidInvoices.reduce(
      (sum, invoice) => sum + Number(invoice.total || 0),
      0
    );

    const recentInvoices = invoices.slice(0, 5).map((invoice) => ({
      invoiceNumber: invoice.invoiceNumber,
      amount: Number(invoice.total || 0),
      status: invoice.status,
      dueDate: invoice.dueDate || null,
    }));

    const dataSummary = {
      totalInvoices,
      paidInvoices: paidInvoices.length,
      unpaidInvoices: unpaidInvoices.length,
      totalRevenue: Number(totalRevenue.toFixed(2)),
      totalOutstanding: Number(totalOutstanding.toFixed(2)),
      recentInvoices,
    };

    const systemPrompt = `
You are a financial analyst helping a small business owner.

Analyze the invoice statistics and provide 2 to 3 concise,
practical, actionable financial insights.

Return ONLY a valid JSON object in this exact format:

{
  "insights": [
    "First actionable insight",
    "Second actionable insight",
    "Third actionable insight"
  ]
}

Rules:
- The insights must be based only on the supplied data.
- Do not invent financial figures.
- Suggest payment follow-ups when outstanding invoices exist.
- Keep each insight short and useful.
- Do not include markdown or explanations outside JSON.
`;

    const userPrompt = `
Analyze these invoice statistics:

${JSON.stringify(dataSummary, null, 2)}
`;

    const responseText = await generateAIResponse(
      systemPrompt,
      userPrompt
    );

    const parsedData = parseAIJson(responseText);

    if (!Array.isArray(parsedData.insights)) {
      throw new Error("Invalid dashboard insights returned by AI");
    }

    return res.status(200).json({
      insights: parsedData.insights
        .filter((insight) => typeof insight === "string")
        .slice(0, 3),
    });
  } catch (error) {
    console.error("Groq dashboard summary error:", error.message);

    return res.status(502).json({
      message: "Failed to generate dashboard insights. Please try again.",
    });
  }
};

module.exports = {
  parseInvoiceFromText,
  generateReminderEmail,
  getDashboardSummary,
};