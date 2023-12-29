const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt")

const { User } = require("../models/user.model");


//........signup........//
userRouter.post("/signup", async (req, res) => {
    const { name, userName, email, password } = req.body;

    if (!name || !userName || !email || !password) {
        return res.status(422).json({ error: "Please fill in all the fields" });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: email },{userName:userName});

        if (existingUser) {
            return res.status(422).json({ error: "User already exists with the same email" });
        }
        // const hashedPassword = await bcrypt.hash(password, 5);
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const user = new User({
             name, 
            userName,
             email,
              password: hashedPassword
            });
        await user.save();

        res.status(201).json({ msg: "Signup successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Something went wrong", error });
    }
});


//.............signin function ............//

userRouter.post("/signin", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please fill in all the fields" });
    }

    User.findOne({ email: email })
        .then((existingUser) => {
            if (!existingUser) {
                return res.status(422).json({ error: "Invalid email" });
            }

            bcrypt.compare(password, existingUser.password)
                .then((match) => {
                    if (match) {
                        return res.status(200).json({ message: "Signin successful" });
                    } else {
                        return res.status(422).json({ error: "Invalid password" });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    return res.status(500).json({ error: "Something went wrong", err });
                });
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: "Something went wrong", err });
        });
});


module.exports = { userRouter };
