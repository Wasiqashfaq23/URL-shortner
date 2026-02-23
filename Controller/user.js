const User = require("../Model/user")
const { v4: uuidv4 } = require("uuid")
const { setUser } = require("../Service/Auth")


async function handleSignup(req, res) {
    const { userName, email, password } = req.body;
    await User.create({
        userName,
        email,
        password,
    })
    return res.redirect("/url/home")
}
async function handleLogin(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
        email, password
    })
    if (!user) { return res.render("login", { error: "invalid Username or password" }) }
    const sessionId=uuidv4(); 
    setUser(sessionId,user)
    res.cookie("uid",sessionId)

    return res.redirect("/url/home")
}


async function renderLogin(req, res) {
    return res.render("login")
}

async function renderSignup(req, res) {
    return res.render("signup")
}

module.exports = { handleLogin, handleSignup, renderLogin, renderSignup }