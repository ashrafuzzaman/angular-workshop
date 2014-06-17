var demoApp = angular.module('demoApp', ['ngResource']);
var controllers = {};

demoApp.factory('userFactory', function ($resource) {
    return {
        users: $resource('http://localhost:3000/users')
    };
});

controllers.SimpleCrtl = function ($scope, userFactory) {
    $scope.users = userFactory.users.query();
};

demoApp.controller('SimpleCrtl', controllers.SimpleCrtl);