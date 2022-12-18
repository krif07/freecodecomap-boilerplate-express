let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', function(req, res){
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send("Hello Express");
});

module.exports = app;
