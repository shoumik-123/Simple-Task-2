const express = require('express');
const UsersController = require("../controllers/UsersController")
const router = express.Router();



router.post("/registration" , UsersController.Registration);
router.get("/allUsers" , UsersController.GetAllProfiles);
router.get("/user/:id" , UsersController.GetSingleProfiles);




module.exports =router;