var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      // Ask the SQL database for a list of all the messages, including username and roomname

      // Put it into an object

      // Send it back to the client

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

