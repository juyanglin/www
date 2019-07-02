var express=require("express");
var app=express();
app.get("/",function (req,res) {
    res.send("Hello World1");
})
app.get("/mypath",function (req,res) {
    res.send("Hello World2");
})
app.listen(3000,function () {
    console.log("server start http://localhost:3000/");
})