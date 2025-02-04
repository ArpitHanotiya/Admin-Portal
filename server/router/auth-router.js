const express = require("express");
const router = express.Router();
// const {home, register} = require("../controllers/auth-controller");
const authControllers = require("../controllers/auth-controller");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


// router.get("/", (req, res) => {
//     res
//         .status(200)
//         .send("welcome to admin panel using router");
// });
// simplified
// router.route("/").get((req, res) => {
//     res
//         .status(200)
//         .send("welcome to admin panel using router");
// });
//further simplified
// router.route("/").get(home);
router.route("/").get(authControllers.home);

router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(loginSchema) ,authControllers.login);


module.exports = router;
