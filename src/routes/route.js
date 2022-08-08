const express = require('express');
const abc =require('./intru')
const log= require('../logger/logger')
const assign1=require('../util/helper')
const form=require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('my batch is',abc.name)
    console.log('---------------------------')
    log.welcome()
    console.log('---------------------------')
    assign1.printDate()
    console.log('---------------------------')
    assign1.printMonth()
    console.log('----------------------------')
    assign1.getBatchInfo()
    console.log('----------------------------')
    form.trim()
    console.log('----------------------------')
    form.lower()
    console.log('-----------------------------')
    form.upper()
    console.log('------------------------------')
    res.send('im  thor')
});
router.get('/test-you',function(req, res) {
    res.send('my second  file')
})
router.get('give-me', function(req,res){
    res.send('i luv thor')
})
module.exports = router;
// adding this comment for no reason