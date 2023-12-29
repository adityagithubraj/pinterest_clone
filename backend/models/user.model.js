const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },

    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const User = mongoose.model("USER",  userSchema)

module.exports = {User}