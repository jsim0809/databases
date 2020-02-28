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
      models.messages.get()
        .then((results) => {
          res.status(200).send(results);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },

    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req.body)
        .then(() => {
          res.sendStatus(201);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    }
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      // Unused.
    },

    post: function (req, res) { // a function which handles posting a message to the database
      models.users.post(req.body.username)
        .then(() => {
          res.sendStatus(201);
        })
        .catch((string) => {
          if (string === 'duplicate entry') {
            res.sendStatus(403);
          } else {
            res.sendStatus(500);
          }
        });
    }
  }
};

