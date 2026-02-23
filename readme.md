# 🔗 URL Shortener with User Authentication & Analytics

A full-stack URL Shortener built using **Node.js, Express, MongoDB, Mongoose, EJS, and Cookie-based Authentication**.

This application allows users to create short URLs, track analytics, and manage their own links through a secure dashboard.

---

## 🚀 Features

### 🔐 Authentication
- User Signup
- User Login
- Cookie-based Session Management
- Protected Dashboard (per-user URLs)
- Logout functionality

### 🔗 URL Management
- Generate short URLs
- Redirect to original URLs
- Track total clicks
- Store visit timestamps
- View only your own URLs
- Clean dashboard interface

### 📊 Analytics
- Total click count
- Timestamp-based visit history
- REST endpoint for analytics

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Server-side rendering)
- Cookie-Parser
- UUID (Session IDs)
- shortid (URL generation)
- CSS

---

## 📁 Project Structure

```
url-shortener/
│
├── Controller/
│   ├── url.js
│   └── user.js
│
├── Model/
│   ├── url.js
│   └── user.js
│
├── Routes/
│   ├── url.js
│   └── user.js
│
├── Middleware/
│   └── Auth.js
│
├── Service/
│   └── Auth.js
│
├── Views/
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── Public/
│   ├── style.css
│   ├── login.css
│   └── signup.css
│
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Installation Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Wasiqashfaq23/URL-shortner.git
cd URL-shortner
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure MongoDB

Open `connect.js` and update:

For Local MongoDB:
```js
connectToMongo("mongodb://localhost:27017/url-shortener")
```

For MongoDB Atlas:
```js
connectToMongo("your-atlas-connection-string")
```

Make sure MongoDB is running before starting the server.

---

### 4️⃣ Start Server

```bash
npm start
```

Server runs on:

```
http://localhost:8001
```

---

## 🌐 Application Routes

### 🔐 Authentication

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/user/login` | Render login page |
| POST | `/user/login` | Login user |
| GET | `/user/signup` | Render signup page |
| POST | `/user/signup` | Create new user |
| GET | `/user/logout` | Logout user |

---

### 🔗 URL Routes (Protected)

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/url/home` | Dashboard (User URLs only) |
| POST | `/url` | Create short URL |
| GET | `/url/analytics/:shortId` | Get analytics |

---

### 🌍 Public Route

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/:shortId` | Redirect to original URL |

---

## 🔄 How It Works

1. User signs up or logs in.
2. A unique session ID is generated and stored in cookies.
3. User creates a short URL.
4. URL is saved with `createdBy` referencing that user.
5. Dashboard shows only URLs created by that user.
6. When a short link is visited:
   - User is redirected.
   - Timestamp is stored.
7. Analytics endpoint provides click history.

---

## 🧠 Core Concepts Used

- MVC Architecture
- Cookie-based session handling
- MongoDB relationships using ObjectId (`createdBy`)
- Middleware-based route protection
- Server-side rendering with EJS

---

## ⚠️ Notes

- Sessions are stored in memory using `Map` (for learning purposes only).
- Not production-ready session handling.
- Passwords are currently stored in plain text (hashing recommended for production).

---

## 👨‍💻 Author

Wasiq  