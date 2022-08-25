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
app.set('view engine', 'ejs');
app.use(express.static('public'));
connection.connect();
app.listen(port, function () {
	console.log('server is running..');
});
//get data API
app.get('/data', (req, res) => {
	const sql_txt = 'select * from clarinproduct ';
	connection.query(sql_txt, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let ProductList = data;
			res.send(ProductList);
		}
	});
});
//render home
app.get('/', (req, res) => {
	res.render('home');
});
//render makeup
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
//render skincare
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
// render facecare
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
// render bodycare
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
// render men
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
//render facemakeup
app.get('/makeup/face', function (req, res) {
	const sql_txt2 = 'select * from clarinproduct where ProductType ="Face"';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let faceProduct = data;
			res.render('make-face.ejs', {
				faceProduct: faceProduct,
			});
		}
	});
});
app.get('/makeup/eyes', function (req, res) {
	const sql_txt2 = 'select * from clarinproduct where ProductType ="Eye"';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeEyeProduct = data;
			res.render('make-eyes.ejs', {
				makeEyeProduct: makeEyeProduct,
			});
		}
	});
});
app.get('/makeup/lips', function (req, res) {
	const sql_txt2 = 'select * from clarinproduct where ProductType ="Lips"';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let lipsProduct = data;
			res.render('make-lips.ejs', {
				lipsProduct: lipsProduct,
			});
		}
	});
});
app.get('/makeup/lips/price', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Lips" ORDER by ProductPrice asc;';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let lipsProduct = data;
			res.render('make-lips.ejs', {
				lipsProduct: lipsProduct,
			});
		}
	});
});
app.get('/shipping', function (req, res) {
	res.render('thanhtoan');
});
app.get('/shopping', function (req, res) {
	res.render('shop-ping');
});
app.get('/product/detail/:userID', (req, res) => {
	var usersID = req.params.userID;
	const sql_txt2 = 'select * from clarinproduct where PID = ' + usersID + ';';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let detailProduct = data;
			res.render('product.ejs', {
				detailProduct: detailProduct,
			});
		}
	});
});
app.get('/shopping/data', (req, res) => {
	const sql_txt = 'select * from shopcart ';
	connection.query(sql_txt, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let shoppingList = data;
			res.send(shoppingList);
		}
	});
});
