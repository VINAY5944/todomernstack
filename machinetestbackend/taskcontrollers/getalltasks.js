const taskmodel = require("../schemas/taskschema")





const getalltasks=async(req,res)=>{
    const id=req.params.id

try {
    const thetasks= await taskmodel.find({userId:id})
    res.json(thetasks)
} catch (error) {
    console.log(error);
} 
}
module.exports=getalltasks