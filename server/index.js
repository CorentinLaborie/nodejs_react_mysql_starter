// TECHNOS //
const express = require('express')
 HTTP = require('http'),
 cors = require('cors'),
 axios = require("axios"),
 bodyParser = require('body-parser'),
 CryptoJS = require("crypto-js");



// Routes //
var usersRoutes = require('./routes/users');

// Instance et creation de serveur //
const app = express();
const server = HTTP.createServer(app);
const PORT = process.env.PORT || 5000;
const API_URL = "http://localhost:5000/";

// CORS //
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// BodyParser //
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

// ROUTING //
	// Welcome //
	app.get('/', (req,res) => {
		res.send("Welcome")
	})
	// Users //
	app.use('/users', usersRoutes)


// LISTENING //
app.use(cors());
server.listen(PORT, () => console.log(`Le serveur de --Warkeep_BACKEND-- est UP ! PORT : ${PORT} ; ADRESSE : ${API_URL}`));
