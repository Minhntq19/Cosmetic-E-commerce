<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 1234;
app.listen(port, function () {
	console.log('server is running..');
});
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('makeup.ejs');
});
app.get('/', (req, res) => {});
=======
const express = require("express");
const  app = express();
const port = process.env.PORT | 1108;

app.listen(port,function () {
    console.log("đang ỉa chảy chạy cái l**");
});

app.set("view engine","ejs");
app.use(express.static("public"));//cho phép truy cập vào các static

app.get("/skincare/face",function (req, res){
    res.render("face");
});
app.get("/skincare/body-care",function (req, res){
    res.render("body-care");
});
app.get("/skincare/men",function (req, res){
    res.render("men");
});
app.get("/makeup/face",function (req, res){
    res.render("make-face");
});
app.get("/makeup/eyes",function (req, res){
    res.render("make-eyes");
});
app.get("/makeup/lips",function (req, res){
    res.render("make-lips");
});
>>>>>>> bfe67846739b62b233ac5e14edace377c1708cd9
