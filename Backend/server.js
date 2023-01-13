var express=require("express");
var app=express();
var mongoose=require("mongoose");
var cors=require("cors");
var bodyparser=require("body-parser");
var path=require("path");

var routes=require("./routes/router");
mongoose.promise=global.promise;

const url="mongodb://0.0.0.0:27017/player"

mongoose.connect(url,function(err,resp){
if(err){
    console.log("not connected");
}
else{
    console.log("Connected");
}

})
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors('*'));
app.use("/",routes);

app.listen(4000);
console.log("server listening at port 4000");
module.exports=app;
