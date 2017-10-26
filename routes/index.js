var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'test index' });
});

router.get('/doit', function(req, res, next) {
    res.render('doit', { title: 'Doit' });
});


module.exports = router;
