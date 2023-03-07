(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['country'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"country-info__list\">\r\n    <li class=\"country-info__item\">\r\n        <img src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"flag") : depth0), depth0))
    + " alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + " flag\">\r\n        <p>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\r\n    </li>\r\n    <li>\r\n        <p class=\"country-info__text\"><span>Capital: </span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"capital") : depth0), depth0))
    + "</p>\r\n    </li>\r\n    <li>\r\n        <p class=\"country-info__text\"><span>Population: </span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"population") : depth0), depth0))
    + "</p>\r\n    </li>\r\n    <li>\r\n        <p class=\"country-info__text\">\r\n            <span>Languages: </span>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"languages") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":21}}})) != null ? stack1 : "")
    + "        </p>\r\n    </li>\r\n</ul>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":24}}}) : helper)))
    + ", \r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":22,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();