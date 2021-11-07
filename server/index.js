// TECHNOS //
const express = require('express'),
  HTTP = require('http'),
  cors = require('cors'),
  axios = require("axios"),
  bodyParser = require('body-parser'),
  CryptoJS = require("crypto-js");

// ORM //
var ORM = require("./database/connection")

// Routes //
var logsRoutes = require('./routes/logs');

// Instance et creation de serveur //
const app = express(),
  server = HTTP.createServer(app),
  PORT = process.env.PORT || 5000,
  API_URL = "http://localhost:5000/";

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
	// Logs //
	app.use('/logs', logsRoutes)


// LISTENING //
app.use(cors());
server.listen(PORT, () => {
	ORM.TryConnection();
	console.log(`Le serveur de -- APPNAME -- est UP ! PORT : ${PORT} ; ADRESSE : ${API_URL}`)}
	);
