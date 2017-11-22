define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "					<li class=\"uk-margin-small-bottom\">\r\n						<a itemprop=\"sameAs\" target=\"_blank\" href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.heading : depth0), depth0))
    + "</a>\r\n					</li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.lambda, alias4=container.escapeExpression;

  return "						<li "
    + ((stack1 = (helpers.ternary || (depth0 && depth0.ternary) || alias2).call(alias1,(depth0 != null ? depth0.is_parent : depth0),"class=\"uk-par3ent uk-3open\"",{"name":"ternary","hash":{},"data":data})) != null ? stack1 : "")
    + ">\r\n							<a itemprop=\"url\" title=\""
    + alias4(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\" data-uk-tooltip=\"pos: left\" "
    + ((stack1 = (helpers.ternary || (depth0 && depth0.ternary) || alias2).call(alias1,(depth0 != null ? depth0.new_window : depth0),"target=\"_blank\"",{"name":"ternary","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n							href=\""
    + alias4(alias3((depth0 != null ? depth0.link : depth0), depth0))
    + "\">\r\n							"
    + alias4(alias3((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n						</a>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_parent : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<ul class=\"uk-nav-sub\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.portfolio : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!-- end each portfolio -->\r\n						</ul>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "							<li>\r\n								<a title=\""
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\"  data-uk-tooltip=\"pos: left\" href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">\r\n									"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "\r\n								</a>\r\n							</li>\r\n							";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!-- FOOTER -->\r\n<footer itemscope itemtype=\"http://schema.org/WPFooter\" class=\" uk-visible@m uk-section uk-section-secondary uk-section-medium uk-padding-remove-bottom\">\r\n	<div itemscope itemtype=\"http://schema.org/ProfessionalService\" class=\"uk-container uk-container-large\">\r\n		<div class=\"uk-grid uk-grid-divider uk-grid-large uk-margin-large-bottom\" data-uk-grid=\"\" data-uk-scrollspy=\"target: > div; cls:uk-animation-slide-bottom-medium; delay: 50; offset-top:0; repeat: false\">\r\n			<div class=\"uk-width-expand@m uk-width-1-2@s\">\r\n				<img alt=\"עזרא סיטון - תמונת פרופיל\" itemprop=\"image\" class=\"uk-border-circle\" src=\"/assets/img/ezra-siton-profile-image/ezra-siton-profile-image-small.jpg\">\r\n				<a href=\"/"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.language : stack1), depth0))
    + "/\"><h2 itemprop=\"name\" class=\"uk-text-bold uk-margin-small\">\r\n					"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.company_name : stack1), depth0))
    + "\r\n				</h2></a>\r\n				<p itemprop=\"description\" class=\"uk-margin-small uk-width-xlarge\">\r\n					"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.description : stack1), depth0))
    + "\r\n				</p>\r\n				<h3 class=\"uk-margin-remove-bottom uk-margin-top uk-text-small\">\r\n					"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.social_heading : stack1), depth0))
    + "\r\n				</h3>\r\n\r\n				<ul class=\"uk-subnav uk-subnav-divider\">\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.social_networks : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\r\n			</div>\r\n\r\n			<!-- sitemap -->\r\n			<div class=\"uk-width-expand@m uk-width-1-2@s\">\r\n				<h3 class=\"uk-h3\">\r\n					"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.sitemap : stack1), depth0))
    + "\r\n				</h3>\r\n\r\n				<nav id=\"footer_nav\">\r\n					<ul class=\"uk-nav uk-nav-default uk-nav-parent-icon\" data-uk-3nav role=\"navigation\" itemscope itemtype=\"http://schema.org/SiteNavigationElement\">\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.mainmenu : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\r\n			</nav>\r\n\r\n\r\n\r\n		</div>\r\n\r\n		<div class=\"uk-width-expand@m uk-width-1-2@s\">\r\n			<h3 class=\"uk-h3\">\r\n				"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.heading : stack1), depth0))
    + "\r\n			</h3>\r\n			<ul class=\"uk-list uk-list-divider\">\r\n				<li>\r\n					<h4 class=\"uk-margin-small-bottom\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewbox=\"0 0 16 16\" xml:space=\"preserve\" width=\"13\" height=\"13\">\r\n						<g class=\"nc-icon-wrapper\" fill=\"#ffffff\">\r\n							<path fill=\"#ffffff\" d=\"M8,0C4.1,0,1,3.1,1,7c0,1.9,0.7,3.7,2.1,5c0.1,0.1,4.1,3.7,4.2,3.8c0.4,0.3,1,0.3,1.3,0 c0.1-0.1,4.2-3.7,4.2-3.8c1.4-1.3,2.1-3.1,2.1-5C15,3.1,11.9,0,8,0z M8,9C6.9,9,6,8.1,6,7s0.9-2,2-2c1.1,0,2,0.9,2,2S9.1,9,8,9z\"></path>\r\n						</g>\r\n					</svg>\r\n					"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.heading : stack1), depth0))
    + "\r\n				</h4>\r\n				<address class=\"uk-margin-remove\" itemprop=\"address\" itemscope itemtype=\"http://schema.org/PostalAddress\">\r\n					<strong itemprop=\"name\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.name : stack1), depth0))
    + "</strong> -\r\n					<span itemprop=\"streetAddress\">\r\n						"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.streetAddress : stack1), depth0))
    + "\r\n					</span>,\r\n					<span itemprop=\"addressLocality\">\r\n						"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.city : stack1), depth0))
    + "\r\n					</span>,\r\n					<span itemprop=\"postalCode\">\r\n						"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.postalCode : stack1), depth0))
    + "\r\n					</span>.\r\n					<span itemscope itemtype=\"http://schema.org/Place\">\r\n						<a class=\"uk-link\" title=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.googleMap_btn_text : stack1), depth0))
    + "\" itemprop=\"hasMap\" href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.googleMap_href : stack1), depth0))
    + "\" target=\"_blank\">\r\n							"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.googleMap_btn_text : stack1), depth0))
    + "\r\n						</a>\r\n					</span>\r\n				</address>\r\n				<div itemtype=\"http://schema.org/GeoCoordinates\" itemscope=\"\" itemprop=\"geo\">\r\n					<meta itemprop=\"latitude\" content=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.latitude : stack1), depth0))
    + "\" />\r\n					<meta itemprop=\"longitude\" content=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address : stack1)) != null ? stack1.longitude : stack1), depth0))
    + "\" />\r\n				</div>\r\n			</li>\r\n			<li>\r\n				<h4 class=\"uk-margin-remove-top uk-margin-remove-bottom\">\r\n					<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" xml:space=\"preserve\" width=\"13\" height=\"13\"><g class=\"nc-icon-wrapper\" fill=\"#ffffff\"><path fill=\"#ffffff\" d=\"M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M19,13h-8V5h2v6h6V13z\"></path></g></svg>\r\n					"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.opening_hours : stack1)) != null ? stack1.heading : stack1), depth0))
    + "\r\n				</h4>\r\n				<p class=\"uk-margin-small\">\r\n					<span itemprop=\"openingHours\" content=\"Mo,Tu,We,Th,Fr 09:00-18:00\">\r\n						"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.opening_hours : stack1)) != null ? stack1.hours : stack1), depth0))
    + "\r\n					</span>\r\n				</p>\r\n			</li>\r\n			<li>\r\n				<h4 class=\"uk-margin-small-bottom\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewbox=\"0 0 16 16\" xml:space=\"preserve\" width=\"13\" height=\"13\">\r\n					<g class=\"nc-icon-wrapper\" fill=\"#ffffff\">\r\n						<path fill=\"#ffffff\" d=\"M15.285,12.305l-2.578-2.594c-0.39-0.393-1.025-0.393-1.416-0.002L9,12L4,7l2.294-2.294 c0.39-0.39,0.391-1.023,0.001-1.414l-2.58-2.584C3.324,0.317,2.691,0.317,2.3,0.708L0.004,3.003L0,3c0,7.18,5.82,13,13,13 l2.283-2.283C15.673,13.327,15.674,12.696,15.285,12.305z\"></path>\r\n						<path data-color=\"color-2\" fill=\"#ffffff\" d=\"M16,8h-2c0-3.309-2.691-6-6-6V0C12.411,0,16,3.589,16,8z\"></path>\r\n						<path data-color=\"color-2\" fill=\"#ffffff\" d=\"M12,8h-2c0-1.103-0.897-2-2-2V4C10.206,4,12,5.794,12,8z\"></path>\r\n					</g>\r\n				</svg>\r\n				"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.phone : stack1)) != null ? stack1.heading : stack1), depth0))
    + "\r\n			</h4>\r\n			<a href=\"tel:	"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.phone : stack1)) != null ? stack1.number : stack1), depth0))
    + "\" class=\"uk-margin\"><span itemprop=\"telephone\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.phone : stack1)) != null ? stack1.number : stack1), depth0))
    + "</span></a>\r\n		</li>\r\n		<li>\r\n			<h4 class=\"uk-margin-small-bottom\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewbox=\"0 0 16 16\" xml:space=\"preserve\" width=\"13\" height=\"13\">\r\n				<g class=\"nc-icon-wrapper\" fill=\"#ffffff\">\r\n					<path data-color=\"color-2\" fill=\"#ffffff\" d=\"M15,1H1C0.4,1,0,1.4,0,2v1.4l8,4.5l8-4.4V2C16,1.4,15.6,1,15,1z\"></path>\r\n					<path fill=\"#ffffff\" d=\"M7.5,9.9L0,5.7V14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V5.7L8.5,9.9C8.22,10.04,7.78,10.04,7.5,9.9z\"></path>\r\n				</g>\r\n			</svg>\r\n			"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.email : stack1)) != null ? stack1.heading : stack1), depth0))
    + "\r\n		</h4>\r\n		<!-- Target -->\r\n		<a id=\"email\" class=\"uk-display-inline-block\" itemprop=\"email\" href=\"mailto:"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.email : stack1)) != null ? stack1.address : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.email : stack1)) != null ? stack1.address : stack1), depth0))
    + "</a>\r\n		<!-- Trigger -->\r\n		<button id=\"email-copy-btn\" class=\"uk-button uk-button-primary uk-button-small uk-margin-small-right uk-margin-left\" data-clipboard-target=\"#email\">\r\n			"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.email : stack1)) != null ? stack1.copy_btn : stack1), depth0))
    + "\r\n		</button>\r\n		<div>&nbsp;<span class=\"copied\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.email : stack1)) != null ? stack1.copied : stack1), depth0))
    + "</span></div>\r\n	</li>\r\n</ul>\r\n</div>\r\n</div>\r\n<!-- END grid -->\r\n<!-- LOGOS -->\r\n<a class=\"uk-link-reset\" href=\"https://www.endurojs.com/\" target=\"_blank\">\r\n	<img src=\"/assets/img/webdesign/logos/enduro-nodejs-cms.png\" alt=\"Enduro.js CMS logo\">\r\n</a>&nbsp;\r\n<a class=\"uk-link-reset\" href=\"https://getuikit.com/\" target=\"_blank\" style=\"direction: ltr;\">\r\n	<div class=\"uk-display-inline-block\" style=\"direction: ltr;\">\r\n		<img src=\"/assets/img/webdesign/logos/uikit-logo-white.svg\" alt=\"לוגו של הפריימוורק לבניית אתרים - uiKit\">\r\n		<span> UIkit</span>\r\n	</div>\r\n</a>\r\n<div class=\"\">\r\n	<p class=\"uk-text-center uk-text-small\">\r\n		"
    + ((stack1 = alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.copyrights : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\r\n	</p>\r\n</div>\r\n</div><!--end conatiner -->\r\n<!-- UP BTN -->\r\n<div title=\"TOP\" data-uk-tooltip=\"pos: top-center\">\r\n	<a href=\"#\" data-uk-scroll=\"\">\r\n		<div class=\"uk-section uk-section-primary uk-section-small uk-text-center\">\r\n			<div class=\"uk-button uk-button-default uk-button-large uk-icon\">\r\n				"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.back_to_top_title : stack1), depth0))
    + "\r\n				<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewbox=\"0 0 24 24\" xml:space=\"preserve\" width=\"24\" height=\"24\">\r\n					<g class=\"nc-icon-wrapper\" fill=\"#ffffff\">\r\n						<line data-cap=\"butt\" data-color=\"color-2\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"12\" y1=\"22\" x2=\"12\" y2=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"butt\"></line>\r\n						<polyline fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" points=\"5,9 12,2 19,9 \" stroke-linejoin=\"miter\"></polyline>\r\n					</g>\r\n				</svg>\r\n			</div>\r\n		</div>\r\n	</a>\r\n</div>\r\n</footer>\r\n<!-- MOBILE FOOTER -->\r\n<footer id=\"mobile-footer\" class=\"uk-hidden@m uk-light uk-padding-small uk-section-secondary\">\r\n	<div class=\" uk-margin-auto uk-flex uk-flex-center\">\r\n		<!-- Mobile menu - less links! -->\r\n		<ul class=\"uk-subnav uk-subnav-divider\" data-uk-margin=\"\">\r\n			<li class=\"uk-active\">\r\n				<a href=\"/\">בית</a>\r\n			</li>\r\n			<li>\r\n				<a href=\"/about\">אודות</a>\r\n			</li>\r\n			<li>\r\n				<a href=\"/portfolio\">תיק עבודות</a>\r\n			</li>\r\n			<li>\r\n				<a href=\"/contact\">צור קשר</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<!-- TOP BTN -->\r\n	<div title=\"TOP\" data-uk-tooltip=\"pos: top-center\">\r\n		<a href=\"#\" data-uk-scroll=\"\">\r\n			<div class=\"uk-section uk-section-secondary uk-section-small uk-text-center\">\r\n				<div class=\"uk-button uk-button-default uk-button-large uk-icon\">\r\n					"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.back_to_top_title : stack1), depth0))
    + "\r\n					<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewbox=\"0 0 24 24\" xml:space=\"preserve\" width=\"24\" height=\"24\">\r\n						<g class=\"nc-icon-wrapper\" fill=\"#ffffff\">\r\n							<line data-cap=\"butt\" data-color=\"color-2\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"12\" y1=\"22\" x2=\"12\" y2=\"2\" stroke-linejoin=\"miter\" stroke-linecap=\"butt\"></line>\r\n							<polyline fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" points=\"5,9 12,2 19,9 \" stroke-linejoin=\"miter\"></polyline>\r\n						</g>\r\n					</svg>\r\n				</div>\r\n			</div>\r\n		</a>\r\n	</div>\r\n	<!-- copyrights -->\r\n	<p class=\"uk-text-center uk-text-small uk-hidden@m uk-margin-remove\"><small>\r\n		&copy;\r\n		כל הזכויות ל-<a  title=\"עזרא סיטון\" href=\"/"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.language : stack1), depth0))
    + "/\">עזרא סיטון</a>\r\n		,\r\n		2018</small></p>\r\n	</footer>\r\n	<!-- /end FOOTER -->\r\n";
},"useData":true}); });