// SERVER >>>> DATABASE

var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      // Ask the SQL database for a list of all the messages, including username and roomname
      var sql = 'SELECT * FROM messages';
      return new Promise((resolve, reject) => {
        db.connection.query(sql, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }); // Send it back to the client
      });

    }, // a function which produces all the messages
    post: function (message) {

      var insertUser = `INSERT IGNORE INTO users (username) VALUES (${db.connection.escape(message.username)});`;
      var sql = `INSERT INTO messages (userID, messageText, roomname) VALUES ((SELECT id FROM users WHERE username = ${db.connection.escape(message.username)}), ${db.connection.escape(message.message)}, ${db.connection.escape(message.roomname)});`;

      return new Promise((resolve, reject) => {
        db.connection.query(insertUser, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            db.connection.query(sql, (error, results, fields) => {
              if (error) {
                reject(error);
              } else {
                resolve();
              }
            });
          });
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // Unused.
    },

    // a function which produces all the messages
    post: function (userToAdd) {
      var sql = `INSERT IGNORE INTO users (username) VALUES (${db.connection.escape(userToAdd)});`;

      return new Promise((resolve, reject) => {
        db.connection.query(sql, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });

    }
  }
};