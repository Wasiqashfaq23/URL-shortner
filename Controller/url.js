const mongoose = require("mongoose")
const shortId = require("shortid")
const URL = require("../Model/url")
async function generateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) { return res.status(400).json({ error: "URL is reuqired" }) }
    const shortID = shortId(8)
    URL.create({
        shortid: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    });
    return res.json(shortID)
}

async function redirectToUrl(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortid: shortId

        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                },
            }
        }
    )
    res.redirect(entry.redirectUrl)
}

async function getAnalytics(req, res) {
    const shortID = req.params.shortId;
    const entry = await URL.findOne({
        shortid: shortID,
    })
    return res.json(
        {
            totalClicks: entry.visitHistory.length,
            analytics: entry.visitHistory

        }

    )
}

module.exports = { generateShortUrl, redirectToUrl, getAnalytics }