const express = require('express');
const app = express();
const port = process.env.PORT || 1234;

const mysql = require('mysql');
const connection = mysql.createConnection({
	// host: 'db4free.net',
	host: 'localhost',
	port: '3306',
	user: 'minhntq19',
	password: 'jessica123',
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
app.get('/about-us', (req, res) => {
	res.render('aboutus');
});
app.get('/store', (req, res) => {
	res.render('contactus');
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
app.get('/makeuo/mostsale', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="makeup" ORDER by ProductSale desc;';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeupProduct = data;
			res.render('makeup.ejs', {
				makeupProduct: makeupProduct,
			});
		}
	});
});
app.get('/makeuo/mostpopular', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="makeup" ORDER by ProductSale desc;';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeupProduct = data;
			res.render('makeup.ejs', {
				makeupProduct: makeupProduct,
			});
		}
	});
});
app.get('/makeuo/pricedesc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="makeup" ORDER by ProductPrice desc;';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeupProduct = data;
			res.render('makeup.ejs', {
				makeupProduct: makeupProduct,
			});
		}
	});
});
app.get('/makeuo/priceasc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="makeup" ORDER by ProductPrice asc;';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeupProduct = data;
			res.render('makeup.ejs', {
				makeupProduct: makeupProduct,
			});
		}
	});
});
app.get('/makeuo/price50', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="makeup" AND ProductPrice <50;';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeupProduct = data;
			res.render('makeup.ejs', {
				makeupProduct: makeupProduct,
			});
		}
	});
});
app.get('/makeuo/price100', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="makeup" AND ProductPrice <100;';
	connection.query(sql_txt2, (err, data) => {
		if (err) res.send('404 not found');
		else {
			let makeupProduct = data;
			res.render('makeup.ejs', {
				makeupProduct: makeupProduct,
			});
		}
	});
});
app.get('/makeuo/price500', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="makeup" AND ProductPrice <500;';
	connection.query(sql_txt2, (err, data) => {
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
app.get('/skincare/mostsale', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="skincare" ORDER by ProductSale desc;';
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
app.get('/skincare/mostpopular', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="skincare" ORDER by ProductRate desc;';
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
app.get('/skincare/pricedesc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="skincare" ORDER by ProductPrice desc;';
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
app.get('/skincare/priceasc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory ="skincare" ORDER by ProductPrice asc;';
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
app.get('/skincare/price50', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory = "skincare" AND ProductPrice <50;';
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
app.get('/skincare/price100', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory = "skincare" AND ProductPrice <100;';
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
app.get('/skincare/price500', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductCategory = "skincare" AND ProductPrice <500;';
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
app.get('/skincare/face/mostsale', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="facecare" ORDER by ProductSale desc;';
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
app.get('/skincare/face/mostpopular', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="facecare" ORDER by ProductRate desc;';
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
app.get('/skincare/face/pricedesc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="facecare" ORDER by ProductPrice desc;';
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
app.get('/skincare/face/priceasc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="facecare" ORDER by ProductPrice asc;';
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
app.get('/skincare/face/price50', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "facecare" AND ProductPrice <50;';
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
app.get('/skincare/face/price100', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "facecare" AND ProductPrice <100;';
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
app.get('/skincare/face/price500', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "facecare" AND ProductPrice <500;';
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
app.get('/skincare/body-care/mostsale', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="bodycare" ORDER by ProductSale desc;';
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
app.get('/skincare/body-care/mostpopular', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="bodycare" ORDER by ProductRate desc;';
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
app.get('/skincare/body-care/pricedesc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="bodycare" ORDER by ProductPrice desc;';
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
app.get('/skincare/body-care/priceasc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="bodycare" ORDER by ProductPrice asc;';
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
app.get('/skincare/body-care/price50', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "bodycare" AND ProductPrice <50;';
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
app.get('/skincare/body-care/price100', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "bodycare" AND ProductPrice <100;';
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
app.get('/skincare/body-care/price500', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "bodycare" AND ProductPrice <500;';
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
app.get('/skincare/men/mostsale', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="men" ORDER by ProductSale desc;';
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
app.get('/skincare/men/mostpopular', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="men" ORDER by ProductRate desc;';
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
app.get('/skincare/men/pricedesc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="men" ORDER by ProductPrice desc;';
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
app.get('/skincare/men/priceasc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="men" ORDER by ProductPrice asc;';
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
app.get('/skincare/men/price50', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "men" AND ProductPrice <50;';
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
app.get('/skincare/men/price100', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "men" AND ProductPrice <100;';
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
app.get('/skincare/men/price500', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "men" AND ProductPrice <500;';
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
app.get('/makeup/face/pricedesc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Face" ORDER by ProductPrice desc;';
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
app.get('/makeup/face/priceaes', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Face" ORDER by ProductPrice asc;';
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
app.get('/makeup/face/mostpopular', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Face" ORDER by ProductRate desc;';
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
app.get('/makeup/face/mostsale', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Face" ORDER by ProductSale desc;';
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
app.get('/makeup/face/price50', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Face" AND ProductPrice <50;';
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
app.get('/makeup/face/price100', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Face" AND ProductPrice <100;';
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
app.get('/makeup/face/price500', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Face" AND ProductPrice <500;';
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
//eye
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
app.get('/makeup/eyes/pricedesc', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Eye" ORDER by ProductPrice desc;';
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
app.get('/makeup/eyes/priceaes', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Eye" ORDER by ProductPrice asc;';
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
app.get('/makeup/eyes/mostpopular', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Eye" ORDER by ProductRate desc;';
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
app.get('/makeup/eyes/mostsale', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Eye" ORDER by ProductSale desc;';
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
app.get('/makeup/eyes/price50', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Eye" AND ProductPrice <50;';
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
app.get('/makeup/eyes/price100', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Eye" AND ProductPrice <100;';
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
app.get('/makeup/eyes/price500', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Eye" AND ProductPrice <500;';
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
//lips
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
app.get('/makeup/lips/pricedes', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Lips" ORDER by ProductPrice desc;';
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
app.get('/makeup/lips/priceaes', function (req, res) {
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
app.get('/makeup/lips/mostpopular', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Lips" ORDER by ProductRate desc;';
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
app.get('/makeup/lips/mostsale', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType ="Lips" ORDER by ProductSale desc;';
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
app.get('/makeup/lips/price50', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Lips" AND ProductPrice <50;';
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
app.get('/makeup/lips/price100', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Lips" AND ProductPrice <100;';
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
app.get('/makeup/lips/price500', function (req, res) {
	const sql_txt2 = 'SELECT * FROM clarinproduct WHERE ProductType = "Lips" AND ProductPrice <500;';
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
