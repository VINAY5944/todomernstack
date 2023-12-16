const mongoose=require('mongoose');


const userschema=mongoose.Schema({
name:{type:String},
email:{type:String},
password:{type:String}
})

const usermodel=mongoose.model("todousers",userschema);

module.exports=usermodel