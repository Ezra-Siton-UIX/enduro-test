define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!DOCTYPE html>\r\n<html dir=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.direction : stack1), depth0))
    + "\" lang=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.language : stack1), depth0))
    + "\" class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.direction : stack1), depth0))
    + "\">\r\n<head>\r\n	<!-- meta -->\r\n"
    + ((stack1 = container.invokePartial(partials.meta,depth0,{"name":"meta","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	<!-- SEO -->\r\n	<title>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.seo : depth0)) != null ? stack1.title : stack1), depth0))
    + " | "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.company_name : stack1), depth0))
    + "</title>\r\n	<meta name=\"description\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.seo : depth0)) != null ? stack1.seo_description : stack1), depth0))
    + "\">\r\n	<meta name=\"keywords\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.seo : depth0)) != null ? stack1.seo_keywords : stack1), depth0))
    + "\">\r\n	<meta name=\"author\" content=\"Ezra Siton\">\r\n	<!-- FB OG -->\r\n	<meta property=\"og:url\" content=\"https://ezra-siton-uix.github.io/\" />\r\n	<meta property=\"og:type\" content=\"website\" />\r\n	<meta property=\"og:title\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.seo : depth0)) != null ? stack1.title : stack1), depth0))
    + " | "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.company_name : stack1), depth0))
    + "\" />\r\n	<meta property=\"og:description\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.seo : depth0)) != null ? stack1.seo_description : stack1), depth0))
    + "\" />\r\n	<meta property=\"og:image\" content=\""
    + alias2(((helper = (helper = helpers.open_graph_image || (depth0 != null ? depth0.open_graph_image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"open_graph_image","hash":{},"data":data}) : helper)))
    + "\"/>\r\n\r\n	<style type=\"text/css\">\r\n"
    + ((stack1 = container.invokePartial(partials["font-face"],depth0,{"name":"font-face","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["clipboard-css"],depth0,{"name":"clipboard-css","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n	html.rtl #en-button {\r\n		font-weight: light;\r\n	}\r\n	html.ltr #heb-button {\r\n		font-weight: light;\r\n	}\r\n\r\n	@media screen and (min-width: 959px) {\r\n		html.rtl #heb-button {\r\n			color: black!important;\r\n		}\r\n		html.ltr #en-button {\r\n			color: black!important;\r\n		}\r\n	}\r\n	</style>\r\n	<!-- UIkit CSS    -->\r\n	<link rel=\"stylesheet\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.CSS : stack1), depth0))
    + "\" />\r\n	<!-- CSS CUSTOM -->\r\n	<link rel=\"stylesheet\" href=\"/assets/css/main.css\">\r\n"
    + ((stack1 = container.invokePartial(partials.google_analytics,depth0,{"name":"google_analytics","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true}); });