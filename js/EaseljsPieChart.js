var smr = smr || {};

(function($){
	
	var colors = [ "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c",
                   "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5",
                   "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f",
                   "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5" ];
	
	// --------- Component Interface Implementation ---------- //
	function EaseljsPieChart(){};
	smr.EaseljsPieChart = EaseljsPieChart; 
  
	EaseljsPieChart.prototype.create = function(data,config){
		var html = hrender("tmpl-EaseljsPieChart",{});
		return html;
	}
		
	EaseljsPieChart.prototype.postDisplay = function(data, config) {
		var view = this;
		var $e = view.$el;
		data = generateData.call(this);
		$e.find(".EaseljsPieChart-table tbody").html(hrender("tmpl-EaseljsPieChart-dataTable-tableTbody",data));
		
		var canvas = $e.find("canvas").get(0);
		var stage = new createjs.Stage(canvas);
			stage.enableMouseOver(20);
					
		var bg = new createjs.Shape();
		stage.addChild(bg);
		
		$.each(data.data,function(i,item){
			console.log("startAngle:"+item.startAngle +"---endAngle:"+item.endAngle);
			var point = {x:250+ (Math.cos(item.startAngle)*150),y:200 + (Math.sin(item.startAngle)*150)};
			item.point = point;
			var arc = new createjs.Graphics().beginFill(item.color)
											 .arc(250, 200, 150, item.startAngle, item.endAngle)
											 .lineTo(250,200)
											 .lineTo(point.x,point.y)
											 .endFill();
			var shape = new createjs.Shape(arc);
			shape.index = i;
			shape.addEventListener("mouseover",function(evt){
				$e.find(".EaseljsPieChart-table tbody").find("tr").removeClass("sel").eq(evt.target.index).addClass("sel");
			});
			shape.addEventListener("mouseout",function(evt){
				$e.find(".EaseljsPieChart-table tbody").find("tr").removeClass("sel");
			});
			stage.addChild(shape);
		});
//			
		stage.update();

	}
	// --------- /Component Interface Implementation ---------- //
	
	// --------- Private Method --------- //
	function generateData(){
		var tdata = [];
		var total = 0;
		var startAngle = 0;
		tdata.push({name:"Chrome",value:397});
		tdata.push({name:"Opera",value:345});
		tdata.push({name:"Safari",value:312});
		tdata.push({name:"Firefox",value:310});
		tdata.push({name:"Internet Explorer",value:307});
		
		$.each(tdata,function(j,item){total+=item.value;});
		$.each(tdata,function(j,item){
			var percentage = item.value/total;
			item.color = colors[j];
			item.index = j+1;
			item.startAngle = (j==0 ? 0 : tdata[j-1].endAngle);
			item.endAngle = (j==tdata.length-1 ? Math.PI*2 : (Math.PI*2)*percentage + item.startAngle);
			item.percent = (percentage.toFixed(4))*100;
		});
		
		return {total:total,data:tdata};
	}
	// --------- /Private Method --------- //
	
	// --------- Component Registration --------- //
	brite.registerView("EaseljsPieChart",{
		emptyParent: true
	},
	function(){
		return new smr.EaseljsPieChart();
	});	
	// --------- /Component Registration --------- //
	
})(jQuery);
