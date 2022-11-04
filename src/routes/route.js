const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid=require("../middlewares/auths")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front endcd 
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

router.delete("/deleteUser/user/:userId",mid.mid1, userController.deleteUser)

module.exports = router;
