var demoApp = angular.module('demoApp', []);

var controllers = {};

controllers.SimpleCrtl = function ($scope) {
    $scope.users = [
        {name: 'Muntasim', city: 'Dhaka'},
        {name: 'Jitu', city: 'Dhaka'},
        {name: 'Bazlur', city: 'Dhaka'},
        {name: 'Younus', city: 'Dhaka'},
        {name: 'Rakib', city: 'Dhaka'},
        {name: 'Sharvi', city: 'Dhaka'}
    ]
};

demoApp.controller('SimpleCrtl', controllers.SimpleCrtl);