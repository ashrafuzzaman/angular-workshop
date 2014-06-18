var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var users = [
        {id: 1, name: 'Muntasim', city: 'Dhaka'},
        {id: 2, name: 'Jitu', city: 'Dhaka'},
        {id: 3, name: 'Bazlur', city: 'Dhaka'},
        {id: 4, name: 'Younus', city: 'Dhaka'},
        {id: 5, name: 'Rakib', city: 'Dhaka'},
        {id: 6, name: 'Sharvi', city: 'Dhaka'}
    ];
    res.send(users);
});

module.exports = router;