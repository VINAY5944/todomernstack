const taskmodel = require("../schemas/taskschema");





const updatetask=async(req,res)=>{

const id=req.params.id

const {whatnow}=req.body;


try {
    const updatetak= await taskmodel.findByIdAndUpdate(id,{whatnow:whatnow})
    res.json(updatetak)
} catch (error) {
    console.log(error);
}

}


module.exports=updatetask