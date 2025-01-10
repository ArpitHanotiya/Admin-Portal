require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db")

app.use(express.json());

app.use("/api/auth", router); 

// now it will check the router code written in auth-router and not the writtern below for routing

// app.get("/", (req, res) => {
//     res.status(200).send("welcome to admin panel");
// });

// app.get("/register", (req, res) => {
//     res.status(200).send("welcome to registeration");
// });

const PORT = 5000

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`);
    });
});


