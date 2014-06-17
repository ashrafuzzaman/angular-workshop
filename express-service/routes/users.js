var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var users = [
        {name: 'Muntasim', city: 'Dhaka'},
        {name: 'Jitu', city: 'Dhaka'},
        {name: 'Bazlur', city: 'Dhaka'},
        {name: 'Younus', city: 'Dhaka'},
        {name: 'Rakib', city: 'Dhaka'},
        {name: 'Sharvi', city: 'Dhaka'}
    ];
    res.send(users);
});

module.exports = router;