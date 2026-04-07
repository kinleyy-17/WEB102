# 🎵 TikTok REST API (Backend)

## 📌 Overview
This project is a RESTful API for a TikTok-like application. It is built using Node.js and Express, and it provides backend services for managing users, videos, and comments. The API allows communication between the frontend and backend through structured endpoints.

---

## 🎯 Aim
The aim of this project is to design and implement a RESTful API that handles core functionalities such as creating users, uploading videos, and managing comments using standard HTTP methods.

---

## 📚 Theory
A RESTful API (Representational State Transfer) is a web service architecture that uses HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources.

In this project:
- Express.js is used to build the server.
- Routes define API endpoints.
- Controllers handle logic.
- In-memory data structures simulate a database.
- API testing is done using Postman or curl.

This structure ensures scalability, modularity, and clean separation of concerns.

---

## ⚙️ Tech Stack
- Node.js
- Express.js
- CORS
- Morgan
- Body-parser
- Dotenv

---

## 📁 Project Structure


---

## 🚀 Installation & Setup

1. Clone the repository:
```bash
git clone <your-repo-link>
cd server

🔗 API Endpoints
📹 Videos
GET /api/videos → Get all videos
POST /api/videos → Create new video
GET /api/videos/:id → Get video by ID
PUT /api/videos/:id → Update video
DELETE /api/videos/:id → Delete video
👤 Users
GET /api/users → Get all users
POST /api/users → Create user
GET /api/users/:id → Get user by ID
PUT /api/users/:id → Update user
DELETE /api/users/:id → Delete user
💬 Comments
GET /api/comments → Get all comments
POST /api/comments → Create comment
GET /api/comments/:id → Get comment by ID
PUT /api/comments/:id → Update comment
DELETE /api/comments/:id → Delete comment
🧪 Testing API

Use Postman or curl:

curl -X GET http://localhost:3000/api/users
curl -X GET http://localhost:3000/api/videos
curl -X GET http://localhost:3000/api/users/1