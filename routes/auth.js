let express = require("express"),
  router = express.Router();

let authenticationController = require("../controllers/authController.js");
let foodController = require('../controllers/foodController')
/**
 * (POST Method)
 */
// SignUp
router.post("/signup", authenticationController.signup);

//SignIn
router.post("/signin", authenticationController.signin);
router.post('/food', foodController.newFood);
module.exports = router;
