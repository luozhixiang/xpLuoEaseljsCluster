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
		view.eventLable = $e.find(".event-label")
		data = data || {};
		data.children = [];
		
		//generate some random data , 300 node , the weight is between 20 and 50
		for(var i=100; i< 400 ;i++){
			var weight = fRandomBy(20,50);
			data.children.push({"name": "User"+i,"weight":weight});
		}
		//sort the data by weight
		data.children.sort(weightSort);
		
		var canvas = $e.find("canvas").get(0);
		var stage = new createjs.Stage(canvas);
					
		var bg = new createjs.Shape();
		stage.addChild(bg);
		
		var label = new createjs.Text("Click the node ,show the weight on the right!", "bold 10px Arial", "#444");
		label.textAlign = "center";
		label.x = canvas.width/2;
		label.y = 40;
		stage.addChild(label);
		
		//draw the center point
		var centerPoint = new createjs.Graphics()
									  .beginRadialGradientFill(["rgba(255,255,255,1)", "rgba(0,0,0,1)"], [0, 1], 400, 400, 5, 400, 400, 10)
									  .drawCircle(400, 400, 10)
									  .closePath();
		var shape = new createjs.Shape(centerPoint);
		stage.addChild(shape);
		
		$.each(data.children,function(i,item){
			var angle = (360/data.children.length)*(Math.PI/180)*i;
			var lineLength = (item.weight/50) * 350;
			
			//calculate the node position of circle center 
			var ponint = {x:400+ (Math.cos(angle)*lineLength),y:400 + (Math.sin(angle)*lineLength)};
			
			console.log("angle:"+angle +"---sin:"+Math.sin(angle*(Math.PI/180))+"---cos:"+Math.cos(angle*(Math.PI/180)));
			
			var container = new createjs.Container();
			container.x = ponint.x;
			container.y = ponint.y;
			container.name = item.name;
			container.weight = item.weight;
			
			//draw the node
			var node = new createjs.Shape();
			node.graphics.beginFill("rgba(255,102,0,0.75)")
			                    .drawCircle(0, 0, 2)
			                    .closePath();
			container.addChild(node);
			
			//add the click event for node
			container.addEventListener("click",function(evt){
				var html = hrender("tmpl-EaseljsClusterChart-event-label",evt.target);
				view.eventLable.html(html);
			});
			
			//draw the line 
			bg.graphics.beginStroke(i%2 ? "#333" : "#444")
					   .moveTo(400,400)
					   .lineTo(ponint.x,ponint.y);
			
			stage.addChild(container);
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
	
	function weightSort(a,b){
		return a.weight>b.weight ? 1 :-1;
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
