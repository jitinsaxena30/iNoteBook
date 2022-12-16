const express = require("express");
const { body, validationResult } = require("express-validator");
const { findOne } = require("../models/User");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "jitinisagoodb$oy";

//ROUTE 1 :Create a user using : POST "/api/auth". Doesn't reqiure auth login

router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(), //validation part
    body("name", "Name must be atleast 3 characters").isLength({ min: 3 }), //validation part
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }), //validation part
  ],

  async (req, res) => {
    //If there are errors return the bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      // console.log(user)
      if (user) {
        return res
          .status(400)
          .json("Sorry a user with the same email already exists");
      }

      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
      //   console.log(jwtData);

      //   res.json(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE 2 :Authenticate a user using POST: "/api/auth/login" : No login required

router.post("/login",
  [
    body("email", "Enter a valid email").isEmail(), //validation part
    body("password", "Password cannot be blank").exists(), //validation part
  ],
  async (req, res) => {
    //If there are errors return the bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3 :  Get logged in user detail using POST: "/api/auth/getuser" :  Login required

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
    /*this line means we are selecting everything (every detail) except password*/
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
