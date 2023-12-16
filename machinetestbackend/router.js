const express=require('express');
const login = require('./usercontrollers/login');
const createuser = require('./usercontrollers/signup');
const createtask = require('./taskcontrollers/create');
const protect=require('./tokenverificationmiddleware');
const deletetask = require('./taskcontrollers/delete');
const updatetask = require('./taskcontrollers/update');
const getalltasks = require('./taskcontrollers/getalltasks');
const getsingletasks = require('./taskcontrollers/getasingletask');

const jsonmiddleware=[protect]
const router=express.Router()


/////user routes
router.route('/login').post(login);
router.route('/signup').post(createuser);



///taskroutes


//creating a newtask
router.route('/newtask/:id').post(jsonmiddleware,createtask)
///delete task
router.route('/deletetask/:id').delete(jsonmiddleware,deletetask)
//update task
router.route('/updatetask/:id').put(jsonmiddleware,updatetask)

///get all usertask
router.route("/getalltask/:id").get(jsonmiddleware,getalltasks)


//get a specific task
router.route('/getasingletask/:id').get(jsonmiddleware,getsingletasks)



module.exports=router