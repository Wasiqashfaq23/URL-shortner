const express=require("express")
const router = express.Router()
const {handleLogin,handleSignup,renderLogin,renderSignup} = require("../Controller/user")

router.post("/login",handleLogin)
router.post("/signup",handleSignup)

router.get("/login",renderLogin)
router.get("/signup",renderSignup)

module.exports=router