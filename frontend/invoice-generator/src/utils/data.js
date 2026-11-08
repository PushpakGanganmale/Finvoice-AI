import { BarChart2, FileText, LayoutDashboard, Mail, Plus, Sparkles, Users } from "lucide-react";

export const FEATURES = [
  {
    icon: Sparkles,
    title: "AI Invoice Creation",
    description:
      "Paste any text, email, or receipt, and let our AI instantly generate a complete, professional invoice for you.",
  },
  {
    icon: BarChart2,
    title: "AI-Powered Dashboard",
    description:
      "Get smart, actionable insights about your business finances, generated automatically by our AI analyst.",
  },
  {
    icon: Mail,
    title: "Smart Reminders",
    description:
      "Automatically generate polite and effective payment reminder emails for overdue invoices with a single click.",
  },
  {
    icon: FileText,
    title: "Easy Invoice Management",
    description:
      "Easily manage all your invoices, track payments, and send reminders for overdue payments.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Finvoice AI has completely changed the way I create invoices! I just paste my project details and it instantly generates a clean, professional invoice — and it’s 100% free!",
    author: "Simrat Singh",
    title: "Freelance Graphic Designer",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=AK",
  },
  {
    quote:
      "This is hands down the best free invoicing tool I’ve ever used. It’s simple, accurate, and saves me so much time every month. Finvoice AI feels like having a smart assistant!",
    author: "Ritesh Kumar Verma",
    title: "Startup Founder, Delhi",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=RV",
  },
  {
    quote:
      "I love how user-friendly Finvoice AI is. I just enter my work hours and rates, and the AI does all the math — tax, total, everything. It’s unbelievable that it’s free!",
    author: "Simran Gill",
    title: "Freelance Content Writer",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=SG",
  },
  {
    quote:
      "I used to pay for invoice apps, but Finvoice AI gives me everything I need without any cost. The design is beautiful, and it works flawlessly every time!",
    author: "Arjun Mehta",
    title: "Small Business Owner",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=AM",
  },
];

export const FAQS = [
  {
    question: "How does the AI invoice creation work?",
    answer: "Simply paste any text that contains invoice details—like an email, a list of items, or a work summary—and our AI will instantly parse it to pre-fill a new invoice for you, saving you time and effort."
  },
  {
    question: "Is Finvoice AI free to use?",
    answer: "Yes! Finvoice AI is 100% free — no subscriptions, no trials, and no hidden fees. You can create unlimited invoices without paying a single rupee or dollar."
  },
  {
    question: "How does billing work if everything is free?",
    answer: "There’s no billing system! Finvoice AI is built as a free, community-driven project to help freelancers, startups, and small businesses generate invoices easily."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add notes, payment terms, and even attach files to your invoices."
  },
  {
    question: "Who built Finvoice AI?",
    answer: "Finvoice AI was created by Harsimarpreet Singh Sahota as a passion project to simplify invoice management . It was developed to help freelancers, startups, and small businesses generate invoices effortlessly — all for free."
  },
  {
    question: "How do I change my account name?",
    answer: "You can change your account name from your profile settings page."
  }
];

// Navigation items configuration
export const NAVIGATION_MENU = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "invoices", name: "Invoices", icon: FileText },
  { id: "invoices/new", name: "Create Invoice", icon: Plus },
  { id: "profile", name: "Profile", icon: Users },
];