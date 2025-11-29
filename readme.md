MERN Boilerplate with Backend Authentication 🔥
A production-ready MERN stack starter kit with complete backend authentication system and clean React Vite frontend setup. ⚡

🎯 Overview
This boilerplate provides a solid foundation for building full-stack web applications with MongoDB, Express.js, React, and Node.js. It features a complete backend authentication system with JWT tokens and a minimal, ready-to-customize React frontend. 🚀

✨ What's Included
🔧 Backend Features ✅
🔐 Complete JWT Authentication System

👥 User Registration & Login APIs

🛡️ Protected Route Middleware

🔒 Password Hashing with bcrypt

🗄️ MongoDB Integration with Mongoose

🌐 CORS Configuration

⚙️ Environment Variables Setup

❌ Error Handling Middleware

🔐 Security Best Practices

🎨 Frontend Features ✅
⚡ React 18 with Vite (Fast Development)

🧭 React Router DOM Setup

📡 Axios Pre-configured for API Calls

🎯 React Icons Integrated

📱 Responsive UI Components

🔧 Environment Configuration

🔌 API Utility Functions Ready

🏗️ Clean Project Structure

❌ What's NOT Included
🎭 Frontend Authentication State Management

🚫 Protected Routes on Frontend

🔄 Authentication Context/Redux

📝 Pre-built Auth Forms & Components

💾 Frontend Token Storage Logic

📋 Backend API Endpoints
🔐 Authentication Routes
Method Endpoint Description Body
POST /api/user/signup Register new user {name, email, password}
POST /api/user/signin Login user {email, password}
GET /api/user/me Get current user Protected
POST /api/user/logout Logout user -
🛠 Tech Stack
🎨 Frontend
React 18 - UI Library ⚛️

Vite - Build Tool & Dev Server 🚀

React Router DOM - Client-side Routing 🧭

Axios - HTTP Client 📡

React Icons - Icon Library 🎯

🔧 Backend
Node.js - Runtime Environment 🏃‍♂️

Express.js - Web Framework 🌐

MongoDB - Database 🗄️

Mongoose - ODM 🎯

JWT - Authentication Tokens 🔐

bcryptjs - Password Hashing 🔒

CORS - Cross-Origin Resource Sharing 🌐

📦 Installation & Setup
🚀 Quick Start
bash

# 1. Install backend dependencies

cd server && npm install

# 2. Install frontend dependencies

cd ../client && npm install

# 3. Setup environment variables

# Server: PORT, MONGODB_URI, JWT_SECRET

# Client: VITE_API_URL

# 4. Start development servers

# Terminal 1: cd server && npm run dev

# Terminal 2: cd client && npm run dev

⚙️ Environment Setup
🔧 Backend (.env)

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-app
JWT_SECRET=your_strong_jwt_secret_here
🎨 Frontend (.env)

env
VITE_API_URL=http://localhost:5000/api

🏗 Project Structure
text
mern-boilerplate/
├── 🎨 client/ # React Vite Frontend
│ ├── src/
│ │ ├── components/ # UI Components 🧩
│ │ ├── pages/ # Page Components 📄
│ │ └── utils/ # API Utilities 🔌
├── 🔧 server/ # Express Backend
│ ├── controllers/ # Route Logic 🎮
│ ├── models/ # Database Models 🗄️
│ ├── routes/ # API Routes 🛣️
│ ├── middleware/ # Auth & Error Middleware 🛡️
│ └── config/ # DB Configuration ⚙️
└── 📖 README.md

🎯 Usage Notes
🔧 For Backend Development
✅ Complete authentication system ready

✅ JWT tokens generated and verified

✅ Protected routes with middleware

✅ MongoDB models and connections setup

✅ Error handling implemented

🎨 For Frontend Development
✅ Basic React app structure

✅ API utility functions provided

✅ Routing setup ready

🔄 You need to implement:

🎭 Authentication state management

💾 Token storage (localStorage/cookies)

🚫 Protected route components

📝 Login/Register forms UI

👤 User context/state

🔧 Available Scripts
🔧 Backend

npm run dev - Start development server with nodemon 🔄

npm start - Start production server 🚀

🎨 Frontend

npm run dev - Start Vite development server ⚡

npm run build - Build for production 📦

npm run preview - Preview production build 👀

🚀 Deployment Ready
✅ Backend configured for production

✅ Frontend build system optimized

✅ Environment variables setup

✅ CORS configured for deployment

📝 Ideal For
🚀 Starting new MERN projects quickly

📚 Learning full-stack development

💡 Prototyping applications

🔐 Projects needing backend authentication

👨‍💻 Developers who want to implement their own frontend auth logic

💡 Next Steps After Installation
🎭 Implement frontend authentication context

📝 Create login/register form components

💾 Add token storage mechanism

🚫 Implement protected routes on frontend

🛠️ Add your business logic and features
