//controllers
var nhControllers = angular.module("nhControllers", []);

nhControllers.controller("HeaderCtrl", ["$scope", "$routeParams", "$location", "GameService", function ($scope, $routeParams, $location, GameService) {
    //$scope.GameMenuData = [{ title: "Game1", location: "/game1" },
    //{ title: "Game2", location: "/game2" }];

    $scope.GameLauncher = GameService.GameLauncher;

    $scope.GameMenuData = GameService.GetGameData()
        .then(function(response) {
                $scope.$apply(function() {
                    $scope.GameMenuData = eval(response);
                });
            },
            function(response) {
                console.log("couldn't get gamedata");
            });

    $scope.GoHome = function () {
        $location.path('/');
    }
}]);


nhControllers.controller("HomeCtrl", ["$scope", "$routeParams", "$location", function ($scope, $routeParams, $location) {
    $scope.timenow = Date.now();
}]);

nhControllers.controller("GameCtrl", ["$scope", "GameService", function ($scope, GameService) {

    $scope.GameLauncherListener = GameService.AddGameLauncher;


}]);