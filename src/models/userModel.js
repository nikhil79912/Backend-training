const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         // unique: true,
//         // required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// },
const userSchema =new mongoose.Schema({
    bookName: String,
    authorName:String,
    booktype:String,
    publishYear:Number
},{ timestamps: true });

module.exports = mongoose.model('User', userSchema) //users
module.exports=mongoose.model('Book', userSchema) //books



// String, Number
// Boolean, Object/json, array