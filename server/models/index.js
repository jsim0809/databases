// SERVER >>>> DATABASE

var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // Ask the SQL database for a list of all the messages, including username and roomname
      db.connection.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
        // Send it back to the client
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var sql = `INSERT INTO messages (messageText, roomname, userID) VALUES (${message.text}, ${message.roomname}, ${message.username})`;
      db.connection.query(sql, function (error, results, fields) {
        if (error) {
          callback(error, null);
        } else {
          callback(null, null);
        }
        // Send it back to the client
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // Ask the SQL database for a list of all the messages, including username and roomname
      db.connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
        // Send it back to the client
      });
    }, // a function which produces all the messages
    post: function (user, callback) {
      var sql = `INSERT INTO users (username) VALUES (${user.username})`;
      db.connection.query(sql, function (error, results, fields) {
        if (error) {
          callback(error, null);
        } else {
          callback(null, 'HELLOOOOOOO PHONXAY');
        }
        // Send it back to the client
      });
    }
  }
};