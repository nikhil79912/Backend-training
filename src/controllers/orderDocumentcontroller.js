const UserDCS= require("../models/orderDocumentModel")
const UserDCs= require("../models/productDocumentModel")
const UserDcc= require("../models/userDocumentModel")
const { count } = require("console")
const userDocumentModel = require("../models/userDocumentModel")
const createOrder = async function (req, res) {
    
    let data= req.body
    let userup=await UserDCS.create(data)
    res.send(userup)
}
const orderPurchase=async function (req,res){
    let data=req.body
let use=req.body.userId
let pro=req.body.productId 
// let order=req.headers.isfreeuser
// let OrderDetails=await UserDcc.findById(data)
// let orderProduct=await UserDCS.findById(data.product_Id)
if(!use  && !pro){
     return res.send("both are manadatory")
} else if (!use){
    res.send("user id is mandatory")
} else if(!pro){
    res.send("product id is mandatory")
}  else{
let orderheader=req.headers.isfreeuser
console.log(orderheader)
if(orderheader=="true"){
    let data=req.body
    data["amount"]=0
    let free=await UserDCS.create(data)
    res.send(free)
}else if(orderheader=="false"){
    
    
        let userMoney = await UserDcc.findById(use).select({balance:1 , _id:0})
        let productMoney = await UserDCs.findById(pro).select({price:1 , _id:0})
        let userBalance = userMoney.balance
        let ProductBalance = productMoney.price
        if(userBalance>=ProductBalance){
            
                let newUserBalance = userBalance - ProductBalance
                console.log(newUserBalance)
                let updatedData = await UserDcc.findByIdAndUpdate({_id : use}, {$set : {balance: newUserBalance}} )
                
                console.log(updatedData)
                // updatedData["amount"]=ProductBalance
                // let orderbuy=await UserDCS.create(updatedData)
                let data=req.body
    data["amount"]=ProductBalance
    data["isFreeAppUser"]=false
    let free=await UserDCS.create(data)
    res.send(free)
                
                // return res.send({msg : orderbuy})
            }else{
                res.send({msg: "Insufficint Balance"})
            }
        
        }

    

}

}

// } else if(order=="true"){
//     res.send({msg:"amount is not deducted"})

// } else if(order=="false"){
//     console.log("check balance")
//     let checkbalance=await UserDCS.find({amount:1})
//     let productspri=await UserDCs.find({price:1})
//     if(productspri>=checkbalance){
//         console.log("amount is detected")
//         res.send("price is deducted")
//     }else{
//         res.send("garib h tu")
//     }


// }
    
// }
    






module.exports.createOrder=createOrder
module.exports.orderPurchase=orderPurchase