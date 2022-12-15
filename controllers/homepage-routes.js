const router = require("express").Router();
const {User, Group, Membership} = require('../models');
const auth = require('../utils/auth');

//Get Route, Render Homepage HBS

router.get('/', async (req, res)=>{
    res.render("homepage"); 
});

//GET route to get to login page 

router.get("/login", (req, res) => {
    res.render("login");
  });
  
  //create GET route to get to login page when the user is not logged in and trys to click on a post to read it
  
router.get("/signup", (req, res) => {
    res.render("signup");
});

module.exports = router;