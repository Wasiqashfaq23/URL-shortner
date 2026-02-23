const express=require("express")
const router = express.Router();
const {generateShortUrl,redirectToUrl,getAnalytics,renderHome}= require("../Controller/url")
router.get("/home",renderHome)
router.get("/analytics/:shortId",getAnalytics)
router.post("/",generateShortUrl)
router.get("/:shortId",redirectToUrl)
module.exports=router