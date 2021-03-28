const express =require('express')
const router =express.Router();
const Todo =require('../models/todomodel');



// to read the todos
router.get('/',async (req,res)=>{
  
  try{
  const todo = await Todo.find({});
  if (!todo) throw Error('No todos')
    res.status(200).json(todo);

  }
  catch(err){
    res.status(500).json({msg:err});
  }
})

// to create the todos

router.post('/',(req,res) => {
res.send("makindg a todo")
console.log(req.body)
const todo = new Todo (req.body)
todo.save()
.then(() => {
  res.status(200).res.json(todo)

})
.catch((err) => {
res.status(500).res.json({msg:err})
})
});




// to delete the todos

router.delete('/:id', async (req,res)=>{
  try{
    const removetodo = await  Todo.deleteOne({_id: req.params.id})
    res.json(removetodo)
    res.status(200).res.json({sucess:true})



  }
  catch(err){
 res.json({msg:err})
  }

})

// to update the todos

router.patch('/:id',async (req,res)=>{
  try{
    const updatetodo = await Todo.updateOne({_id: req.params.id},req.body)
    res.json(updatetodo)
   
    res.status(200).res.json({sucess:true})

  }
  catch(err){
    res.json({msg:err})

  }
})

module.exports=router;