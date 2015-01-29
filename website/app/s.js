//services

//services
var nhServices = angular.module('nhServices', []);

nhServices.service("GameService", function () {
    this.GetGameData = function () {
        return $.ajax({ url: "data/gamedata.js" });
    }
    var GameLauncherListers = [];

    this.AddGameLauncher = function (lnch) {
        console.log("AddGameLauncher");
        GameLauncherListers.push(lnch);
    }
    this.GameLauncher = function (game) {
        
        for (var i = 0; i < GameLauncherListers.length; i++) {
            GameLauncherListers[i](game);
        }
    };

    this.LaunchGame=function(gamename) {
        $RootScope.$emit("launchgame", gamename);
    }
});


