const express = require('express');
const { now } = require('mongoose');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const NovelController=require('../controllers/novelcontroller')
const AuthorModel=require('../models/authormodel')
const NovelModel=require('../models/novelmodel')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", NovelController.createBook  )
router.post("/authorcontrol", NovelController.authorcontrol)
router.get("/ChetanBhagatBooks", NovelController.ChetanBhagatBooks)
router.get("/updateTwoStates", NovelController.updateTwoStates)
router.post("/ createAuthor", NovelController. createAuthor)
router.get('/findBooksWithAuthor',NovelController.findBooksWithAuthor)
// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;