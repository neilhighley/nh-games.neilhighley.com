    function GameOneMain(element) {

        var fg = {};
        var bg = {};
        var fx = {};
        var rootElement = element!=undefined?element:"";
        var st = {};
        var cn = {};

        this.start = function() {
            console.log("GameStart");

        }

        this.setup=function() {
            var canvas = document.getElementById(rootElement);
            canvas.width = window.innerWidth - 5;
            canvas.height = window.innerHeight - 5;
            var stage = new createjs.Stage(canvas);
            var fxContainer = new createjs.Container();
            stage.addChild(fxContainer);

            var bgContainer = new createjs.Container();
            var fgContainer = new createjs.Container();
            stage.addChild(bgContainer);
            stage.addChild(fgContainer);

            this.init(stage, canvas, bgContainer, fgContainer, fxContainer);

            
            
        }

        this.init = function(_st, _c, _fg, _bg, _fx) {
            st = _st;
            fg = _fg;
            bg = _bg;
            fx = _fx;
            cn = _c;
            createjs.Ticker.setInterval(90);
            createjs.Ticker.setFPS(20);
        }

        this.clearScreen = function(strColor) {

            var loopMax = 50;
            var loopCurr = 0;

            function fillLoop(e) {
                if (loopCurr < loopMax) {
                    for (var i = 0; i < 100; i++) {
                        var rndh = Math.floor(Math.random() * cn.height);
                        var rndw = Math.floor(Math.random() * cn.width);

                        var shape = new createjs.Shape();
                        shape.graphics.beginFill(strColor).drawRect(rndw - 70, rndh - 70, 50, 50);
                        fx.addChild(shape);
                    }
                    loopCurr++;
                    st.update();
                } else {

                    var bgShape = new createjs.Shape();
                    bgShape.graphics.beginFill(strColor).drawRect(0, 0, cn.width, cn.height);
                    bg.addChild(bgShape);
                    st.update();

                    e.remove();
                    this.start();

                }

            }

            createjs.Ticker.on("tick", fillLoop, this);

        }


    };

