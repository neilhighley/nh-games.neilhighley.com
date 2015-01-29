    function GameOneMain(element) {

        var fg = {};
        var bg = {};
        var fx = {};
        var rootElement = element!=undefined?element:"";
        var st = {};
        var cn = {};
        var lib={};
       

        this.setup=function(l) {

            var canvas = document.getElementById(rootElement);
            canvas.width = window.innerWidth - 5;
            canvas.height = window.innerHeight - 5;
            var stage = new createjs.Stage(canvas);
            var fxContainer = new createjs.Container();
            stage.addChild(fxContainer);

            var bgContainer = new createjs.Container();
            var fgContainer = new createjs.Container();
            stage.addChild(fgContainer);
            stage.addChild(bgContainer);


            this.init(stage, canvas, bgContainer, fgContainer, fxContainer,l);

            
            
        }

        this.init = function(_st, _c, _fg, _bg, _fx,_l) {
            st = _st;
            fg = _fg;
            bg = _bg;
            fx = _fx;
            cn = _c;
            lib=_l;
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
                    fg.removeAllChildren();
                    st.update();

                    e.remove();
                    this.loadAssets();

                }

            }

            createjs.Ticker.on("tick", fillLoop, this);

        }

        this.loadAssets=function() {
            //createjs.Sound.registerSound("assets/thunder.mp3", soundID);
           this.start();

        }

        this.drawLoop=function(){
            st.update();
        }

        this.start = function () {
            console.log("GameStart");
            createjs.Ticker.addEventListener("tick", this.drawLoop);
            this.showLogo(this.startIntro);
        };
        this.startIntro=function(){
            console.log("Start Intro");
            fg.removeAllChildren();
            var title_screen=new lib.titleScreen();
            title_screen.alpha=0;
            title_screen.titletext.alpha=0;
            title_screen.failo.alpha=0;

            createjs.Tween.get(title_screen).wait(0).to({alpha:1},1000);

            createjs.Tween.get(title_screen.titletext).wait(1000).to({alpha:1},1000);
            createjs.Tween.get(title_screen.failo).wait(2000).to({alpha:1},500);

            fg.addChild(title_screen);
        }

        this.showLogo=function(callback){
            console.log("show logo");

            var l_logo=new lib.logo();
            l_logo.x=300;
            l_logo.y=150;

            createjs.Tween.get(l_logo).wait(5000).to({alpha:0},2000).call(callback);

            l_logo.logo_text.alpha=0;
            l_logo.logo_ball.alpha=0;
            l_logo.logo_main.alpha=0;

            createjs.Tween.get(l_logo.logo_text).to({alpha:1},3000);
            createjs.Tween.get(l_logo.logo_ball).to({alpha:1},2000);
            createjs.Tween.get(l_logo.logo_main).to({alpha:1},2300);

            //and the fadeout

            fg.addChild(l_logo);
        }
    };

