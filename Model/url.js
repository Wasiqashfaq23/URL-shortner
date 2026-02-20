const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    shortid:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
    visitHistory:[{timestamp:{type:Number}}]
},{timestaps:true})
const URL = mongoose.model('url', schema)
module.exports = URL