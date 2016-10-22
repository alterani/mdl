var express = require('express');
var app = express();

app.use('/fiveboard', express.static(__dirname + "/fiveboard"));


app.get('/', function(req, res){
    res.sendfile('index.html');
});


app.listen('3001', function(){
  console.log("Server online sulla porta 3001");
});