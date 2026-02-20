const express = require("express")
const {connectToMongo}=require("./connect")
const routeUrl=require("./Routes/url")
const app=express()
const port = 8001

// connectToMongo("add ur connection string here").then(()=>{console.log("Mongo connected")})
app.use(express.json())
app.use(express.urlencoded({ extended: false })); 
app.use("/",routeUrl)

app.listen(port,()=>{
    console.log("Listening at port",port)
})