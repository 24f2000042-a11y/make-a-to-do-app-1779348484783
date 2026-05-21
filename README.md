# Todo App (MERN)

A simple, modern **Todo** application built with the MERN stack.

## Features
- Create, read, update (toggle complete), and delete todos.
- Responsive UI with a clean blue theme.
- RESTful API built with Express and MongoDB.
- Front‑end built with React, Vite, and Axios.

## Project Structure

root/
├─ backend/          # Express server
│   ├─ package.json
│   ├─ server.js
│   └─ .env.example
└─ frontend/         # React Vite app
    ├─ package.json
    ├─ index.html
    └─ src/
        ├─ main.jsx
        ├─ App.jsx
        └─ App.css


## Prerequisites
- Node.js (v18 or later)
- npm or yarn
- A MongoDB Atlas account (or local MongoDB instance)

## Setup
### Backend
1. Navigate to the `backend` folder:
   bash
   cd backend
   
2. Install dependencies:
   bash
   npm install
   
3. Copy the example env file and fill in your MongoDB connection string:
   bash
   cp .env.example .env
   
4. Start the server (development mode with nodemon):
   bash
   npm run dev
   
   The API will be available at `http://localhost:5000`.

### Frontend
1. Open a new terminal and go to the `frontend` folder:
   bash
   cd frontend
   
2. Install dependencies:
   bash
   npm install
   
3. (Optional) Create a `.env` file to override the API URL:
   bash
   VITE_API_URL=http://localhost:5000
   
4. Run the development server:
   bash
   npm run dev
   
   Open `http://localhost:5173` in your browser.

## API Endpoints
- `GET /api/todos` – Retrieve all todos.
- `POST /api/todos` – Create a new todo. Body: `{ "title": "Your task" }`
- `PUT /api/todos/:id` – Update a todo (e.g., toggle `completed`). Body: `{ "completed": true }`
- `DELETE /api/todos/:id` – Delete a todo.

## License
This project is open‑source and free to use.
