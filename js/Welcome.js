(function ($) {
    brite.registerView("Welcome",  {
		emptyParent : true,
		parent:".MainScreen-main"
	}, {
    	create:function (data, config) {
            var html = hrender("tmpl-Welcome",{});
            return html;
        },
        postDisplay:function (data, config) {
            var view = this;
            var $e = view.$el;
            
            var sx = 0;
    		var canvas = document.getElementById("WelcomeCanvas");
    		var stage = new createjs.Stage(canvas);
    		var text = new createjs.Text("Welcome to the Easejs Chart Demo!", "36px Arial", "#444");
    		stage.addChild(text);
    		text.x = 0;
    		text.y = 20;
    		stage.update();
    		
    		createjs.Ticker.useRAF = true;
    		createjs.Ticker.setFPS(30);
    		createjs.Ticker.addEventListener("tick", tick);
    		
    		function tick(){
    			sx+=10;
    			text.x = sx;
    			stage.update();
    			if(sx>=180){
    				createjs.Ticker.removeEventListener("tick", tick);
    			}
    		}
    		
		}
    });
    
})(jQuery);

