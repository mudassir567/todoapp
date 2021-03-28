const express= require('express')
const app = express();
// const bodyParser =require('body-parser')
const port = process.env.PORT || 8000;
const cors =require('cors')
const connectdb =require('./db')

//import middlewares
app.use(cors())

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//import routes
const todoroute =require('./routers/Todos')
 const tweetroute =require('./routers/Tweet')


//tweet routes
 app.use('/tweets',tweetroute)


// todo routes
app.use('/todos',todoroute)



// checking routes
app.get('/check',(req,res)=>{
    res.send("checking..........................")
 })





app.get('/',(req,res)=>{
    res.send("hello")
})


app.listen(port,()=>
{
    console.log("port 8000") 
})