const express = require('express');
const app = express();
const port = 1234;
app.listen(port, function () {
	console.log('server is running..');
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
	res.render('home');
});
app.get('/makeup', (req, res) => {
	res.render('makeup.ejs');
});
app.get('/skincare/face', function (req, res) {
	res.render('face');
});
app.get('/skincare/body-care', function (req, res) {
	res.render('body-care.ejs');
});
app.get('/skincare/men', function (req, res) {
	res.render('men');
});
app.get('/makeup/face', function (req, res) {
	res.render('make-face');
});
app.get('/makeup/eyes', function (req, res) {
	res.render('make-eyes');
});
app.get('/makeup/lips', function (req, res) {
	res.render('make-lips');
});
