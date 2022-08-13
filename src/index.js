const express = require('express');
const{default: mongoose} = require('mongoose');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://thor:klAA1XVKqIc6vFJT@cluster0.zauoqeh.mongodb.net/nikhil?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

.then( () => console.log("MongoDB is connected"))
.catch( err => console.log(err) )
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
