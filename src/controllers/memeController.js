let axios = require("axios")


let findByDistict=async function(req,res){
    try {
       
       text0=req.query.text0
       text1=req.query.text1
       templateid=req.query.templateid
    //    console.log(`query params are: ${district} ${date}`)
       var options = {
           method: "post",
           url: `https://api.imgflip.com/caption_image?template_id=${templateid}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
    }
     let result=await axios(options) 
     console.log(result.data)
     res.status(200).send({msg:result.data})

 } catch (err){
    console.log(err)
        res.status(500).send({ msg: err.message })
    }
        
    }


    module.exports.findByDistict=findByDistict
    