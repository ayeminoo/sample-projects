!function n(e,t,r){function o(u,a){if(!t[u]){if(!e[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var s=t[u]={exports:{}};e[u][0].call(s.exports,function(n){var t=e[u][1][n];return o(t?t:n)},s,s.exports,n,e,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(n,e,t){"use strict";var r=n("./test1.js"),o=new r.Point(10,10),i=new r.Point(10,3);console.log(r.Point.distance(i,o))},{"./test1.js":2}],2:[function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();t.Point=function(){function n(e,t){r(this,n),this.x=e,this.y=t}return o(n,null,[{key:"distance",value:function(n,e){var t=n.x-e.x,r=n.y-e.y;return Math.sqrt(t*t+r*r)}}]),n}()},{}]},{},[1]);
//# sourceMappingURL=app.js.map
