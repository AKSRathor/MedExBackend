const mongoose = require('mongoose');
const { Schema } = mongoose

const bookAppointmentSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    doctorName:{
        type:String,
        require:true
    },
    problemDesc:{
        type:String,
        require: true
    },
    date:{
        // type:Date,
        type:String,
        require:true
        // default: Date.now
    }
  });

  module.exports = mongoose.model("BookAppointment", bookAppointmentSchema)