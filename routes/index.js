var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});

router.post('/', function(req, res){
    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.send("Hi there! " + req.param('username'));
});

module.exports = router;
