Handlebars.templates = Handlebars.templates || {};


// template --- tmpl-EaseljsClusterChart ---
Handlebars.templates['tmpl-EaseljsClusterChart'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"EaseljsClusterChart\">\n		<canvas id=\"EaseljsClusterCanvas\" width=\"800\" height=\"800\"></canvas>\n		<span class=\"event-label\"></span>\n	</div>";}
);

// template --- tmpl-EaseljsClusterChart-event-label ---
Handlebars.templates['tmpl-EaseljsClusterChart-event-label'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "You click node[ name:";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ",weight:";
  foundHelper = helpers.weight;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.weight; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "]";
  return buffer;}
);

// template --- tmpl-EaseljsPieChart ---
Handlebars.templates['tmpl-EaseljsPieChart'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"EaseljsPieChart\">\n	  	<div class=\"EaseljsPieChart-table\">\n			<table class=\"dataTable pie-dataShow\">\n				<thead>\n					<tr>\n						<th class=\"legend-label\">Legend</th>\n						<th class=\"name-label\">Name</th>\n						<th class=\"value-label\">Value</th>\n						<th class=\"percent-label\">%</th>\n					</tr>\n				</thead>\n				<tbody>\n\n				</tbody>\n			</table>\n		</div>\n		<canvas id=\"EaseljsPieChart\" width=\"800\" height=\"800\"></canvas>\n	</div>";}
);

// template --- tmpl-EaseljsPieChart-dataTable-tableTbody ---
Handlebars.templates['tmpl-EaseljsPieChart-dataTable-tableTbody'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n		<tr>\n			<td>\n				<div class=\"indexNum\" data-target=\"target1\">";
  foundHelper = helpers.index;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.index; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n				<div class=\"indexParColor\" style=\"background:";
  foundHelper = helpers.color;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></div> \n			</td>\n			<td>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n			<td>";
  foundHelper = helpers.value;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n			<td>";
  foundHelper = helpers.percent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.percent; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "%</td>\n		</tr>\n	";
  return buffer;}

  stack1 = depth0.data;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}
);

// template --- tmpl-MainScreen ---
Handlebars.templates['tmpl-MainScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"MainScreen\">\n	    <div class=\"MainScreen-header\">\n			<div class=\"navbar  navbar-inverse navbar-fixed-top\">\n			  <div class=\"navbar-inner\">\n			    <a class=\"brand\" href=\"#\">EaseJS Demo</a>\n			    <ul class=\"nav\">\n			      <li data-nav=\"Welcome\" class=\"menu active\">Welcome</li>\n			      <li data-nav=\"EaseljsClusterChart\" class=\"menu\">EaseljsClusterChart</li>\n			      <li data-nav=\"EaseljsPieChart\" class=\"menu\">EaseljsPieChart</li>\n			    </ul>\n			  </div>\n			</div>\n	    </div>\n	    <div class=\"MainScreen-main\"></div>\n    </div>";}
);

// template --- tmpl-Welcome ---
Handlebars.templates['tmpl-Welcome'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"Welcome\">\n		<canvas id=\"WelcomeCanvas\" width=\"960\" height=\"80\"></canvas>\n	</div>";}
);
