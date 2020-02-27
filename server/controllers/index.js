// SERVER >>>> CLIENT

var models = require('../models');
// var express = require('express');
// var app = express();

// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // 1) ask models to make the SQL request
      // 2) send back the response
      models.messages.get((err, results) => {
        if (err) {
          res.statusCode = 404;
          res.end();
        } else {
          res.statusCode = 200;
          res.write(JSON.stringify(results));
          res.end();
        }
      });
    },

    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post((err) => {
        if (err) {
          res.statusCode = 404;
          res.end();
        } else {
          res.statusCode = 200;
          res.end();
        }
      });
    }
  },
  users: {
    // Ditto as above
    get: function (req, res) { // a function which handles a get request for all users
      // 1) ask models to make the SQL request
      // 2) send back the response
      models.users.get((err, results) => {
        if (err) {
          res.statusCode = 404;
          res.end();
        } else {
          res.statusCode = 200;
          res.write(JSON.stringify(results));
          res.end();
        }
      });
    },

    post: function (req, res) { // a function which handles posting a message to the database
      models.users.post(req.body)
        .then(() => {
          res.status().send();
        });



    }
  }
};

