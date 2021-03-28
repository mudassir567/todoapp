const express =require('express')

const router =express.Router();

const Tweet = require('../models/tweet')




// router.get('/',async(req,res)=>{

//     try{
//         const tweet = await Tweet.find({});

//         if(!tweet) throw Error("no tweets")
//         res.status(200).res.json(tweet)
//     }
//     catch(err){
//         res.status(400).res.send(err)
//     }

// })

// router.post('/',(req,res)=>{
   
//     console.log(req.body)

//     const tweet =new Tweet(req.body)
//     tweet.save()
//     .then(() => {
//         res.status(200).res.json(tweet)
//     })
//     .catch((err)=>{
//         res.status(400).res.send(err)
//     })

// })



module.exports=router