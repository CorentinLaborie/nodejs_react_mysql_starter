var express = require('express');
var router = express.Router();

// CRUD //
  // baseUrl //
  router.get('/', function(req, res) {
    res.send('Users');
  });
  // CREATE //
  router.get('/c', function(req, res) {
    res.send('createUser');
  });
  // READ (OneById)
  router.get('/r_one', function(req, res) {
    res.send('getUserById');
  });
  // READ (all)
  router.get('/r_all', function(req, res) {
    res.send('getUsers');
  });

  // UPDATE (OneByID)
  // router.get('/u_one', function(req, res) {
  //   res.send('updateUserById');
  // });
  // // DELETE (OneByID)
  // router.get('/d_one', function(req, res) {
  //   res.send('deleteUserById');
  // });

module.exports = router;
