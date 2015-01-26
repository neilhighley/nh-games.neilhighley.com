//directives
var nhDirectives = angular.module('nhDirectives', []);

nhDirectives.directive("createjsCanvas", ["$compile",function($compile) {

    var controller = function ($scope, $element) {
        $element.hide();
        $scope.$root.$on("gamelaunch", function(e, data) {
            console.log(data);
            switch (data) {
                case "game1":
                    $scope.$root.$emit("hidemenu");
                    $element.show();
                    $element.append($compile("<game-one/>")($scope));

                    break;
                default:
                    break;
            }
        });
    }

    return {
        restrict: "E",
        scope: {
            launcher:"="
        },
        controller: controller,
        template: ""
    }
}]);


nhDirectives.directive("gamesMenu", ["$compile", function ($compile) {
    var controller=function($scope, $element) {
        $scope.Goto = function(loc) {
            $scope.$root.$emit("gamelaunch", loc);
        };
        $scope.$root.$on("hidemenu", function () {
            $element.hide();
        });
        $scope.$root.$on("showmenu", function () {
            $element.show();
        });

    }

    return {
        restrict: "E",
        scope: {
            menu: "=",
            launcher:"="
        },
        controller:controller,
        templateUrl: "../app/d/gamesMenu.html"
    }


}]);

nhDirectives.directive("menuIntro", ["$compile", function ($compile) {

    return {
        restrict: "E",
        scope: {
            intro: "="
        },
        templateUrl: "../app/d/menuIntro.html"
    }


}]);

nhDirectives.directive("gameOne", [function() {

        return {
            restrict:"E",
            scope:false,
            templateUrl:"../app/g/game1.html"
        }
    }
]);