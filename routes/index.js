var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { a: 'a' });
})

router.get('/blog', function(req, res, next) {
  res.render('blog', { a: 'a' });
})

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { a: 'a' });
})

router.get('/contact', function(req, res, next) {
  res.render('contact', { a: 'a' });
})

module.exports = router;
