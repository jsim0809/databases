var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
// router.get('/messages', controller.messages.get);
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', function (req, res) {
  res.send('=========hello world3=========');
  console.log('sent response 3');
});

router.post('/users', controller.users.post);


module.exports = router;

