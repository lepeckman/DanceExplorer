var express = require('express')
//puts the function express into something or other
var app = express() 
app.get('/', function(req, res){
    //just sends text to http://localhost:3000/
    res.send('blerg')
})

//this app opens port 3000
//and something else about it
app.listen(3000, function(){
    console.log('app is listening on port 3000')
})