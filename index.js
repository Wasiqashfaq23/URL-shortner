const express = require("express")
const path=require("path")
const {connectToMongo}=require("./connect")
const routeUrl=require("./Routes/url")
const app=express()
const port = 8001

app.set("view engine","ejs")
app.set("views",path.resolve("./Views"))


connectToMongo("mongodb://localhost:27017/").then(()=>{console.log("Mongo connected")})
app.use(express.json())
app.use(express.urlencoded({ extended: false })); 
app.use(express.static("Public"));
app.use("/",routeUrl)

app.listen(port,()=>{
    console.log("Listening at port",port)
})