define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->\r\n<!-- Global site tag (gtag.js) - Google Analytics -->\r\n<script async src=\"https://www.googletagmanager.com/gtag/js?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.google_analytics : stack1), depth0))
    + "\"></script>\r\n<script>\r\n	window.dataLayer = window.dataLayer || [];\r\n	function gtag(){dataLayer.push(arguments);}\r\n	gtag('js', new Date());\r\n	\r\n	gtag('config', '"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.google_analytics : stack1), depth0))
    + "');\r\n</script>	";
},"useData":true}); });