define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\r\n<!-- ZIGZAG -->\r\n<section class=\"uk-section uk-section-primary uk-section-large uk-position-relative\">\r\n	<div class=\"uk-container uk-container-large\">\r\n		<div class=\"uk-grid uk-grid-large\" data-uk-grid>\r\n			<div class=\"uk-width-1-2 uk-visible@l uk-position-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.left_on_rtl_right_on_ltr : stack1), depth0))
    + " uk-background-cover\" style=\"background-image: url("
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.zigzag : depth0)) != null ? stack1.img : stack1)) != null ? stack1.src : stack1), depth0))
    + ");\"\r\n			data-uk-parallax=\"opacity: 0,1; viewport: 0.5\">\r\n		</div>\r\n		<div class=\"uk-width-1-1\">\r\n			<img class=\"uk-hidden@l\" alt=\"zigzag.img.alt\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.zigzag : depth0)) != null ? stack1.img : stack1)) != null ? stack1.src : stack1), depth0))
    + "\">\r\n		</div>\r\n		<div class=\"uk-width-1-2@l\">\r\n			<div class=\"st-text-light uk-text-large uk-text-danger uk-text-center uk-text-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.right_on_rtl_left_on_ltr : stack1), depth0))
    + "@m uk-scrollspy-inview uk-animation-slide-top-small\" data-uk-scrollspy=\" cls:uk-animation-slide-top-small; offset-top:50\" style=\"\">\r\n				"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.zigzag : depth0)) != null ? stack1.teaser : stack1), depth0))
    + "\r\n			</div>\r\n			<h2 class=\"uk-h1 st-header uk-heading-divider uk-margin-small uk-margin-remove-adjacent uk-text-center uk-text-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.right_on_rtl_left_on_ltr : stack1), depth0))
    + "@m uk-scrollspy-inview uk-animation-slide-top-small\">\r\n				"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.zigzag : depth0)) != null ? stack1.heading : stack1), depth0))
    + "\r\n			</h2>\r\n				"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.zigzag : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\r\n			<a href=\"/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.language : stack1), depth0))
    + "/contact\">\r\n				צור קשר\r\n			</a>\r\n		</div>\r\n	</div>\r\n</div>\r\n</section>\r\n";
},"useData":true}); });