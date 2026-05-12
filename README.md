# Supervisor Feedback Analyzer

AI-powered web application that analyzes supervisor feedback transcripts using a local LLM through Ollama.

The tool helps psychology interns review supervisor conversations faster by generating:
- Suggested performance score
- Evidence extraction
- Strengths and weaknesses
- KPI mapping
- Gap analysis
- Follow-up questions

---

# Tech Stack

## Frontend
- React
- Vite

## Backend
- Node.js
- Express

## AI Integration
- Ollama
- llama3.2 model

---

# Features

- Paste supervisor transcript
- Run AI-powered analysis
- Structured JSON output
- Suggested scoring system
- Evidence extraction
- Follow-up question generation
- KPI mapping
- Gap analysis

---

# Architecture

Frontend (React) → Backend API (Express) → Ollama Local LLM

The frontend sends transcript data to the backend.
The backend creates a structured prompt and sends it to Ollama using the local API.
The AI response is parsed and displayed in the frontend UI.

---

# Ollama Setup

Install Ollama from:

https://ollama.com

Pull the model:

```bash
ollama pull llama3.2
```

Start Ollama before running the application.

---

# Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```txt
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# Challenges Solved

## 1. Structured Output Reliability
LLMs sometimes return inconsistent responses.
To improve reliability, structured prompting and JSON-only responses were used.

## 2. Showing Uncertainty
The UI clearly presents the analysis as an AI-generated draft instead of a final decision.

## 3. Evidence Extraction
The prompt was designed to extract positive and negative behavioral evidence from supervisor transcripts.

---

# Future Improvements

- Editable analysis fields
- Side-by-side transcript and analysis view
- Confidence scoring
- Export analysis as PDF
- Multi-prompt analysis pipeline
- Better UI styling

---

# Sample Workflow

1. Paste supervisor transcript
2. Click "Run Analysis"
3. AI generates structured assessment
4. User reviews output

---

# Model Used

Model: llama3.2

Reason:
Chosen because it provides a good balance between reasoning quality and performance on standard laptops.
