const express=require("express")
const router = express.Router({ mergeParams: true });
const {generateShortUrl,redirectToUrl,getAnalytics,renderHome}= require("../Controller/url")
router.get("/url/home",renderHome)
router.get("/analytics/:shortId",getAnalytics)
router.post("/url",generateShortUrl)
router.get("/:shortId",redirectToUrl)
module.exports=router