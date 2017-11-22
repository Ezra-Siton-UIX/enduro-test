define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<div id=\"wrapper\" class=\"uk-offcanvas-content\">\r\n"
    + ((stack1 = container.invokePartial(partials.navbar,depth0,{"name":"navbar","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.offcanvas,depth0,{"name":"offcanvas","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n<script>\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n	// Active state\r\n	function setActive() {\r\n		aObj = document.getElementById('nav-desktop').getElementsByTagName('a');\r\n		currentPath = window.location.pathname;\r\n		for(i=0;i<aObj.length;i++) {\r\n			if(aObj[i].getAttribute('href') == currentPath && aObj[i].parentElement.tagName == 'LI') {\r\n				aObj[i].parentElement.className='uk-active';\r\n			}\r\n		}\r\n	}\r\n	setActive();\r\n\r\n	// Set lan buttons\r\n	let englishhPath =  currentPath.replace(/he/, \"en\");\r\n	let hebrewPath = currentPath.replace(/en/, \"he\");\r\n	document.getElementById('heb-button').href = hebrewPath;\r\n	document.getElementById('en-button').href = englishhPath;\r\n\r\n	// Active state\r\n	function setActive2() {\r\n		aObj = document.getElementById('nav-mobile').getElementsByTagName('a');\r\n		currentPath = window.location.pathname;\r\n		for(i=0;i<aObj.length;i++) {\r\n			if(aObj[i].getAttribute('href') == currentPath && aObj[i].parentElement.tagName == 'LI') {\r\n				aObj[i].parentElement.className='uk-active';\r\n			}\r\n		}\r\n	}\r\n	setActive2();\r\n\r\n\r\n	// Active state\r\n	function setActive3() {\r\n		aObj = document.getElementById('footer_nav').getElementsByTagName('a');\r\n		currentPath = window.location.pathname;\r\n		for(i=0;i<aObj.length;i++) {\r\n			if(aObj[i].getAttribute('href') == currentPath && aObj[i].parentElement.tagName == 'LI') {\r\n				aObj[i].parentElement.className='uk-active';\r\n			}\r\n		}\r\n	}\r\n	setActive3();\r\n\r\n\r\n\r\n});\r\n\r\n\r\n</script>\r\n\r\n"
    + ((stack1 = container.invokePartial(partials.clipboard,depth0,{"name":"clipboard","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</body>\r\n</html>\r\n";
},"usePartial":true,"useData":true}); });