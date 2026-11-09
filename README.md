# Finvoice AI

### AI-Powered Invoice Generator & Finance Assistant

<p align="left">
  <a href="https://finvoice-ai-arw2.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20App-brightgreen?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://github.com/PushpakGanganmale/Finvoice-AI">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repository" />
  </a>
</p>

Finvoice AI is a full-stack invoicing and finance assistant designed to simplify invoice creation and basic financial workflows. It uses **Groq-powered LLM integration** to transform natural-language descriptions into structured invoice data, helping users reduce manual data entry and manage invoices more efficiently.

The application combines AI-assisted invoice generation, invoice management, payment-status tracking, PDF generation, payment reminders, and revenue insights in one platform.

---

## Live Application

**Live Demo:** https://finvoice-ai-arw2.vercel.app/

**GitHub Repository:** https://github.com/PushpakGanganmale/Finvoice-AI

---

## Key Features

### AI-Powered Invoice Generation
- Convert natural-language descriptions into structured invoice data.
- Extract client details, invoice items, quantities, and prices using an LLM.
- Generate invoice content through the Groq API.
- Uses the `openai/gpt-oss-120b` model through Groq.

### Invoice Management
- Create, view, update, and manage invoices.
- Organize invoice records in a centralized dashboard.
- Track invoice details and payment status.
- Manage invoice lifecycle through different statuses.

### Payment Tracking
- Track invoices as Paid, Unpaid, or Overdue.
- Monitor outstanding invoices.
- Manage payment-related information.

### PDF Generation
- Generate downloadable invoice PDFs.
- Present invoice information in a structured document format.

### Finance Dashboard
- View invoice and revenue-related insights.
- Monitor invoice activity and payment statuses.
- Access financial information through a centralized interface.

### Payment Reminders
- Generate AI-assisted payment reminder messages.
- Help users prepare professional follow-up messages for outstanding invoices.

### Security & Backend
- JWT-based authentication and protected routes.
- MongoDB-based data persistence.
- RESTful API architecture.
- Backend request handling and error management.

---

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, Vite |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, MongoDB Atlas |
| AI Integration | Groq API, `openai/gpt-oss-120b` |
| Authentication | JWT |
| Testing | Jest |
| CI/CD | GitHub Actions |
| Deployment | Vercel |

---

## Application Architecture

```text
                  User
                   |
                   v
            React Frontend
                   |
                   v
             REST API
                   |
                   v
          Node.js + Express
                   |
          +--------+---------+
          |                  |
          v                  v
       MongoDB            Groq API
          |                  |
          v                  v
    Invoice Data       AI Processing
          |                  |
          +--------+---------+
                   |
                   v
          Structured Response
                   |
                   v
          React Dashboard
```

---

## AI Invoice Generation Workflow

1. The user enters an invoice description in natural language.
2. The frontend sends the input to the backend API.
3. The backend sends the prompt to the Groq API.
4. The `openai/gpt-oss-120b` model processes the input.
5. The AI response is converted into structured invoice data.
6. The frontend displays the generated invoice for review.
7. The user can manage the invoice and generate a PDF.

---

## Project Structure

```text
Finvoice-AI/
│
├── frontend/
│   └── invoice-generator/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── utils/
│       │   └── ...
│       └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── tests/
│   └── server.js
│
├── .github/
│   └── workflows/
│
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account or a local MongoDB instance
- Groq API key

### 1. Clone the Repository

```bash
git clone https://github.com/PushpakGanganmale/Finvoice-AI.git

cd Finvoice-AI
```

### 2. Configure Backend Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
```

Use the environment variable names expected by your backend configuration. Never commit real API keys or secrets.

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Start the Backend

```bash
npm start
```

### 5. Configure Frontend Environment Variables

Create a `.env` file inside the frontend application directory.

```env
VITE_API_URL=http://localhost:5000
```

For production, configure `VITE_API_URL` with your deployed backend API URL.

### 6. Install Frontend Dependencies

```bash
cd frontend/invoice-generator
npm install
```

### 7. Start the Frontend

```bash
npm run dev
```

Open the local development URL displayed in your terminal.

---

## Testing

The project uses **Jest** for automated testing.

Run the test suite from the directory containing the test configuration:

```bash
npm test
```

Run tests with coverage, if configured:

```bash
npm test -- --coverage
```

---

## Deployment

The application is deployed and accessible through Vercel.

**Production URL:** https://finvoice-ai-arw2.vercel.app/

For production deployment:
- Configure the required environment variables in the deployment platform.
- Set the frontend API URL to the deployed backend endpoint.
- Configure MongoDB connectivity and production CORS settings.
- Keep API keys and authentication secrets out of source control.

---

## Future Improvements

- Advanced financial analytics and reporting.
- Recurring invoice generation.
- Multi-currency invoice support.
- Improved invoice search and filtering.
- More comprehensive automated testing.
- Additional AI-assisted finance workflows.

---

## Developer

**Pushpak Ganganmale**

Computer Engineering Graduate | Full-Stack Developer | AI Enthusiast

- **LinkedIn:** [linkedin.com/in/pushpakganganmale](https://www.linkedin.com/in/pushpakganganmale/)
- **GitHub:** [github.com/PushpakGanganmale](https://github.com/PushpakGanganmale)
- **LeetCode:** [leetcode.com/u/Pushpak_G_3010](https://leetcode.com/u/Pushpak_G_3010/)
- **Email:** pushpakganganmale12345@gmail.com

---

<p align="center">
  <b>Finvoice AI — Simplifying Invoicing with AI.</b>
</p>
