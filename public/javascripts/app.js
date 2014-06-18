//var demoApp = angular.module('demoApp', ['ngResource']);
//var controllers = {};
//
//demoApp.config(['$routeProvider',
//    function ($routeProvider) {
//        $routeProvider.
//            when('/', {
//                templateUrl: 'partials/users.html',
//                controller: 'UsersCtrl'
//            });
//    }]);
//
//demoApp.factory('userFactory', function ($resource) {
//    return {
//        users: $resource('/users')
//    };
//});
//
//controllers.UsersCtrl = function ($scope, userFactory) {
//    $scope.users = userFactory.users.query();
//};
//
//demoApp.controller('UsersCtrl', controllers.UsersCtrl);


var demoApp = angular.module('demoApp', ['ngResource']);
var controllers = {};

demoApp.factory('userFactory', function ($resource) {
    return {
        users: $resource('/users')
    };
});

controllers.SimpleCrtl = function ($scope, userFactory) {
    $scope.users = userFactory.users.query();
};

demoApp.controller('SimpleCrtl', controllers.SimpleCrtl);