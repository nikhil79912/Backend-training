const mid1=async function(req,res,next){
let token = req.headers["Auth-token"];
if (!token) token = req.headers["auth-token"];

//If no token is present in the request header return error. This means the user is not logged in.
if (!token){
 return res.send({ status: false, msg: "token must be present" })
} 
   

    next()
} 




module.exports.mid1=mid1