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

// template --- tmpl-MainScreen ---
Handlebars.templates['tmpl-MainScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"MainScreen\">\n	    <div class=\"MainScreen-header\">\n			<div class=\"navbar  navbar-inverse navbar-fixed-top\">\n			  <div class=\"navbar-inner\">\n			    <a class=\"brand\" href=\"#\">EaseJS Demo</a>\n			    <ul class=\"nav\">\n			      <li data-nav=\"Welcome\" class=\"menu active\">Welcome</li>\n			      <li data-nav=\"EaseljsClusterChart\" class=\"menu\">EaseljsClusterChart</li>\n			    </ul>\n			  </div>\n			</div>\n	    </div>\n	    <div class=\"MainScreen-main\"></div>\n    </div>";}
);

// template --- tmpl-Welcome ---
Handlebars.templates['tmpl-Welcome'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"Welcome\">\n		<canvas id=\"WelcomeCanvas\" width=\"960\" height=\"80\"></canvas>\n	</div>";}
);
