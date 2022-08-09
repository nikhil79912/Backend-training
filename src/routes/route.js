// const express = require('express');
// const abc = require('../introduction/intro')
// const lodash=require('lodash');
// const underscore=require('underscore')
// const router = express.Router();

// router.get('/test-me', function (req, res) {
//     // console.log('My batch is', abc.name)
//     // abc.printName()
//     // logger.welcome()
// const _=require('lodash');
// let arr=['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec']
// console.log(_.chunk(arr,3))
//     res.send('My second ever api!')


// })
const express = require('express');
const underscore=require('underscore');
const lodash=require('lodash');
// const abc =require('./intru')
// const log= require('../logger/logger')
// const assign1=require('../util/helper')
// const form=require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('my batch is',abc.name)
    // console.log('---------------------------')
    // log.welcome()
    // console.log('---------------------------')
    // assign1.printDate()
    // console.log('---------------------------')
    // assign1.printMonth()
    // console.log('----------------------------')
    // assign1.getBatchInfo()
    // console.log('----------------------------')
    // form.trim()
    // console.log('----------------------------')
    // form.lower()
    // console.log('-----------------------------')
    // form.upper()
    // console.log('------------------------------')
    let _=require('lodash')
    let arr=['jan','feb','march','april','may','june','july','august','sept','oct','nov','dec']
    console.log(_.chunk(arr,3))
    let x=[1,3,5,7,9,11,13,15,17,19]
    let arra=_.tail(x)
    console.log(arra)
    let pairs=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let n=_.fromPairs(pairs)
    console.log(n)
    let arre=[2,4,6,6,4]
    let b=_.union(arre)
    console.log(b)

    res.send('im  thor')
});
router.get('/cohort-members',function(req,res){
    let students=['nik','did','sis']
    res.send(students)
})
router.get('/student-details/:name',function(req,res){
    console.log(name)
    let details="nikhil singh"
    res.send(details)
}
)
router.get('/test-you',function(req, res) {
    res.send('my second  file')
})
router.get('give-me', function(req,res){
    res.send('i luv thor')
})
module.exports = router;
// adding this comment for no reason