var express = require('express');
var router = express.Router();

var connection = require('../public/javascripts/mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query('select * from locations', function(err, rows) {    
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

    // console.log("[place]place(id: ", place.id, " name: ", place.name, " ) part(id:", p. , ")");
    for (let p of parts) {
        console.log("[location insert into DB]place(id: ",place.id, ", name: ", place.name, ") part(id: ", p.id, " name: ", p.name, ")");
        var query = connection.query('insert into locations (place_id, part_id) values (?,?)', [place.id, p.id], function (error, results, fields) {
            if(error) console.error(error);
            console.log('succeed')
        })
        console.log(query.sql)
    }

    // console.log("[place]", place)

    res.send('received post request.');
})

module.exports = router;

