var express = require('express'),
  router = express.Router(),
  logController = require("../controllers/logController");

let id;
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  let protocol = req.protocol;
  let host = req.get('host');
  let baseUrl = req.baseUrl;
  let path = req._parsedUrl.path;
  let fullURL = protocol + '://' + host + baseUrl + path;
  let text = "Requete vers : " + fullURL;
  // console.log(text);
  logController.CreateLog(protocol, host , baseUrl, path ,fullURL, text);
  next();
});

// CRUD //
  // baseUrl //
  router.get('/', function(req, res) {
    res.send('Logs');
  });
  // READ (OneById)
  router.get(`/rid/:id`, function(req, res) {
    let log = logController.getLogById(req.params.id);
    console.log("ici",log)
  });
  // READ (all)
  router.get('/rall', async function(req, res) {
    let Logs = await logController.ReadAllLogs();
    console.log("LOGS",Logs)
    res.send(Logs);
  });
  // UPDATE (OneByID)
  router.get('/u_one', function(req, res) {
    res.send('updateLogById');
  });
  // DELETE (OneByID)
  router.get('/d_one', function(req, res) {
    res.send('deleteLogById');
  });

module.exports = router;
