// let trim=function(){


// function FunctionUp(){

//     const greeting = '   Hello world!   ';
    
    
//     let trim
//     // expected output: "Hello world!";
// // } console.log()
// }



 function trim(){
    let name="      nikhil singh     " ;
    console.log(name.trim());
}

function lower(){
    let alpha="THOR LOVE AND THUNDER"
    console.log(alpha.toLowerCase())
}

function upper(){
    let bet="thor ragnarok"
    console.log(bet.toUpperCase())
}
module.exports.trim=trim
module.exports.lower=lower
module.exports.upper=upper