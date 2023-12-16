const express=require('express');
const usermodel=require('../schemas/userschema');
const bcrypt=require('bcrypt')

const createuser=async(req,res)=>{
    const {name,email,password}=req.body;
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(password,salt)
    const alreadyexist=await usermodel.findOne({email});
    console.log('alreadyexist');
    if(alreadyexist){
    res.json('user exist')
    }
    else{
    const userdetail=await usermodel.create({
    name,email,password:hashedpassword  
    })
    res.json(userdetail)
    }
    }
    
    module.exports=createuser;
    
    