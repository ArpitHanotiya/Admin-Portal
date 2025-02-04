require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

app.use(errorMiddleware);

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


