# 🧾 Finvoice AI
### AI-Powered Invoice Generator & Finance Assistant

Finvoice AI is an AI-powered, full-stack SaaS application designed to automate invoicing and simplify financial workflows for freelancers and small businesses.

It converts unstructured text into structured invoices, generates AI-powered payment reminders, tracks invoice payments, and provides revenue insights through an intuitive dashboard.

## 🌐 Live Demo

🔗 **Live Application:** [https://www.finvoiceai.app](https://www.finvoiceai.app)

## 🧠 Overview

Finvoice AI helps freelancers and small businesses manage their invoicing operations efficiently using Artificial Intelligence.

The application transforms plain-text descriptions, emails, and notes into structured invoice data. It also generates professional payment reminder emails and provides a centralized dashboard for tracking financial activities.

### Key Capabilities

- Convert unstructured text into structured invoices using AI.
- Create, update, and manage invoices.
- Generate AI-powered payment reminder emails.
- Track paid, unpaid, and overdue invoices.
- Monitor revenue and payment statistics.
- Export invoices as PDF documents.
- Securely manage user accounts and business details.

From a development perspective, this project demonstrates full-stack development, REST API integration, LLM integration, authentication, database management, automated testing, Docker, and CI/CD.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, Tailwind CSS, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| AI Provider | Groq API |
| AI Model | openai/gpt-oss-120b |
| Authentication | JWT, bcryptjs |
| API Architecture | REST APIs |
| Testing | Jest |
| CI/CD | GitHub Actions |
| Deployment | Vercel |
| Containerization | Docker, Docker Compose |
| Environment Configuration | dotenv |

## ✨ Features

### 🔐 Authentication & Security

- Secure user registration and login.
- JWT-based authentication.
- Password hashing using bcryptjs.
- Protected routes and authenticated API access.
- Environment-based secret management.

### 🧾 Invoice Management

- Create, edit, and delete invoices.
- Manage client information and invoice line items.
- Track payment statuses.
- Generate downloadable PDF invoices.
- Manage invoices through REST APIs.

### 🧠 AI-Powered Tools

#### AI Invoice Generator

- Convert plain text into structured invoice data.
- Extract client details, items, quantities, and pricing.
- Generate invoice drafts using Groq LLM API.
- Automate repetitive invoice creation workflows.

#### AI Payment Reminder Generator

- Generate professional payment reminder emails.
- Create contextual reminders for outstanding invoices.
- Reduce manual effort in payment follow-ups.

#### AI Finance Assistant

- Generate invoice-related summaries and insights.
- Support financial workflow automation.
- Assist users with invoice management.

### 📊 Dashboard & Analytics

- Monitor invoice statistics.
- Track paid and unpaid invoices.
- View revenue and payment insights.
- Access invoice records from a centralized dashboard.

### 📱 Modern UI

- Responsive React-based interface.
- Tailwind CSS styling.
- Interactive dashboard.
- Axios-based frontend-backend communication.

## 🏗️ Architecture Diagram

```text
                 ┌─────────────────────┐
                 │    React + Vite     │
                 │      Frontend       │
                 │       Vercel        │
                 └──────────┬──────────┘
                            │
                       REST APIs
                            │
                 ┌──────────▼──────────┐
                 │    Node.js +        │
                 │    Express.js       │
                 │     Backend         │
                 │      Vercel         │
                 └──────┬───────┬──────┘
                        │       │
             ┌──────────▼──┐ ┌──▼──────────┐
             │ MongoDB     │ │ Groq AI API │
             │ Atlas       │ │ LLM Engine  │
             └─────────────┘ └─────────────┘
```

## 📂 Project Structure

```text
Finvoice-AI/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── aiController.js
│   │   ├── authController.js
│   │   └── invoiceController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Invoice.js
│   │   └── User.js
│   ├── routes/
│   │   ├── aiRoutes.js
│   │   ├── authRoutes.js
│   │   └── invoiceRoutes.js
│   ├── tests/
│   │   └── auth.test.js
│   ├── server.js
│   └── .env.example
│
├── frontend/
│   └── invoice-generator/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── context/
│       │   ├── pages/
│       │   ├── utils/
│       │   ├── test/
│       │   ├── App.jsx
│       │   ├── index.css
│       │   └── main.jsx
│       ├── public/
│       ├── screenshots/
│       └── vite.config.js
│
├── docker-compose.yml
├── .github/
│   └── workflows/
│
├── .env.example
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/PushpakGanganmale/Finvoice-AI.git

cd Finvoice-AI
```

### 2. Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend directory.

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=openai/gpt-oss-120b
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend/invoice-generator

npm install
```

Create a `.env` file:

```env
VITE_API_URL=your_backend_api_url
```

Start the frontend development server:

```bash
npm run dev
```

Visit:

http://localhost:5173

## 🐳 Docker Setup

Run the application using Docker Compose:

```bash
docker-compose up --build
```

Ensure the environment variables and service ports are configured correctly in `docker-compose.yml`.

## 🔄 Continuous Integration / Continuous Deployment (CI/CD)

Finvoice AI uses GitHub Actions to automate development workflows.

### CI/CD Pipeline

- Automated Jest unit tests.
- Backend quality checks.
- Frontend build verification.
- Automated workflows on GitHub pushes and pull requests.
- Docker-based environment consistency.
- Deployment through Vercel.

The CI pipeline helps maintain application reliability by verifying builds and tests before changes are integrated.

## 🧪 Testing

Finvoice AI uses Jest for automated unit testing.

### Testing Coverage

- Authentication logic.
- API functionality.
- AI generation logic with mocked API responses.
- Invoice-related business logic.

### Run Tests

```bash
cd backend

npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 📈 Scaling Plan

| # | Strategy | Purpose |
|---|---|---|
| 1 | AI endpoint rate limiting | Prevent API abuse |
| 2 | Redis queues | Handle asynchronous AI workloads |
| 3 | MongoDB indexing | Improve invoice query performance |
| 4 | CDN optimization | Improve frontend delivery |
| 5 | Cloud file storage | Manage invoice documents efficiently |
| 6 | Redis caching | Improve dashboard response times |
| 7 | Financial forecasting | Provide predictive revenue insights |

## 🔐 Security Practices

- JWT-based authentication.
- Password hashing using bcryptjs.
- Protected API routes.
- Input validation.
- Centralized error handling.
- Environment variables for sensitive credentials.
- Secure database configuration.
- API key protection.
- No secrets committed to GitHub.

## 💡 Inspiration

Finvoice AI was developed to explore how Artificial Intelligence can automate repetitive financial workflows for freelancers and small businesses.

The project combines traditional SaaS functionality with LLM-powered automation to simplify invoice generation, payment reminders, and financial management.

## 👨‍💻 Author

**Pushpak Vilas Ganganmale**

Software Engineer | Full Stack Developer | AI Enthusiast

- GitHub: [PushpakGanganmale](https://github.com/PushpakGanganmale)
- LinkedIn: [Pushpak Ganganmale](https://linkedin.com/in/pushpak-ganganmale-784a0a32b/)

## 🪪 License

This project is licensed under the MIT License.
