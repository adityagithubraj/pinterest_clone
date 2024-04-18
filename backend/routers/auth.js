const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const requirelogin = require("../middleware/requirelogin")


const { User } = require("../models/user.model");



require("dotenv").config();

const jwtkey = process.env.jwtkey

//........signup........//
userRouter.post("/signup", async (req, res) => {

    //Stape -1 extrect userdata from body

    const { name, userName, email, password } = req.body;

    //Stape-2 chack all fildes 

    if (!name || !userName || !email || !password) {
        return res.status(422).json({ error: "Please fill in all the fields" });
    }

    try {
        //Stape-3  Check if the user already exists in DB 

        const existingUser = await User.findOne({ email: email }, { userName: userName });

        if (existingUser) {
            return res.status(422).json({ error: "User already exists with the same email please Sigin." });
        }

        //Stape-4 HashePasswort using bcrypt NPM

        const hashedPassword = await bcrypt.hash(password, 10);

        //Stape -5  Create a new user in user variavel
        const user = new User({
            name,
            userName,
            email,
            password: hashedPassword
        });
        //Stape -6 Saved user in DB 
        await user.save();
        res.status(201).json({ msg: "Signup successful" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Something went wrong", error });
    }
});


//.............signin function ............//

userRouter.post("/signin", async (req, res) => {

    //Stape-1 Extract user data from body
    const { email, password } = req.body;

    //Stape-2 Chacke all fillds are require
    if (!email || !password) {
        return res.status(422).json({ error: "Please fill in all the fields" });
    }
    // Stape-3 Chacke email is present in DB 
    const existingUser = await User.findOne({ email: email })

        .then((existingUser) => {
            if (!existingUser) {
                return res.status(422).json({ error: "Invalid email" });
            }

            bcrypt.compare(password, existingUser.password)
                .then((match) => {
                    if (match) {
                        // Step-5: Generate and sign a JWT
                        const token = jwt.sign({ _id: existingUser._id }, jwtkey);

                        // Step-6: Set token in cookies
                        res.cookie('token', token, { maxAge: 86400000, httpOnly: true });

                        // Step-7: Return success response with the token
                        return res.status(200).json({ message: "Signin successful", token });

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
