const express = require("express");
const postRouter = express.Router();
const mongoose = require("mongoose")
const  {authenticate} = require("../middleware/requirelogin")
// const POST= mongoose.model("POST")

const {Post} = require("../models/post.model")



postRouter.post("/createpost",authenticate,(req,res)=>{
    const { caption } = req.body;

    // Check if the caption is provided
    if (!caption) {
        return res.status(400).json({ error: "Please provide a caption for the post" });
    }

    req.user
    const post  = new Post({
        caption ,
        createdby:req.user
    })

    post.save().then((result) => {
        
        return res.json({post: result})
    }).catch((err) => {
        console.log(err);
    });

    
})



module.exports = { postRouter };