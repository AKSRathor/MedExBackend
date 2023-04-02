const mongoose = require('mongoose')
// require('dotenv').config()
require('dotenv').config()

const mongoURI = process.env.MONGO_LAB|| "mongodb://127.0.0.1:27017/Hackathon" 


const connectToMongoose =()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongoose")
    })

}


module.exports = connectToMongoose