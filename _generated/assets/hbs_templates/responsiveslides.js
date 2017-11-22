define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script>\r\ndocument.addEventListener(\"DOMContentLoaded\",function(){!function(n,t,e){n.fn.responsiveSlides=function(a){var s=n.extend({auto:!0,speed:500,timeout:4e3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:\"Previous\",nextText:\"Next\",maxwidth:\"\",navContainer:\"\",manualControls:\"\",namespace:\"rslides\",before:n.noop,after:n.noop},a);return this.each(function(){e++;var o,i,r,l,u,c,d=n(this),f=0,p=d.children(),h=p.length,v=parseFloat(s.speed),m=parseFloat(s.timeout),C=parseFloat(s.maxwidth),x=s.namespace,b=x+e,y=x+\"_nav \"+b+\"_nav\",g=x+\"_here\",w=b+\"_on\",_=b+\"_s\",I=n(\"<ul class='\"+x+\"_tabs \"+b+\"_tabs' />\"),q={float:\"left\",position:\"relative\",opacity:1,zIndex:2},z={float:\"none\",position:\"absolute\",opacity:0,zIndex:1},T=function(){var n=(document.body||document.documentElement).style;if(\"string\"==typeof n[e=\"transition\"])return!0;o=[\"Moz\",\"Webkit\",\"Khtml\",\"O\",\"ms\"];var t,e=e.charAt(0).toUpperCase()+e.substr(1);for(t=0;t<o.length;t++)if(\"string\"==typeof n[o[t]+e])return!0;return!1}(),k=function(t){s.before(t),T?(p.removeClass(w).css(z).eq(t).addClass(w).css(q),f=t,setTimeout(function(){s.after(t)},v)):p.stop().fadeOut(v,function(){n(this).removeClass(w).css(z).css(\"opacity\",1)}).eq(t).fadeIn(v,function(){n(this).addClass(w).css(q),s.after(t),f=t})};if(s.random&&(p.sort(function(){return Math.round(Math.random())-.5}),d.empty().append(p)),p.each(function(n){this.id=_+n}),d.addClass(x+\" \"+b),a&&a.maxwidth&&d.css(\"max-width\",C),p.hide().css(z).eq(0).addClass(w).css(q).show(),T&&p.show().css({\"-webkit-transition\":\"opacity \"+v+\"ms ease-in-out\",\"-moz-transition\":\"opacity \"+v+\"ms ease-in-out\",\"-o-transition\":\"opacity \"+v+\"ms ease-in-out\",transition:\"opacity \"+v+\"ms ease-in-out\"}),1<p.length){if(m<v+100)return;if(s.pager&&!s.manualControls){var M=[];p.each(function(n){M+=\"<li><a href='#' class='\"+_+(n+=1)+\"'>\"+n+\"</a></li>\"}),I.append(M),a.navContainer?n(s.navContainer).append(I):d.after(I)}if(s.manualControls&&(I=n(s.manualControls)).addClass(x+\"_tabs \"+b+\"_tabs\"),(s.pager||s.manualControls)&&I.find(\"li\").each(function(t){n(this).addClass(_+(t+1))}),(s.pager||s.manualControls)&&(c=I.find(\"a\"),i=function(n){c.closest(\"li\").removeClass(g).eq(n).addClass(g)}),s.auto&&(r=function(){u=setInterval(function(){p.stop(!0,!0);var n=f+1<h?f+1:0;(s.pager||s.manualControls)&&i(n),k(n)},m)})(),l=function(){s.auto&&(clearInterval(u),r())},s.pause&&d.hover(function(){clearInterval(u)},function(){l()}),(s.pager||s.manualControls)&&(c.bind(\"click\",function(t){t.preventDefault(),s.pauseControls||l(),t=c.index(this),f===t||n(\".\"+w).queue(\"fx\").length||(i(t),k(t))}).eq(0).closest(\"li\").addClass(g),s.pauseControls&&c.hover(function(){clearInterval(u)},function(){l()})),s.nav){x=\"<a href='#' class='\"+y+\" prev'>\"+s.prevText+\"</a><a href='#' class='\"+y+\" next'>\"+s.nextText+\"</a>\",a.navContainer?n(s.navContainer).append(x):d.after(x);var D=(b=n(\".\"+b+\"_nav\")).filter(\".prev\");b.bind(\"click\",function(t){if(t.preventDefault(),!(t=n(\".\"+w)).queue(\"fx\").length){var e=p.index(t);t=e-1,e=e+1<h?f+1:0,k(n(this)[0]===D[0]?t:e),(s.pager||s.manualControls)&&i(n(this)[0]===D[0]?t:e),s.pauseControls||l()}}),s.pauseControls&&b.hover(function(){clearInterval(u)},function(){l()})}}if(void 0===document.body.style.maxWidth&&a.maxwidth){var F=function(){d.css(\"width\",\"100%\"),d.width()>C&&d.css(\"width\",C)};F(),n(t).bind(\"resize\",function(){F()})}})}}(jQuery,this,0),$(function(){$(\".rslides\").responsiveSlides()})});					\r\n</script>					\r\n						\r\n						\r\n		";
},"useData":true}); });