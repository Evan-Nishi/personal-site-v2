(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var o=i(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,i=void 0!==r&&r,o=t.hasQuery;return n||i&&(void 0!==o&&o)}e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))}},"0iUn":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),i=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};i(e,"__esModule",{value:!0});var a=o(n("q1tI")),u=o(n("Xuae")),c=n("lwAK"),s=n("FYa8"),f=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var p=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,i={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var f=p[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],d=i[f]||new r;d.has(l)?a=!1:(d.add(l),i[f]=d)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var h=u.default();function m(t){var e=t.children;return a.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=h.rewind,e.default=m},"8iia":function(t,e,n){var r=n("QMMT"),i=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),i=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),i=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},Lnxd:function(t,e,n){"use strict";var r=n("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n};function c(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return r.createElement(e.tag,a({key:n},e.attr),t(e.child))}))}(t.child))}}function s(t){var e=function(e){var n,i=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var o=t.attr,c=t.title,s=u(t,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:n,style:a({color:t.color||e.color},e.style,t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}n.d(e,"a",(function(){return c}))},MI3g:function(t,e,n){"use strict";var r=n("XVgq"),i=n.n(r),o=n("Z7t5"),a=n.n(o);function u(t){return(u="function"===typeof a.a&&"symbol"===typeof i.a?function(t){return typeof t}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t})(t)}function c(t){return(c="function"===typeof a.a&&"symbol"===u(i.a)?function(t){return u(t)}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":u(t)})(t)}function s(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return s}))},PQJW:function(t,e,n){var r=n("d04V"),i=n("yLu3");t.exports=function(t){if(i(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TbGu:function(t,e,n){var r=n("fGSI"),i=n("PQJW"),o=n("2PDY");t.exports=function(t){return r(t)||i(t)||o()}},Tit0:function(t,e,n){"use strict";var r=n("SqZg"),i=n.n(r),o=n("TRZx"),a=n.n(o);function u(t,e){return(u=a.a||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=i()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}n.d(e,"a",(function(){return c}))},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),i=n("Y7ZC"),o=n("JB68"),a=n("sNwI"),u=n("NwJ3"),c=n("tEej"),s=n("IP1Z"),f=n("fNZA");i(i.S+i.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,d=o(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,_=f(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==_||p==Array&&u(_))for(n=new p(e=c(d.length));e>y;y++)s(n,y,m?h(d[y],y):d[y]);else for(l=_.call(d),n=new p;!(i=l.next()).done;y++)s(n,y,m?a(l,h,[i.value,y],!0):i.value);return n.length=y,n}})},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),a=n("2GTP"),u=n("EXMj"),c=n("oioR"),s=n("MPFp"),f=n("UO39"),l=n("TJWN"),d=n("jmDH"),p=n("6/1s").fastKey,v=n("n3ko"),h=d?"_s":"size",m=function(t,e){var n,r=p(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t((function(t,r){u(t,f,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&c(r,n,t[s],t)}));return o(f.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var n=v(this,e),r=m(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[h]--}return!!r},forEach:function(t){v(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(v(this,e),t)}}),d&&r(f.prototype,"size",{get:function(){return v(this,e)[h]}}),f},def:function(t,e,n){var r,i,o=m(t,e);return o?o.v=n:(t._l=o={i:i=p(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[h]++,"F"!==i&&(t._i[i]=o)),t},getEntry:m,setStrong:function(t,e,n){s(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(e)}}},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),i=n("ZDA2"),o=n("/+P4"),a=n("K47E"),u=n("WaGi"),c=n("N9n2"),s=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),d=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){function f(t){var u;return r(this,f),u=i(this,o(f).call(this,t)),d&&(e.add(a(u)),n(a(u))),u}return c(f,s),u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},a7VT:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("Bhuq"),i=n.n(r),o=n("TRZx"),a=n.n(o);function u(t){return(u=a.a?i.a:function(t){return t.__proto__||i()(t)})(t)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var o=i(n("q1tI"));e.AmpStateContext=o.createContext({})},sLSF:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hfKm"),i=n.n(r);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},soUV:function(t,e,n){"use strict";var r=n("0iUn"),i=n("sLSF"),o=n("MI3g"),a=n("a7VT"),u=n("Tit0"),c=n("q1tI"),s=n.n(c),f=n("8Kt/"),l=n.n(f),d=n("ma3e"),p=s.a.createElement,v=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return p("div",{id:"Footer"},p("h4",null,"Made with \u2665 and \ud83c\udf75 by Evan Nishi"),p("a",{href:"https://github.com/Evan-Nishi"},p(d.b,{size:"4em",className:"icon"})),p("a",{href:"mailto:evan@evannishi.me"},p(d.a,{size:"4em",className:"icon"})),p("a",{href:"https://www.linkedin.com/in/evan-nishi-804a85183/"},p(d.c,{size:"4em",className:"icon"})),p("br",{className:"spacer"}))}}]),e}(s.a.Component);n.d(e,"a",(function(){return m}));var h=s.a.createElement,m=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return h("div",{id:"page"},h(l.a,null,h("title",null,"Evan Nishi"),h("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"}),h("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),h("meta",{name:"og:title",content:"Evan Nishi"}),h("meta",{name:"og:description",content:"Evan Nishi"})),h("div",{style:{position:"absolute",top:0,left:0,width:"100vw"}},h("br",null),h("div",{id:"content"},this.props.children),h(v,null)))}}]),e}(s.a.Component)},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")}}]);