const User = require("../Model/user")
const bcrypt = require('bcrypt');
const { setUser } = require("../Service/Auth")


async function handleSignup(req, res) {
    const { userName, email, password } = req.body;
    const user=await User.findOne({email})
    if(user){
        return res.render("signup",{error:"User with this email already exists"})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
        userName,
        email,
        password: hashedPassword,
    })
    return res.redirect("/url/home")
}
async function handleLogin(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
        email
    })
    if (!user) { return res.render("login", { error: "invalid Username or password" }) }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) { return res.render("login", { error: "invalid Username or password" }) }
    const token = setUser(user)
    res.cookie("token",token)
    return res.redirect("/url/home")
}

async function handlelogout(req,res){
    res.clearCookie("token")
    return res.redirect("/user/login")
}
async function renderLogin(req, res) {
    return res.render("login")
}

async function renderSignup(req, res) {
    return res.render("signup")
}

module.exports = { handleLogin, handleSignup, renderLogin, renderSignup, handlelogout }