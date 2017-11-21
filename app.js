var express = require("express")
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, Welcome to my assignment");
})

app.get("/speak/:animal", function(req, res){
    let animal = req.params["animal"];
    if(animal === 'pig'){
        res.send("the pig says 'Oink'");
    }else if(animal === 'cow') {
        res.send("the cown says 'Moo'");
    } else if(animal === 'dog') {
        res.send("the dog says 'Woof Woof!'");
    }
})

app.get("/repeat/:greet/:times", function(req, res){
    let greetType= req.params["greet"];
    let greetTimes= req.params["times"];
    res.send((greetType + " ").repeat(greetTimes))
})

//must be last
app.get("*", function (req, res) {
    res.send("Sorry, page not found ... what are you doing with your life?");
})

//if you want to use a different port
//in DOS command : set PORT=8000 for example.
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});