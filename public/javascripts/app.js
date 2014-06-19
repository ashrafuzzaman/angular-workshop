var demoApp = angular.module('demoApp', ['ngResource', 'ngRoute']);
var controllers = {};

demoApp.directive('userLink', function () {
    return {
        restrict: 'AE',
        replace: 'true',
        scope: {
            user: '='
        },
        template: '<a href="#/users/{{user.id}}">{{user.name}}</a>'
    };
});

demoApp.factory('usersFactory', function ($resource) {
    return $resource('/users', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    });
});

demoApp.factory('userFactory', function ($resource) {
    return $resource('/users/:id', {}, {
        get: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
});

demoApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'partials/users.html',
                controller: 'UsersCtrl'
            }).when('/users/:id', {
                templateUrl: 'partials/user.html',
                controller: 'UserDetailCtrl'
            }).otherwise({
                redirectTo: '/users'
            });
    }]);

controllers.UsersCtrl = function ($scope, usersFactory) {
    $scope.users = usersFactory.query();
};

controllers.UserDetailCtrl = function ($scope, $routeParams, userFactory) {
    $scope.user = userFactory.get({id: $routeParams.id});
    console.log($scope.user);
};

demoApp.controller('UsersCtrl', controllers.UsersCtrl);
demoApp.controller('UserDetailCtrl', controllers.UserDetailCtrl);