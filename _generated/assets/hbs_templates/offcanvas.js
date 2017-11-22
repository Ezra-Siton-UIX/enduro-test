define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.lambda, alias4=container.escapeExpression;

  return "				<li "
    + ((stack1 = (helpers.ternary || (depth0 && depth0.ternary) || alias2).call(alias1,(depth0 != null ? depth0.is_parent : depth0),"class=\"uk-parent uk-open\"",{"name":"ternary","hash":{},"data":data})) != null ? stack1 : "")
    + ">\r\n					<a itemprop=\"url\" title=\""
    + alias4(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\" data-uk-tooltip=\"pos: left\" "
    + ((stack1 = (helpers.ternary || (depth0 && depth0.ternary) || alias2).call(alias1,(depth0 != null ? depth0.new_window : depth0),"target=\"_blank\"",{"name":"ternary","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n					href=\""
    + alias4(alias3((depth0 != null ? depth0.link : depth0), depth0))
    + "\">\r\n					"
    + alias4(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n				</a>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_parent : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<ul class=\"uk-nav-sub\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.portfolio : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!-- end each portfolio -->\r\n				</ul>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "					<li>\r\n						<a title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\"  data-uk-tooltip=\"pos: left\" href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">\r\n							- "
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n						</a>\r\n					</li>\r\n					";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\r\n<!-- OFF CANVAS -->\r\n<nav  itemscope itemtype=\"http://schema.org/SiteNavigationElement\">\r\n	<!--off-canvas btn show only on mobile -->\r\n	<div id=\"offcanvas-nav-primary\" data-uk-offcanvas=\"overlay: true; mode: slide; flip: false\">\r\n		<div class=\"uk-offcanvas-bar uk-flex uk-flex-column\">\r\n			<!-- navbar content her -->\r\n\r\n			<div>\r\n				<img style=\"width:auto;\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.company_name : stack1), depth0))
    + "\" itemprop=\"image\" class=\"uk-border-circle\" src=\"/assets/img/ezra-siton-profile-image/ezra-siton-profile-image-small.jpg\">\r\n			</div>\r\n\r\n			<!-- A - logo -->\r\n			<a class=\" uk-logo uk-margin-small-top\" href=\"/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.language : stack1), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.company_name : stack1), depth0))
    + "</a>\r\n			<!-- B - nav -->\r\n\r\n\r\n			<ul id=\"nav-mobile\" class=\"uk-nav uk-nav-default uk-margin-top uk-nav-parent-icon\" data-uk-nav role=\"navigation\" itemscope itemtype=\"http://schema.org/SiteNavigationElement\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.mainmenu : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\r\n\r\n		<ul class=\"uk-nav uk-nav-default uk-margin-top\">\r\n			<li class=\"uk-nav-divider\"></li>\r\n			<li>\r\n				<a id=\"heb-button\" href=\"/he\">עברית</a>\r\n			</li>\r\n			<li>\r\n				<a id=\"en-button\" href=\"/en\">English</a>\r\n			</li>\r\n		</ul>\r\n\r\n		<!--contact us -->\r\n		<div class=\"uk-margin-large-top\">\r\n			<hr>\r\n			<svg style=\"opacity: 0.7;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewbox=\"0 0 48 48\">\r\n				<g class=\"nc-icon-wrapper\" fill=\"#ffffff\">\r\n					<path d=\"M31 2H15c-2.76 0-5 2.24-5 5v34c0 2.76 2.24 5 5 5h16c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm-8 42c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-8H14V8h18v28z\"></path>\r\n				</g>\r\n			</svg>\r\n			&nbsp;\r\n			"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.phone : stack1)) != null ? stack1.heading : stack1), depth0))
    + ":\r\n			<a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.phone : stack1)) != null ? stack1.number : stack1), depth0))
    + "\" class=\"uk-link-text\">\r\n				"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.phone : stack1)) != null ? stack1.number : stack1), depth0))
    + "\r\n			</a>\r\n		</div>\r\n	</div>\r\n</div>\r\n</nav>\r\n";
},"useData":true}); });