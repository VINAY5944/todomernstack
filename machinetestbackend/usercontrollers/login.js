const express=require('express');
const usermodel=require('../schemas/userschema')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const JWT_SECRET="12345"
const login=async(req,res)=>{

    const {email,password}=req.body;
    const userdata=await usermodel.findOne({email});

    if(userdata  && (await bcrypt.compare(password,userdata.password))){


      

      res.json({

        Id:userdata._id,
        name:userdata.name,
        email:userdata.email,
        password:userdata.password,
        token:tokengenerate(userdata._id)
        });

    }

    else{

        res.json('failed')
    }
}


const tokengenerate=(id)=>{
    return jwt.sign({id},JWT_SECRET,{
    
    expiresIn:'30d'
    
    })        
    
    }
module.exports=login