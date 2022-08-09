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
router.get('/films' ,function(req,res){
    let films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
      res.send(films) 
})
router.get('/film/index' ,function(req,res){
    let films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
     let filmId=req.params.index
     console.log()
     for(let i=0;i<films.length;i++){
        let movie=movie[i]
        if(movie.id==filmId){
            return res.send(movie)
        }
     }
      
      
    
        
      }
)



router.get('/movies',function(req,res){
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'] 
    res.send(movies)


})
router.get('/movies/:indexnumber',function(req,res){
     let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexnumber)
     let movieIndex=req.params.indexnumber
     if(movieIndex<0 || movieIndex>=movies.length){
       return res.send("this movie is not available")
     }
     let requiredmovie=movies[movieIndex]
    res.send(requiredmovie)
    // res.send("dummy response")
     
})

router.get("/shoes",function(req,res){
    let queryparams= req.query
   res.send("dummy respnse")
})
router.get('/test-you',function(req, res) {
    res.send('my second  file')
})
router.get('give-me', function(req,res){
    res.send('i luv thor')
})
module.exports = router;
// adding this comment for no reason