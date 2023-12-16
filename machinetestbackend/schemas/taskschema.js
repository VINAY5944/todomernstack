const mongoose=require('mongoose');

const taskschema=mongoose.Schema({
    userId:{type:String},
    todo:{type:String},
    whatnow:{type:String,default:'not completed'},
})

const taskmodel=mongoose.model("taskstodo",taskschema);
module.exports=taskmodel;