const taskmodel = require("../schemas/taskschema")





const getsingletasks=async(req,res)=>{
    const id=req.params.id

try {
    const thetasks= await taskmodel.findById(id)
    res.json(thetasks)
} catch (error) {
    console.log(error);
} 
}

module.exports=getsingletasks;