const publishratingModel = require("../models/publishratingModel")


const publisherRating = async function (req, res) {
    let book = req.body
    let bookCreated = await publishratingModel.create(book)
    res.send({data: bookCreated})
}
const bookfindn= async function (req, res) {
    let publishbook=await publishratingModel.updateMany(  {  rating: {$gt: 3.5}},{ $inc: { Price:10 }},{new:true,upsert:true})
    res.send({data:publishbook})
}

const checkbook=async function(req,res){
    let publishcondition=await publishratingModel.find( {   $or: [ { publisher: "Penguin" } , {publisher : "HarperCollins"} ] }).updateMany({isHardCover: true})
      
// res.send({data: allBooks})
    res.send({data:publishcondition})
}
// }.updateMany({ $set: { isHardCover: true} })


// ,{publisher:"HarperCollins"}]})


module.exports.publisherRating = publisherRating
module.exports.bookfindn=bookfindn
module.exports.checkbook=checkbook