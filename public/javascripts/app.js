var demoApp = angular.module('demoApp', ['ngResource', 'ngRoute']);
var controllers = {};

demoApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/users.html',
                controller: 'UsersCtrl'
            }).otherwise({
                redirectTo: '/'
            });
    }]);

demoApp.factory('userFactory', function ($resource) {
    return {
        users: $resource('/users')
    };
});

controllers.UsersCtrl = function ($scope, userFactory) {
    $scope.users = userFactory.users.query();
};

demoApp.controller('UsersCtrl', controllers.UsersCtrl);