const mongoose =require('mongoose');
require('dotenv/config')



const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify:false,
    useUnifiedTopology: true 
}


mongoose.connect(process.env.dbconnect, connectionParams)
.then(()=>{
    console.log('connected to db')

})
.catch((err)=>{
    console.error(`Error connecting to the database. \n${err}`);

})  