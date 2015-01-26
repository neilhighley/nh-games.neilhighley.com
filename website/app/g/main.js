function GameOneMain() {

    var fg = {};
    var bg = {};
    var fx = {};
    var stage = {};
    this.start = function() {
        console.log("GameStart");

    }

        this.init=function(st, _fg, _bg, _fx) {
            stage = st;
            fg = _fg;
            bg = _bg;
            fx = _fx;

            createjs.Ticker.setInterval(90);
            createjs.Ticker.setFPS(20);
        }

    this.clearScreen=function(strColor) {
        
        var loopMax = 50;
        var loopCurr = 0;

        function fillLoop(e) {
            if (loopCurr < loopMax) {
                for (var i = 0; i < 100; i++) {
                    var rndh = Math.floor(Math.random() * canvas.height);
                    var rndw = Math.floor(Math.random() * canvas.width);

                    var shape = new createjs.Shape();
                    shape.graphics.beginFill(strColor).drawRect(rndw - 70, rndh - 70, 50, 50);
                    fxContainer.addChild(shape);
                }
                loopCurr++;
                stage.update();
            } else {

                var bg = new createjs.Shape();
                bg.graphics.beginFill(strColor).drawRect(0, 0, canvas.width, canvas.height);
                bgContainer.addChild(bg);
                stage.update();

                //fxContainer.clear();
                e.remove();
                this.start();

            }

        }

        createjs.Ticker.on("tick", fillLoop, this);

    }

       

    };