const { isValidObjectId } = require("mongoose")
const AuthorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

const checkAuthorid=async function(req,res){
    let data=req.body
    let author= data.author_id
    if(!author){
        res.send("author id is not present")
    }if(author==isValidObjectId){
        res.send("valid id")
    }
    let saveddata=await AuthorModel.create(data)
    res.send(saveddata)
}




const authorDetailsPresent = async function(req , res){
    if(!mongoose.isValidObjectId()){
        return res.send({status:false,msg:"pls enter vaild id"})
    }
    let author= await AuthorModel.findById()
    if(!newAuthor){
        return res.send({status:false,msg:"details not present"})
    }

    }


module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.checkAuthorid=checkAuthorid
// module.exports.findid=findid|?