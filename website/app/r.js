//route
var nhRoutes=angular.module("nhRoutes",[]);

nhRoutes.config([
    '$routeProvider',
    function($routeProvider) {

        $routeProvider.
            when('/home', {
                templateUrl: 'app/p/front.html',
                controller: 'HomeCtrl'
            }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);