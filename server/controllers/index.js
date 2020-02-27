// SERVER >>>> CLIENT

var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
    // 1) ask models to make the SQL request
    // 2) send back the response
      models.messages.get( (err, results) => {
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

    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

