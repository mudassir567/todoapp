const mongoose = require("mongoose")

const tweetSchema = new mongoose.Schema({
    tweetTitle:{
        type:String,
        required:true

    },
    tweetDescription:{
            type:String,
            required:true,
            
    },


    tweetTags:{
        type:String,
        required:true,
        unique:true
    }
})

const tweetmodel = mongoose.model('Tweet',tweetSchema)

module.exports= tweetmodel