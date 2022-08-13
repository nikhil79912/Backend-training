// const express = require('express');
// // const abc = require('../introduction/intro')
// // const lodash=require('lodash');
// // const underscore=require('underscore')
// const router = express.Router();

// router.get('/test-me', function (req, res) {
// res.send("new api")

// })
// // const express = require('express');b
// module.exports = router;
// // adding this comment for no reason


const { query } = require('express');
const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]
 
    router.post('/players', function (req, res) {
        let player= req.body
    for (let i=0;i<players.length;i++){
        let data=players[i]
        if(data.name==player.name){
           return res.send("player is already exist")
        } else {
            // res.send(push(player))

        }
    }
       players.push(player)
        //LOGIC WILL COME HERE
        res.send(  { data: players , status: true }  )
    })
   

    router.get('/get-query-2',function(req,res){
        let marks=req.query.marks
        let result=marks>40?"pass":"fail"
        res.send({data:result, status:true})
    })


 persons=[
        {
        name:"pk",
        age:18,
        votingstatus:false

    },
    {
        name:"nikhil",
        age:24,
        votingstatus:false
    },
    {
        name:"sis",
        age:10,
        votingstatus:false
    },
    {
        name:"thor",
        age:24,
        votingstatus:false

    },
    {
        name:"hawkeye",
        age:15,
        votingstatus:false
    }

]
// let p=arr[]
router.post('/persons',function(req,res){
//    persons=[]
    let votingAge=req.query.votingAge
    let result=[]
    for(let i=0;i<persons.length;i++){
        let p=persons[i]
        if(p.age>=votingAge){
            p.votingstatus=true
            //   res.send(persons[i])
            //   console.log(persons[i])
                result.push(p)
            
        }  
            // res.send("not eligible")
            
            //  
        
    }res.send(  { data: result }  )
   
}) 
let nik=[2,4,6,7]
router.get('/nik',function(req,res){
   
    for(let i=0;i<nik.length;i++){
        res.send({data:nik })
        console.log(nik[i])
    }
})
 module.exports = router;
 
 