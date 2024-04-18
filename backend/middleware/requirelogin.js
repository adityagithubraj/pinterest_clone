const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const { User } = require('../models/user.model');
require("dotenv").config();

const jwtkey = process.env.jwtkey;

//.......auth mw
const authenticate = (req, res, next) => {
    // Step-1: Extract token from headers or cookies
    const token = req.headers.authorization || req.cookies.token;

    // Step-2: Check token
    if (token) {
        jwt.verify(token, jwtkey, (err, decoded) => {
            if (err) {
                // Handle JWT verification error
                res.status(401).json({ msg: "Invalid token" });
            } else {
                // Step-3: Fetch user data based on decoded information
                const { _id } = decoded;

                User.findById(_id).then(userData => {
                    req.user = userData;
                    next();
                }).catch(err => {
                    // Handle error when user data retrieval fails
                    res.status(500).json({ msg: "Error fetching user data", error: err });
                });
            }
        });
    } else {
        res.status(401).json({ msg: "Please login first" });
    }
};

module.exports = {
    authenticate
};
