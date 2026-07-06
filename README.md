# 🤖 AI Code Reviewer



## ✨ Overview

AI Code Reviewer is a **MERN Stack** web application that leverages the **OpenRouter API** to intelligently review JavaScript code.

Simply paste your code into the editor, and the AI analyzes it to provide:

* ✅ Bug Detection
* ✅ Code Corrections
* ✅ Performance Improvements
* ✅ Best Practice Recommendations
* ✅ Readability Enhancements
* ✅ Clean Code Suggestions

Designed for students, developers, and coding enthusiasts who want instant AI-assisted feedback.



# 🚀 Features

* 🤖 AI-powered JavaScript code review
* ⚡ Instant feedback and suggestions
* 🛠️ Detects syntax and logical issues
* 💡 Performance optimization recommendations
* 📚 Modern JavaScript best practices
* 🎯 Beginner-friendly interface
* 🔒 Secure API key management using Environment Variables
* 📱 Responsive and clean UI



# ⚙️ Tech Stack

### 🎨 Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Axios

### ⚡ Backend

* Node.js
* Express.js
* OpenRouter API
* dotenv
* CORS

### 🛠 Development Tools

* Git
* GitHub
* VS Code
* Nodemon

---

# 🏗️ Architecture

```text
        User
          │
          ▼
   React Frontend
          │
          ▼
 Express.js Backend
          │
          ▼
   OpenRouter API
          │
          ▼
 AI Code Analysis
          │
          ▼
 Review & Suggestions
          │
          ▼
  User Interface




# 🔄 How It Works

1. Paste your JavaScript code into the editor.
2. Click the **Review Code** button.
3. The frontend sends your code to the Express backend.
4. The backend securely communicates with the OpenRouter API.
5. AI analyzes the submitted code.
6. The review, corrections, and suggestions are returned instantly to the frontend.

---

# 🧠 Core Capabilities

* 🔍 Analyze JavaScript code using AI
* 🐞 Detect common coding mistakes
* 🚀 Suggest performance improvements
* 📖 Improve code readability
* ✨ Recommend cleaner coding practices
* 🧩 Encourage modular and maintainable code
* ⚡ Promote efficient coding standards
* 💬 Generate human-readable explanations

ai-code-reviewer/
├── Frontend/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       └── assets/
├── Server/
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── openRouter.js
│       ├── controllers/
│       │   ├── chatController.js
│       │   └── reviewController.js
│       ├── routes/
│       │   ├── chatRoutes.js
│       │   └── reviewRoutes.js
│       └── services/
│           └── aiService.js

# 🚀 Getting Started

## Clone the Repository

bash
git clone https://github.com/kirti24-s/Ai-code-Reviewer.git


bash
cd Ai-code-Reviewer




## Install Dependencies

### Frontend

bash
cd Frontend
npm install


### Backend

bash
cd ../Server
npm install



## Configure Environment Variables

Create a `.env` file inside the **Server** folder.

env
OPENROUTER_API_KEY=your_openrouter_api_key
PORT=5000



## Start the Backend

bash
cd Server
npm run dev




## Start the Frontend

bash
cd Frontend
npm run dev




# 🔒 Environment Variables

| Variable           | Description             |
| ------------------ | ----------------------- |
| OPENROUTER_API_KEY | Your OpenRouter API Key |
| PORT               | Backend Server Port     |

> **Never commit your `.env` file.** Use a `.env.example` file when sharing the project.



# 🌟 Future Improvements

* 🌍 Support for multiple programming languages
* 📊 Code quality score
* 📜 Review history
* 🌙 Dark / Light mode
* 👤 User authentication
* 📥 Export review as PDF
* 💾 Save previous reviews
* 🎨 Better syntax highlighting



# 🤝 Contributing

Contributions are always welcome!

If you'd like to improve this project:

* Fork the repository
* Create a new feature branch
* Commit your changes
* Push your branch
* Open a Pull Request



# 👨‍💻 Author

**Kirti Vivek Sheth**

🐙 **GitHub:** https://github.com/kirti24-s

💼 **LinkedIn:** www.linkedin.com/in/kirti24-s



# ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

It motivates me to build more open-source projects and continue learning.



Made with ❤️ by Kirti Vivek Sheth

