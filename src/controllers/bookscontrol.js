const { count } = require("console")
// const BookModel= require("../models/bookModel")
const BookModel = require("../models/booksmodel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
let getList=async function (req,res) {
    let data=await BookModel.find().select({ bookName : 1 , authorName : 1 ,  _id:0})

    res.send({msg:data})
}
const bookInYear = async function(req , res){
    let year = req.body.year
    let data = await NovelModel.find({year})
    res.send({msg : data})
}

const particularBooks = async function(req , res){
    let obj=req.body;
    let data=await NovelModel.find(obj);
    res.send({data:data});
}
let getRandomBooks=async function (req,res) {
    let randomp=await BookModel.find({ page: { $gt:  500 }  }) 
res.send({msg:randomp})
}
// let getXINRBooks=async function (req,res) {
    
//     let randomv=await BookModel.find(prices.indianPrice["Rs200"])
//        res.send({msg:randomv})
//         }
    
// 
const XINRBooks = async function(req, res){
    let XINRBooks = await BookModel.find({$or:[{"prices.indianPrice":"100INR"},
    {"prices.indianPrice":{$eq:"200INR"}},{"prices.indianPrice":{$eq:"500INR"}}]})
    res.send({msg : XINRBooks})
 }

module.exports.createBook=createBook
module.exports.getList=getList
module.exports.bookInYear=bookInYear
module.exports.getRandomBooks=getRandomBooks
module.exports.XINRBooks=XINRBooks
module.exports.particularBooks=particularBooks