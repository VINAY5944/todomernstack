
const taskmodel=require('../schemas/taskschema')




  const createtask=async(req,res)=>{
    const id = req.params.id;
    const {todo,whatnow}=req.body;
    const taskdetail=await taskmodel.create({
    userId:id,
    todo:todo,
    whatnow:whatnow
    })
    res.json(taskdetail)
    
    }






  module.exports = createtask;
  