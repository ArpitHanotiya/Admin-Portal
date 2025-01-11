const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req, res) => {
    try {
        res
            .status(200)
            .send("welcome to admin panel using router");
    } catch (error) {
        console.log(error);
    }
}

const register = async(req, res) => {
    try {
        // console.log(req.body);
        // const data = req.body;
        const {username, email, phone, password} = req.body;

        // const userExist = User.findOne({email: email});
        // field : value, when both are same can write it once
        const userExist = await User.findOne({email});


        if(userExist){
            return res.status(400).json({msg : "email already exist"});
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username, 
            email, 
            phone, 
            password,
        });

        res
            .status(201)
            .json({msg : userCreated});
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

module.exports = {home, register};