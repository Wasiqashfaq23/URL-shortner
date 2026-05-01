require('dotenv').config()
const express = require("express")
const path = require("path")
const { connectToMongo } = require("./connect")
const routeUrl = require("./Routes/url")
const userRouter = require("./Routes/user")
const app = express()
const port = process.env.PORT || 8001
const cookieParser = require("cookie-parser")
const { checkForAuthentication, restrictTo } = require("./Middleware/Auth")

app.set("view engine", "ejs")
app.set("views", path.resolve("./Views"))


connectToMongo(process.env.MONGO_URI, {
    dbName: "url_shortner"
}).then(() => { console.log("Mongo connected") })
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication)
app.use(express.static("Public"));
app.use("/url", routeUrl)
app.use("/user", userRouter)
app.get("/", (req, res) => {
    return res.render("landing")
})
app.listen(port, () => {
    console.log("Listening at port", port)
})