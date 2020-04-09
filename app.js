var express=require("express");
var bodyParser=require("body-parser");
var request=require("request");
var app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));


var movies=[];
var pics=[];
    
app.post("/movie",function(req,res){
    var movie=req.body.movie;

    request("http://www.omdbapi.com/?s="+movie+"&apikey=240c867b",function(error,response,body){
    if(!error && response.statusCode==200)
    {
        var parsedData=JSON.parse(body);
        res.render("display",{parsedData:parsedData});
    }
    else console.log(error);
    });

    movies=[];
    pics=[];
    
});

app.get("/",function(req,res){
    res.render("home");
})
app.listen(3000,process.env.IP,function(){
    console.log("SERVER HAS STARTED");
})