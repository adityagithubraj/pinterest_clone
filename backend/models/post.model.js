const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    photo: {
        type: String,
        default: "no url"
    },
    caption: {
        type: String,
        required: true  // Changed 'require' to 'required'
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,  // Fixed the type reference
        ref: "USER"
    },
    comments: [{}],
    likes: [{}],
}, { timestamps: true });  // Corrected the 'timeseries' to 'timestamps'

const Post = mongoose.model("POST", postSchema);

module.exports = { Post };
