var express = require('express');
var router = express.Router();
var transfromTextByBrowser = require('../lib/browser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/2', async (req, res, next) => {
  try {
    const data = await transfromTextByBrowser()
    res.send({
      status: 200,
      data
    })
  } catch (error) {
    next(error)
  }
});

module.exports = router;
