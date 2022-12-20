require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");

app.use(function middleware(req, res, next){
    const info = req.method + ' ' + req.path + ' - ' + req.ip;
    console.log(info)
    next();
});

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

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    const obj = {"time": req.time};
    res.json(obj);
});

app.get('/:word/echo', (req, res) => {
    console.log(req.params)
    res.json({"echo": req.params.word});
});

app.get('/name', (req, res) => {
    res.json({"name": `${req.query.first} ${req.query.last}`});
});

module.exports = app;
