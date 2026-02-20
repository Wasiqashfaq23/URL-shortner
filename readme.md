# 🔗 URL Shortener with Analytics

A simple URL Shortener built with **Node.js, Express, and MongoDB**.

It allows users to:
- Generate short URLs
- Redirect to original URLs
- Track total clicks
- View visit history (timestamps)

---

## 🚀 Features

✅ Create short URLs  
✅ Redirect using short ID  
✅ Track total clicks  
✅ Store visit timestamps  
✅ MongoDB database integration  

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- shortid

---

## 📁 File Structure
url-shortener/
│
├── Controller/
│   └── url.js
│
├── Model/
│   └── url.js
│
├── Routes/
│   └── url.js
│
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── README.md

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Wasiqashfaq23/URL-shortner.git
cd URL-shortner
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure MongoDB Connection

⚠️ IMPORTANT:

Update your MongoDB connection string inside:

```
connect.js
```

Example:

```js
connectToMongo("mongodb://localhost:27017/url-shortener")
```

If using MongoDB Atlas:

```js
connectToMongo("your-mongodb-atlas-connection-string")
```

Make sure MongoDB is running before starting the server.

---

### 4️⃣ Start the server

```bash
npm start
```

Server will run on:

```
http://localhost:8001
```

---

## 📌 API Endpoints

### 🔹 Create Short URL

**POST**
```
/url
```

Body (JSON):

```json
{
  "url": "https://www.youtube.com"
}
```

---

### 🔹 Redirect to Original URL

**GET**
```
/:shortId
```

Example:
```
http://localhost:8001/abc123
```

---

### 🔹 Get Analytics

**GET**
```
/analytics/:shortId
```

Response:

```json
{
  "totalClicks": 5,
  "analytics": [
    {
        "timestamp": 1771612100484,
        "_id": "6998a7c4fe76d1b4cdc6aa85"
    }
  ]
}
```

---

## 📊 How It Works

1. User sends a long URL.
2. Server generates a unique short ID.
3. URL is stored in MongoDB.
4. When short URL is visited:
   - User is redirected.
   - Timestamp is stored.
5. Analytics endpoint shows total clicks & visit history.

---

## 👨‍💻 Author

Built by Wasiq