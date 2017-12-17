var express = require('express');
var router = express.Router();

var connection = require('../public/javascripts/mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query('select * from parts', function(err, rows) {    
        res.render('index', {
            title: 'プロジェクト演習',
            rows: rows
        });
    })
});

router.post('/api/v1/qr', function(req, res) {

    /*
    { place: { id: 'id', name: 'place_name' },
        parts: [ { id: 'id', name: 'parts1' }, { id: 'id', name: 'parts2' } ] }
    */

    // console.log("[body]", req.body);
    var json = req.body;

    var place = json.place
    var parts = json.parts

    console.log("[place]id: ", place.id, " name: ", place.name);
    for (let p of parts) {
        console.log("[parts]id: ", p.id, " name: ", p.name);
    }


    // console.log("[place]", place)

    res.send('received post request.');
})

module.exports = router;

