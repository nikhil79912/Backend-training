
const { count } = require("console")
const AuthorModel=require('../models/authormodel')
const NovelModel=require('../models/novelmodel')


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const authorcontrol= async function (req, res) {
    let data= req.body

    let savedData= await NovelModel.create(data)
    res.send({msg: savedData})
}

const ChetanBhagatBooks = async function (req, res) {
    let data = await AuthorModel.findOne({ author_name: "chetanBhagat" }).select({ author_id: 1, _id: 0 })
    // console.log(data);
    let list = await NovelModel.find(data);
    res.send({ Data: list });
   
   
}
const updateTwoStates = async function (req, res) {
    let data = await NovelModel.findOneAndUpdate(
        { name: "Two states" },
        { $set: { price: 200} },
        { new: true }
    )
    let author = await AuthorModel.findOne({ author_id: data.author_id }).select({ author_name: 1, _id: 0 });
    res.send({ Data: data, author_name: author.author_name })
}
const createAuthor=async function(req,res){
    let data=req.body
    let authorId=data.author_id
    if(!authorId){
          return res.send("authtor id must be present")
    }
    let saavedData= await AuthorModel.create(data)
    res.send(saavedData)
}
const findBooksWithAuthor = async function (req, res) {
    let book = await NovelModel.find( { price : { $gte: 50, $lte: 100} } ).select({ _id : 0, author_id :1})//.forEach
    //console.log(book)
    let temp = []
    for (let i = 0; i < book.length; i++) {
        let y = book[i].author_id
        temp.push(y)
    }
    let authorName = await AuthorModel.find( {$in : temp} ).select({_id : 0,author_name : 1})
    res.send({msg: authorName})
}

        
        // let list=await NovelModel.find(data);
        // res.send({Data:list})

    
    // const ChetanBhagatBooks=async function(req,res){
    //     //
    // }
    // 

module.exports.updateTwoStates=updateTwoStates
module.exports.createBook=createBook
module.exports.authorcontrol=authorcontrol
module.exports.ChetanBhagatBooks=ChetanBhagatBooks
module.exports. createAuthor= createAuthor
module.exports.findBooksWithAuthor=findBooksWithAuthor