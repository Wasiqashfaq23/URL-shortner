const express = require("express")
const router = express.Router();
const { restrictTo } = require("../Middleware/Auth")
const { generateShortUrl, redirectToUrl, getAnalytics, renderHome, renderAll } = require("../Controller/url")
router.get("/home", restrictTo(["Normal" ,"Admin"]), renderHome)
router.get("/admin", restrictTo(["Admin"]), renderAll)
router.get("/analytics/:shortId", getAnalytics)
router.post("/", generateShortUrl)
router.get("/:shortId", redirectToUrl)
module.exports = router