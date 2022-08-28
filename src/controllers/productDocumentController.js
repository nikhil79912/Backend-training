const UserDCs= require("../models/productDocumentModel")
const { count } = require("console")
const createProduct= async function (req, res) {
    
    let data= req.body
    let userup=await UserDCs.create(data)
    res.send(userup)
}

module.exports.createProduct=createProduct