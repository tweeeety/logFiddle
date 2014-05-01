var logFiddle = function() { 
    this.css = {
        "width": "100%",
        "height": "12px",
        "line-height": "12px",
        "font-size": "12px",
        "border-bottom": "1px dotted #808080",
        "margin-bottom": "4px",
        "padding-bottom": "2px"
    };
}
logFiddle.prototype.setCss = function(css) {
    this.css = css;
}
logFiddle.prototype.log = function(s) {
    var div = document.createElement("div");
 
    var cssStr = "";
    for ( var key in this.css ) {
        cssStr = cssStr + key + ":" + this.css[key] + ";";
    };
    var str = JSON.stringify(s);
    var textNode = document.createTextNode(str);
    div.setAttribute("style", cssStr);
    div.appendChild(textNode);
    document.body.appendChild(div);
}
logFiddle.prototype.consoleOverride = function() {
    var _this = this;
    console.log = function() {
        this.log.apply(_this, arguments);
    };
}
