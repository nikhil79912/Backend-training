const PublishModel= require("../models/publishermodel")

const createPublish=async function(req,res){
    let publish=req.body
    let publishcreated=await PublishModel.create(publish)
    res.send({data:publishcreated})
}

const publishid=async function(req,res){
    let data=req.body
    let publish= data.publish_id
    if(!publish){
        res.send("author id is not present")
    }if(publish==isValidObjectId){
        res.send("valid id")
    }
    let saveddata=await PublishModel.create(data)
    res.send(saveddata)
}

module.exports.createPublish=createPublish
module.exports.publishid=publishid