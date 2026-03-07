# 🔗 URL Shortener with Authentication & Analytics

A modern full-stack URL Shortener built using **Node.js, Express.js, MongoDB, Mongoose, and EJS** with cookie-based authentication and role-based dashboard access.

This project allows users to generate short URLs, track analytics, and manage links securely using middleware-protected routes.

---

## ✨ Features

### 🔐 Authentication System

* User Signup & Login
* Cookie-based JWT Session Handling
* Role-Based Access Control (Normal & Admin)
* Protected Dashboard Routes

### 🔗 URL Management

* Generate unique short URLs
* Redirect to original URLs
* Track click counts
* Store visit timestamps
* User-specific URL dashboard

### 📊 Analytics

* Total click tracking
* Visit history monitoring

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB & Mongoose
* EJS (Server-side Rendering)
* Cookie Parser
* UUID
* URL short ID generator
* CSS for UI styling

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
│
└── README.md
```

---

## 📦 Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Wasiqashfaq23/URL-shortner.git
cd URL-shortner
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure MongoDB Connection

Edit `connect.js`:

Local MongoDB:

```js
connectToMongo("mongodb://localhost:27017/url-shortener")
```

MongoDB Atlas:

```js
connectToMongo("your-atlas-connection-string")
```

Make sure MongoDB service is running before starting the server.

---

### Run Application

```bash
npm start
```

Server will start at:

```
http://localhost:8001
```

---

## 🌐 API & Application Routes

### Authentication Routes

| Method | Route          | Description        |
| ------ | -------------- | ------------------ |
| GET    | `/user/login`  | Render login page  |
| POST   | `/user/login`  | User login         |
| GET    | `/user/signup` | Render signup page |
| POST   | `/user/signup` | Create user        |

---

### Protected Dashboard Routes

| Method | Route                     | Description                     |
| ------ | ------------------------- | ------------------------------- |
| GET    | `/url/home`               | User dashboard (Normal + Admin) |
| GET    | `/url/admin`              | Admin dashboard                 |
| POST   | `/url`                    | Create short URL                |
| GET    | `/url/analytics/:shortId` | View analytics                  |

---

### Public Routes

| Method | Route       | Description              |
| ------ | ----------- | ------------------------ |
| GET    | `/:shortId` | Redirect to original URL |

---

## 🔄 Workflow

1. User registers or logs in
2. Server generates JWT token stored in cookies
3. Middleware verifies authentication
4. Role-based authorization controls dashboard access
5. Users can create and manage their short URLs
6. Analytics track link visits

---

## 🧠 Key Concepts Used

* MVC Architecture
* Middleware-based authentication
* JWT-based cookie session handling
* MongoDB ObjectId relationships
* Role-based authorization
* Server-side rendering with EJS

---

## ⚠️ Security Notes

* Passwords are stored in plaintext.
* Session handling is for learning/demo purposes.
* Not production-ready session handling.

---

## 👨‍💻 Author

**Wasiq**
