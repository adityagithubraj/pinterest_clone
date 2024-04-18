const mongoose = require("mongoose")

const productSchema  = new mongoose.Schema({
    Discription:{
        type:string,
        require:[true,"msg most require"]
    },
    price:{
        require:true,
        type:Number
    },
    createdby:{
        type: Schema.Types.ObjctId,
        ref: "User"
    }
},{timeseries:true})