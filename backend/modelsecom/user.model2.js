const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: string,
        require: true,
        lowercase: true,
        unique: true
    },
    mobileno: {
        type: number,
        require: true
    },
    role: {
        enum: ["Admin", "user", "superAdmin"],
        default: "m"
    }

},
    { timestamps: true })

const user = mongoose.model("User", userSchema)

module.exports = { user }