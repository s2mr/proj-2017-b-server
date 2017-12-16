var express = require('express');
var router = express.Router();

var Sequelize = require('sequelize')

var seq = new Sequelize('kagaya', 'root', '', {
    dialect: 'mysql',
    define: {
       timestamps: false,
       underscored: true
   }
});

const Parts = seq.define('parts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },
});

const Places = seq.define('places', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },
});

const Locations = seq.define('locations', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    part_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "parts",
            key: "id"
        }
    },
    place_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "places",
            key: "id"
        }
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },
});

Parts.belongsTo(Places, {
    foreignKey: "id",
    targetKey: "id",
    through: Locations
});
// Places.belongsTo(Locations, {
//     foreignKey: "id",
//     targetKey: "place_id"
// });

Places.belongsToMany(Parts, {
    foreignKey: "id",
    targetKey: "id",
    through: Locations
})

seq.sync();

// Locations.hasMany(Places, {
//     foreignKey: "id",
//     targetKey: "location_id"
// })

seq
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Parts.findAll().then(parts => {
//     console.log(parts[0].name)
// })

var option = {
  include: [
    {
      model: Parts, 
      separate: false, // Prefectureが1つしか入らないときは、separate:falseにすると、JSONObjectとして出力される
    },
  ]
};

Places.findAll(option)
.then(places => {
    for (let pls of places) {
        console.log(pls.getParts().name)
    }
})

// Locations.findAll(option).then(locs => {
//     for (let loc of locs) {
//         // console.log(loc.parts)
//         console.log(loc.places)
//     }
//     // console.log
// })

// var Parts = seq.define('parts', {
//   id: Sequelize.NUMBER,
//   name: Sequelize.STRING
// });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'プロジェクト演習'
    });
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

// var connection = require('../public/javascripts/mysqlConnection');
// connection.query('show databases', function(err, rows) {
//     console.log(rows);
// })