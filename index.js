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
