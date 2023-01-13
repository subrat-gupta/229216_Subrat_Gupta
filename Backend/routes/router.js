



var express=require("express");
var mongoose=require("mongoose");


var schema=mongoose.Schema;
router=express.Router();

var playerschema=new schema({
    id:String,name:String,matches:String,city:String
})
var Play=mongoose.model('player',playerschema,'player');

router.get("/player",function(req,resp){
    Play.find().exec(function(err,data){
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            console.log(data);
            resp.send(data);
        }
    })
});
// router.get("player/id",function(req,resp){
//     Play.findOne({id:req.params.id},function(err,data){
//         if(err){
//             resp.status(500).send("no data found");
//         }
//         else{
//             console.log(data);
//             resp.send(data);
//         }
//     })
// })

module.exports=router;