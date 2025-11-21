# 📘 Quiz Builder — Full-Stack Application

A full-stack web app for creating, listing, viewing, and deleting quizzes.

---

## 🚀 Technologies Used

### **Backend**
- Node.js + Express  
- TypeScript  
- Sequelize + SQLite  
- REST API

### **Frontend**
- React + Vite + TypeScript  
- React Router  
- CSS Modules  
- Fetch API

---

# 🛠️ Setup & Installation

This project contains two main folders:
quiz-builder/
│── backend/
│── frontend/
└── README.md


Follow the steps in order.

---

# 📦 1. Install Dependencies

## **Backend**
```bash
cd backend
npm install
cd ../frontend
npm install
backend/.env
DB_STORAGE=./database.sqlite
PORT=4000

From inside backend, run:
npm start
http://localhost:4000

Inside /frontend
npm run dev
http://localhost:5173
Make sure the backend is running before using the frontend
Testing the Application
✔ Create a quiz

Open:

http://localhost:5173/create


Add title, questions, options → Submit.

✔ View all quizzes

Open:

http://localhost:5173/quizzes

✔ View quiz details

Click any quiz from the list.

✔ Delete a quiz

Click the delete button next to a quiz item.

Optional: Seed Sample Quiz

To create a sample quiz in the database, run:

cd backend
ts-node seed.ts