//factory
var nhFactories = angular.module('nhFactories', []);

nhFactories.factory("GameDataFactory", function () {
    return {
        GetData: function () {
            return $.ajax({ url: "/data/gamedata.js" });
        }
    }
});