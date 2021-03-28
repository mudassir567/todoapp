const mongoose = require('mongoose')

const todoSchema= new mongoose.Schema({
    

    title:{
        type:String,
        required:true
    },
    todo:{      
        type:String,
        required:true
    }
})

const todomodel = mongoose.model('Todos',todoSchema)

module.exports=todomodel