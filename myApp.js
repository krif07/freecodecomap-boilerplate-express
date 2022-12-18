require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");

app.get('/json', function(req, res){
    const obj = {"message": "Hello json"};
    if(process.env.MESSAGE_STYLE==='uppercase'){
        obj.message = obj.message.toUpperCase();
    }
    res.json(obj);
});
app.get('/', function(req, res){
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send("Hello Express");
});

module.exports = app;
