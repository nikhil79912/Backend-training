const UserDcc= require("../models/userDocumentModel")
const { count } = require("console")
const createUsers= async function (req, res) {
    
    let data= req.body
    let userup=await UserDcc.create(data)
    res.send(userup)
}


const findHeader=async function(req,res){
    let header=req.headers.isfreeappuser
    if(!header){
        res.send("missing part is mandatory")
    }

}
module.exports.createUsers=createUsers
module.exports.findHeader=findHeader
