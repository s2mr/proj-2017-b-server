var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'プロジェクト演習' });
});

router.post('/api/v1/qr', function(req, res) {
    res.send('received post request.');
})

module.exports = router;
