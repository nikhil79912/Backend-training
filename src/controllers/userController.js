const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const getbookData=async function(req,res) {
    let allbooks=await UserModel.find()
    res.send({msg:allbooks})
}

const booksData=async function(req,res){
    let data=req.body
    let savebook=await userModel.create(data)
    res.send({msg:savebook})
}

module.exports.getbookData=getbookData
module.exports.booksData=booksData
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData