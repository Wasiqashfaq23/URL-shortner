const mongoose=require("mongoose")

const Schema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
         type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
})
const User=mongoose.model("user",Schema)
module.exports=User
