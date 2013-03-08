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
		for(var i=100; i< 130 ;i++){
			var weight = fRandomBy(20,50);
			data.children.push({"name": "User"+i,"weight":weight});
		}
		//sort the data by weight
		data.children.sort(weightSort);
		
		var canvas = $e.find("canvas").get(0);
		var stage = new createjs.Stage(canvas);
			stage.enableMouseOver(20);
					
		var bg = new createjs.Shape();
		stage.addChild(bg);
		
		var label = new createjs.Text("Click the node to show the weight on the right!", "bold 10px Arial", "#444");
		label.textAlign = "center";
		label.x = canvas.width/2;
		label.y = 40;
		stage.addChild(label);
		
		//draw the center point
		var centerPoint = new createjs.Graphics()
									  .beginRadialGradientFill(["#E2EB9B", "#006400"], [0.2, 1], 400, 400, 1, 400, 400, 20)
									  .drawCircle(400, 400, 20)
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
			                    .drawCircle(0, 0, 6)
			                    .closePath();
			container.addChild(node);
			
			//add the click event for node
			container.addEventListener("mouseover",function(evt){
				var html = hrender("tmpl-EaseljsClusterChart-event-label",evt.target);
				view.eventLable.html(html);
			});
			
			//draw the line 
			bg.graphics.beginStroke(i%2 ? "#333" : "#444")
					   .moveTo(400,400)
					   .lineTo(ponint.x,ponint.y);
			
			if(i==0 || (i+1)%10==0){
				var text = new createjs.Text(item.name, "10px Arial", "#777");
				var mx = 0;
				var my = 0;
				var ang = (360/data.children.length)*i;
				if(ang <= 45){
					mx = 2;
					my = 0;
				}else if(ang > 45 && ang <= 90){
					mx = 2;
					my = 5;
				}else if(ang > 90 && ang <= 180){
					mx = -50;
					my = 5;
				}else if(ang > 180 && ang <= 225){
					mx = -50;
					my = -5;
				}else if(ang > 225 && ang <= 270){
					mx = -50;
					my = -15;
				}else if(ang > 270 && ang <= 315){
					mx = 10;
					my = -20;
				}else if(ang > 315 && ang < 360){
					mx = 10;
					my = -10;
				}
				text.x = ponint.x + mx;
				text.y = ponint.y + my;
				stage.addChild(text);
			}
			
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
