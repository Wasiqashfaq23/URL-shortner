const express=require("express")
const router=express.Router()
const {generateShortUrl,redirectToUrl,getAnalytics}= require("../Controller/url")
router.post("/url",generateShortUrl)
router.get("/:shortId",redirectToUrl)
router.get("/analytics/:shortId",getAnalytics)
module.exports=router