define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "						<li>\r\n							<a itemprop=\"url\" title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\" "
    + ((stack1 = (helpers.ternary || (depth0 && depth0.ternary) || helpers.helperMissing).call(alias3,(depth0 != null ? depth0.new_window : depth0),"target=\"_blank\"",{"name":"ternary","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n							href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">\r\n							"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.is_parent : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</a>\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.is_parent : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "							<svg class=\"uk-margin-small-right uk-margin-small-left\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 16 16\" xml:space=\"preserve\" width=\"8\" height=\"8\"><g class=\"nc-icon-wrapper\" fill=\"#1e87f0\"><path fill=\"#1e87f0\" d=\"M8,12c-0.232,0-0.463-0.08-0.651-0.241l-7.759-6.65L0.892,3.59L8,9.683l7.108-6.093l1.302,1.519l-7.759,6.65 C8.463,11.92,8.232,12,8,12z\"></path></g>\r\n							</svg>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"uk-navbar-dropdown uk-padding-remove-top\">\r\n							<ul class=\"uk-nav uk-navbar-dropdown-nav uk-visible@m\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.portfolio : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!-- end each portfolio -->\r\n							</ul>\r\n						</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "								<li>\r\n									<a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">\r\n										"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n									</a>\r\n								</li>\r\n								";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!-- NAV -->\r\n<nav  class=\"tm-header-transparent2\" itemscope itemtype=\"http://schema.org/SiteNavigationElement\">\r\n	<div class=\"uk-navbar-container uk-navbar-transparent\" data-uk-sticky2=\"animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-light; cls-inactive: uk-navbar-transparent2 uk-dark; top: 200; show-on-up: false\" style=\"background: white;\">\r\n		<div class=\"uk-container uk-container-large\">\r\n			<div class=\"uk-navbar\" data-uk-navbar=\"dropbar:true; mode: click; delay-hide: 500\">\r\n				<!--LOGO -->\r\n				<a title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.breadcrumbs_back_to_main : stack1), depth0))
    + "\" class=\"uk-navbar-item uk-logo  uk-visible@m uk-margin-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.left_on_rtl_right_on_ltr : stack1), depth0))
    + " uk-text-primary\" href=\"/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.language : stack1), depth0))
    + "/\">\r\n					<span class=\"\">\r\n						"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.company_name : stack1), depth0))
    + "\r\n					</span>\r\n				</a>\r\n				<!-- NAV PART I -->\r\n				<div class=\"uk-navbar-center uk-margin-small-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.right_on_rtl_left_on_ltr : stack1), depth0))
    + "\">\r\n					<ul id=\"nav-desktop\" class=\"uk-navbar-nav uk-visible@m\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.mainmenu : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\r\n			</div>\r\n\r\n			<!-- side selecr: r/l/center -->\r\n			<div class=\"uk-navbar-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.left_on_rtl_right_on_ltr : stack1), depth0))
    + " uk-visible@m\">\r\n				<ul class=\"uk-navbar-nav \">\r\n					<li>\r\n						<a id=\"heb-button\" href=\"/he\">עברית</a>\r\n					</li>\r\n					<li>\r\n						<a id=\"en-button\" href=\"/en\">English</a>\r\n					</li>\r\n				</ul>\r\n			</div>\r\n			<!-- toogle icon visible only on phones -->\r\n			<div class=\"uk-navbar-right  uk-hidden@m\" style=\"direction: rtl;\">\r\n				<a class=\"uk-navbar-toggle\" href=\"#\" data-uk-toggle=\"target:#offcanvas-nav-primary\">\r\n					<span data-uk-navbar-toggle-icon></span>\r\n					<span class=\"uk-margin-small-right\">\r\n						&nbsp; "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.menu : stack1), depth0))
    + "\r\n					</span>\r\n				</a>\r\n			</div>\r\n			<div class=\"uk-navbar-left uk-hidden@m uk-position-absolute uk-position-left\">\r\n				<a class=\"uk-navbar-item uk-logo\" href=\"/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.language : stack1), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.company_name : stack1), depth0))
    + "</a>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n</nav>\r\n";
},"useData":true}); });