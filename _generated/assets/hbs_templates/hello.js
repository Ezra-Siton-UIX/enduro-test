define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<hgroup id=\"hello-world\">\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n\r\n</hgroup>\r\n";
},"usePartial":true,"useData":true}); });