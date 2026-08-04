<div align="center">

# 🎤 AI Mock Interview

### Practice Interviews. Receive AI Feedback. Improve with Every Attempt.

An AI-powered mock interview platform that simulates real interview experiences using Generative AI, speech recognition, and personalized performance analysis.

<p>

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi"/>
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python"/>
<img src="https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge"/>

</p>

</div>

---

# 📖 Overview

AI Mock Interview is an AI-powered interview preparation platform that helps users practice technical and behavioral interviews through realistic interview simulations.

The platform generates interview questions based on the selected role and experience level, records spoken responses, evaluates answers using Google's Gemini AI, and provides detailed feedback to help users improve confidence, communication, and technical performance.

Instead of static question banks, every interview session is dynamic, allowing users to practice repeatedly while tracking their improvement over time.

---

# ✨ Core Features

| 🚀 Feature | Description |
|------------|-------------|
| 🎯 AI Interview Generation | Creates role-specific interview questions using Gemini AI. |
| 🎤 Speech Recognition | Captures spoken responses for evaluation. |
| 🤖 AI Feedback | Generates detailed strengths, weaknesses, and improvement suggestions. |
| 📊 Performance Dashboard | Displays interview history and performance analytics. |
| 🔐 Secure Authentication | User login and profile management using Clerk. |
| 📝 Interview History | Stores previous interviews for review and comparison. |

---

# 🛠️ Technology Stack

<div align="center">

### Frontend

<p>

<img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind"/>

</p>

### Backend

<p>

<img src="https://skillicons.dev/icons?i=python,fastapi"/>

</p>

### Database

<p>

<img src="https://skillicons.dev/icons?i=mysql"/>

</p>

### Authentication

Clerk Authentication

### Artificial Intelligence

 Google Gemini API
 Prompt Engineering
 Natural Language Processing
 Speech Recognition
 AI Response Evaluation

### Development Tools

<p>

<img src="https://skillicons.dev/icons?i=git,github,vscode"/>

</p>

</div>

---

# 🏗️ System Architecture

```text
                         User
                           │
                           ▼
                Next.js + React Frontend
                           │
                    Clerk Authentication
                           │
                           ▼
                  Interview Dashboard
                           │
          Select Role & Experience Level
                           │
                           ▼
                Gemini AI Question Generator
                           │
                     Interview Session
                           │
                 Speech-to-Text Processing
                           │
                           ▼
                  Gemini AI Evaluation
                           │
                           ▼
                  Feedback & Suggestions
                           │
                           ▼
                  Interview History
                           │
                           ▼
                 Performance Dashboard
```

---

# 📂 Project Structure

```text
AI-Mock-Interview/

├── app/
├── components/
├── lib/
├── utils/
├── public/
├── hooks/
├── constants/
├── database/
├── drizzle/
├── package.json
├── README.md
└── ...
```

---

# 🎯 Workflow

1. User signs in using Clerk Authentication.
2. User selects a job role and experience level.
3. Gemini AI generates personalized interview questions.
4. User answers questions using voice.
5. Speech Recognition converts responses to text.
6. Gemini AI evaluates each response.
7. AI generates personalized feedback.
8. Results are stored for future review.
9. Dashboard tracks progress across interview sessions.

---

# 🚀 Getting Started

## Prerequisites

Before running the project, ensure you have:

- Node.js 18+
- Python 3.10+
- npm
- Git

---

## Clone Repository

```bash
git clone https://github.com/Deepti-Saudari/AI-Mock-Interview.git

cd AI-Mock-Interview
```

---

## Install Frontend

```bash
npm install

npm run dev
```

---

## Install Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

---

# 🔑 Environment Variables

Create a `.env` file.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_KEY
CLERK_SECRET_KEY=YOUR_KEY
GEMINI_API_KEY=YOUR_KEY
DATABASE_URL=YOUR_DATABASE_URL
```

---

# 🌟 Why This Project?

This project was built to make interview preparation more interactive and personalized by combining AI-generated interview questions with speech recognition and automated evaluation.

It demonstrates practical integration of:

- Google Gemini API
- FastAPI REST APIs
- Authentication using Clerk
- AI-powered feedback generation
- Full-stack application development
- Real-world AI workflow implementation

---

# 📈 Future Enhancements

- [x] AI Interview Generation
- [x] AI Feedback
- [x] Speech Recognition
- [x] Authentication
- [x] Interview History
- [ ] Resume-based Interviews
- [ ] Company-specific Interview Templates
- [ ] Coding Interview Support
- [ ] Video Interview Mode
- [ ] Recruiter Dashboard
- [ ] Cloud Deployment

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

Licensed under the **MIT License**.

---

# 👩‍💻 Author

**Deepti Saudari**

📧 saudarideepti@gmail.com

💼 https://www.linkedin.com/in/deepti-saudari/

🐙 https://github.com/Deepti-Saudari

---

<div align="center">

## ⭐ If you found this project useful, consider giving it a Star!

Built with ❤️ using AI and modern web technologies.

</div>
