# 🔗 URL Shortener with Analytics

A simple URL Shortener built with **Node.js, Express, MongoDB, and EJS**.

It allows users to:
- Generate short URLs
- Redirect to original URLs
- Track total clicks
- View visit history (timestamps)
- Use a clean web dashboard interface

---

## 🚀 Features

✅ Create short URLs from web form  
✅ Redirect using short ID  
✅ Track total clicks  
✅ Store visit timestamps  
✅ View all URLs in dashboard  
✅ Server-side rendering using EJS  
✅ Styled UI using CSS  
✅ MongoDB database integration  

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- CSS
- shortid

---

## 📁 File Structure

```
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
├── Views/
│   └── home.ejs
│
├── Public/
│   └── style.css
│
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

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

`connect.js`

Example (Local MongoDB):

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

## 🌐 Web Interface

Open in your browser:

```
http://localhost:8001/url/home
```

From the UI you can:

- Enter a long URL
- Generate a short link
- View all stored URLs
- See total click count
- Click short link to redirect

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
      "timestamp": 1771612100484
    }
  ]
}
```

---

## 📊 How It Works

1. User sends a long URL (via API or web form).
2. Server generates a unique short ID.
3. URL is stored in MongoDB.
4. When short URL is visited:
   - User is redirected.
   - Timestamp is stored.
5. Dashboard displays all URLs and click counts.
6. Analytics endpoint shows total clicks & visit history.

---

## 👨‍💻 Author

Built by Wasiq