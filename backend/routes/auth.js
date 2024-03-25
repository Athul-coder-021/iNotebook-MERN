const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser.js')
const JWT_SECRET = "iNoteboook Project CWH";

//Route 1: Create a User using : POST "/api/auth/createuser".No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a Valid name").isLength({ min: 3 }),
    body("email", "Enter a Valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    //video 46 we wrote like this to store data
    // const user = User(req.body);
    // user.save();
    // res.send(req.body)

    //check whether user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with thsis email id already exists" });
      }

      //using bcrypt to hash passwords
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);

      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      });
      const data = {
        user: {
          id: user._id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      //   console.log(authToken);
      return res.status(200).json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

//Route 2 : Authenticate a User using : POST "/api/auth/login".No login required
router.post(
  "/login",
  [
    body("email", "Enter a Valid email").isEmail(),
    body("password", "Password Cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
    
    const {email,password}=req.body;

    try {
        let user = await User.findOne({email});
        
        if(!user)
        {
            return res.status(400).json({success,error:"Try to login with correct Credentials"});
        }

        const passwordCompare = await bcrypt.compare(password,user.password);

        if(!passwordCompare)
        {
            return res.status(400).json({success,error:"Try to login with correct Credentials"});            
        }

        const data = {
            user: {
              id: user._id,
            },
          };
        const authToken = jwt.sign(data, JWT_SECRET);
          //   console.log(authToken);
          success=true;
        return res.status(200).json({success, authToken });

    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
  }
);

//Route 3 : Get loggedIn User details : POST "/api/auth/getuser".login required
router.post(
  "/getuser",fetchuser,async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      // res.send("got user details")
      res.send(user)
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
  }
);
module.exports = router;
