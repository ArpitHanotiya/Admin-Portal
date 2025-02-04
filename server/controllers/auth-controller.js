const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req, res) => {
    try {
        res
            .status(200)
            .send("welcome to admin panel using controllers");
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

        res.status(201).json({
            // msg: userCreated, 
            msg: "registeration successful", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        // res.status(500).json("internal server error");
        next(error);
    }
};
// no need to create a different model for login can use the same model used in the registeration
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        //when user fill emails it not only gives email it also gives password
        console.log(userExist);
        

        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({
                // msg: userCreated, 
                msg: "login successful", 
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({message: "Invalid email or password"});
        }

    } catch (error) {
        res.status.json("internal server error");
    }
};

module.exports = {home, register, login};