const express=require('express');
const connection=require('./mongooseconfig.js');
const cors=require('cors');
const router = require('./router.js');



connection();
const app=express();
app.use(express.json());
app.use(cors());
app.use('/',router)
const port=5000;
app.listen(port,console.log(`the port is  running on the port ${port}`))