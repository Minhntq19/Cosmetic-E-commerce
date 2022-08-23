const express = require('express');
const app = express();
const port = process.env.PORT | 1234;

const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '',
	database: 'clarinsproduct',
	multipleStatements: true,
});
connection.connect();
app.listen(port, function () {
	console.log('server is running..');
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/data', (req, res) => {
	const sql_txt = 'select * from clarinproduct where ProductCategory ="skincare"';
	connection.query(sql_txt, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeupProduct = data;
			res.send(makeupProduct);
		}
	});
});
app.get('/', (req, res) => {
	res.render('home');
});
app.get('/makeup', (req, res) => {
	const sql_txt = 'select * from clarinproduct where ProductCategory ="makeup"';
	connection.query(sql_txt, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeupProduct = data;
			res.render('makeup.ejs', {
				makeupProduct: makeupProduct,
			});
		}
	});
});
app.set('view engine', 'ejs');
app.use(express.static('public')); //cho phép truy cập vào các static

app.get('/skincare', (req, res) => {
	const sql_txt2 = 'select * from clarinproduct where ProductCategory ="skincare"';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let skincareProduct = data;
			res.render('skincare.ejs', {
				skincareProduct: skincareProduct,
			});
		}
	});
});
app.get('/makeup', function (req, res) {
	res.render('face');
});
app.get('/skincare/face', function (req, res) {
	const sql_txt2 = 'select * from clarinproduct where ProductType ="facecare"';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let facecareProduct = data;
			res.render('face.ejs', {
				facecareProduct: facecareProduct,
			});
		}
	});
});
app.get('/skincare/body-care', function (req, res) {
	const sql_txt2 = 'select * from clarinproduct where ProductType ="bodycare"';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let bodycareProduct = data;
			res.render('body-care.ejs', {
				bodycareProduct: bodycareProduct,
			});
		}
	});
});
app.get('/skincare/men', function (req, res) {
	const sql_txt2 = 'select * from clarinproduct where ProductType ="men"';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let menProduct = data;
			res.render('men.ejs', {
				menProduct: menProduct,
			});
		}
	});
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
app.get('/shipping', function (req, res) {
	res.render('thanhtoan');
});
app.get('/shopping', function (req, res) {
	res.render('shop-ping');
});
app.get('/product/detail', (req, res) => {
	res.render('product');
});
