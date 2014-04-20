var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public")); 
app.listen(3003);
console.log("This server is now listening to 3003")
