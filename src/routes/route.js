const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorControllers")
const bookController= require("../controllers/bookControllers")
const publishController=require("../controllers/publishercontroller")
const publishratingController = require("../controllers/publishratingController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )
router.post("/createPublish",publishController.createPublish)

// router.get("/getBooksData", bookController.getBooksData)

router.get("/getAuthorPublisher", bookController.getAuthorPublisher)
router.post("/checkAuthorid",authorController.checkAuthorid)
router.post("/publishid",publishController.publishid)
// router.post("/findid",authorController.findid)
// router.post("/publishRating",PublishRatecontrol.publishRating)
router.put("/publisherRating",publishratingController.publisherRating)
router.get("/bookfindn",publishratingController. bookfindn)
router.get("/checkbook",publishratingController. checkbook)


module.exports = router;