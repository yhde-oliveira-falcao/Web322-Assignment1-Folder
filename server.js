
var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart(){
    console.log("Express http server listing on: " + HTTP_PORT);
}

app.use(express.static('Assignment1'));
// setup a 'route' to listen on the default url path
app.use('/images2', express.static('images2'));
app.use('/images2/harbour.mp4', express.static('images2/harbour.mp4'),function(req,res,next){
    next();
});
app.use('/images2/torontocity2.jpg', express.static('images2/torontocity2.jpg'),function(req,res,next){
    next();
});


app.use('css/styles.css', express.static('css/styles.css'),function(req,res,next){
    next();
});
app.use('js/script.js', express.static('js/script.js'),function(req,res,next){
    next();
});

app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "./home.html"));
});

//--------------------
app.get("/index", function (req,res){
    res.sendFile(path.join(__dirname, "./index.html"));
});

//--------------------
app.get("/contact", function (req,res){
    res.sendFile(path.join(__dirname, "./contact.html"));
});



// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);