// const express = require('express');
// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// module.exports = router;

const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const BooksControl=require("../controllers/bookscontrol")
const BookModel=require("../models/booksmodel")
// router.get("/test-me", function (req, res) {
    // res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)
router.post("/createBook", BooksControl.createBook)
router.get('/getList',BooksControl.getList )
router.post("/particularBooks" , BooksControl.particularBooks)
router.get('/bookInYear',BooksControl.bookInYear)
router.get('/getRandomBooks',BooksControl.getRandomBooks)
router.get('/XINRBooks',BooksControl.XINRBooks)
module.exports = router;