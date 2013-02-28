var smr = smr || {};

(function($){
		
	// --------- Component Interface Implementation ---------- //
	function EaseljsClusterChart(){};
	smr.EaseljsClusterChart = EaseljsClusterChart; 
  
	EaseljsClusterChart.prototype.create = function(data,config){
		var html = hrender("tmpl-EaseljsClusterChart",{});
		return html;
	}
		
	EaseljsClusterChart.prototype.postDisplay = function(data, config) {
		var view = this;
		var $e = view.$el;
		data = data || {};
		data.children = [];
		for(var i=100; i< 400 ;i++){
			var weight = fRandomBy(20,50);
			console.log("---------------weight:"+weight );
			data.children.push({"name": "User"+i,"weight":weight});
		}
		
		var canvas = $e.find("canvas").get(0);
		var stage = new createjs.Stage(canvas);
					
		var bg = new createjs.Shape();
		stage.addChild(bg);
		
		var circlePoint = new createjs.Shape();
		circlePoint.graphics.beginFill("rgba(255,102,0,0.75)")
				            .drawCircle(400 , 400 , 10)
				            .closePath();
		stage.addChild(circlePoint);
		
		$.each(data.children,function(i,item){
			var angle = (360/data.children.length)*(Math.PI/180)*i;
			
			console.log("angle:"+angle +"---sin:"+Math.sin(angle*(Math.PI/180))+"---cos:"+Math.cos(angle*(Math.PI/180)));
			
			circlePoint.graphics.beginFill("rgba(255,102,0,0.75)")
			                    .drawCircle(400+ (Math.cos(angle)*350), 400 + (Math.sin(angle)*350) , 2)
			                    .closePath();
			stage.addChild(circlePoint);
		});
			
		stage.update();

	}
	// --------- /Component Interface Implementation ---------- //
	
	// --------- Private Method --------- //
	function fRandomBy(under, over){ 
		switch(arguments.length){ 
			case 1: return parseInt(Math.random()*under+1); 
			case 2: return parseInt(Math.random()*(over-under+1) + under); 
			default: return 0; 
		} 
	} 
	// --------- /Private Method --------- //
	
	// --------- Component Registration --------- //
	brite.registerView("EaseljsClusterChart",{
		emptyParent: true
	},
	function(){
		return new smr.EaseljsClusterChart();
	});	
	// --------- /Component Registration --------- //
	
})(jQuery);
