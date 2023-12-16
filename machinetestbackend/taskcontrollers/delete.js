const taskmodel = require("../schemas/taskschema");







const deletetask=async(req,res)=>{

    const id=req.params.id;
    try {
        const deletetask= await taskmodel.findByIdAndDelete(id)
      
    } catch (error) {
        console.log(error);
    }
    res.json('deleted')
}
module.exports=deletetask