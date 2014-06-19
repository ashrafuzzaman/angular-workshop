var express = require('express');
var _ = require('underscore');

var router = express.Router();
var users = [
    {id: 1, name: 'Muntasim', city: 'Dhaka'},
    {id: 2, name: 'Jitu', city: 'Dhaka'},
    {id: 3, name: 'Bazlur', city: 'Dhaka'},
    {id: 4, name: 'Younus', city: 'Dhaka'},
    {id: 5, name: 'Rakib', city: 'Dhaka'},
    {id: 6, name: 'Sharvi', city: 'Dhaka'}
];

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(users);
});

router.get('/:id', function (req, res) {
    user = _.find(users, function (user) {
        return user.id == req.params.id;
    });
    res.send(user);
});

module.exports = router;