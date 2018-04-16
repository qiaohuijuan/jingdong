!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(Y){var o,t=function(){var u,a,c,r,s,n,i=[],o=i.concat,l=i.filter,f=i.slice,h=Y.document,p={},e={},d={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,g=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,y=/^(?:body|html)$/i,x=/([A-Z])/g,b=["val","css","html","text","data","width","height","offset"],t=h.createElement("table"),w=h.createElement("tr"),E={tr:h.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:w,th:w,"*":h.createElement("div")},T=/complete|loaded|interactive/,S=/^[\w-]*$/,j={},C=j.toString,N={},P=h.createElement("div"),O={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},M=Array.isArray||function(t){return t instanceof Array};function D(t){return null==t?String(t):j[C.call(t)]||"object"}function A(t){return"function"==D(t)}function L(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==D(t)}function F(t){return R(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function k(t){var e=!!t&&"length"in t&&t.length,n=c.type(t);return"function"!=n&&!L(t)&&("array"==n||0===e||"number"==typeof e&&0<e&&e-1 in t)}function Z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function z(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function q(t,e){return"number"!=typeof e||d[Z(t)]?e:e+"px"}function H(t){return"children"in t?f.call(t.children):c.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function I(t,e){var n,r=t?t.length:0;for(n=0;n<r;n++)this[n]=t[n];this.length=r,this.selector=e||""}function U(t,e){return null==e?c(t):c(t).filter(e)}function _(t,e,n,r){return A(e)?e.call(t,n,r):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function V(t,e){var n=t.className||"",r=n&&n.baseVal!==u;if(e===u)return r?n.baseVal:n;r?n.baseVal=e:t.className=e}function B(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?c.parseJSON(e):e):e}catch(t){return e}}return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=P).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&P.removeChild(t),r},s=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},n=function(n){return l.call(n,function(t,e){return n.indexOf(t)==e})},N.fragment=function(t,e,n){var r,i,o;return v.test(t)&&(r=c(h.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(g,"<$1></$2>")),e===u&&(e=m.test(t)&&RegExp.$1),e in E||(e="*"),(o=E[e]).innerHTML=""+t,r=c.each(f.call(o.childNodes),function(){o.removeChild(this)})),F(n)&&(i=c(r),c.each(n,function(t,e){-1<b.indexOf(t)?i[t](e):i.attr(t,e)})),r},N.Z=function(t,e){return new I(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,e){var n,r;if(!t)return N.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&m.test(t))n=N.fragment(t,RegExp.$1,e),t=null;else{if(e!==u)return c(e).find(t);n=N.qsa(h,t)}else{if(A(t))return c(h).ready(t);if(N.isZ(t))return t;if(M(t))r=t,n=l.call(r,function(t){return null!=t});else if(R(t))n=[t],t=null;else if(m.test(t))n=N.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==u)return c(e).find(t);n=N.qsa(h,t)}}return N.Z(n,t)},(c=function(t,e){return N.init(t,e)}).extend=function(e){var n,t=f.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,r){for(a in n)r&&(F(n[a])||M(n[a]))?(F(n[a])&&!F(e[a])&&(e[a]={}),M(n[a])&&!M(e[a])&&(e[a]=[]),t(e[a],n[a],r)):n[a]!==u&&(e[a]=n[a])}(e,t,n)}),e},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=S.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:f.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},c.contains=h.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},c.type=D,c.isFunction=A,c.isWindow=L,c.isArray=M,c.isPlainObject=F,c.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},c.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},c.inArray=function(t,e,n){return i.indexOf.call(e,t,n)},c.camelCase=s,c.trim=function(t){return null==t?"":String.prototype.trim.call(t)},c.uuid=0,c.support={},c.expr={},c.noop=function(){},c.map=function(t,e){var n,r,i,o,a=[];if(k(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&a.push(n);else for(i in t)null!=(n=e(t[i],i))&&a.push(n);return 0<(o=a).length?c.fn.concat.apply([],o):o},c.each=function(t,e){var n,r;if(k(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},c.grep=function(t,e){return l.call(t,e)},Y.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),c.fn={constructor:N.Z,length:0,forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,splice:i.splice,indexOf:i.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return o.apply(N.isZ(this)?this.toArray():this,n)},map:function(n){return c(c.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(t){return T.test(h.readyState)&&h.body?t(c):h.addEventListener("DOMContentLoaded",function(){t(c)},!1),this},get:function(t){return t===u?f.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return i.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return A(e)?this.not(this.not(e)):c(l.call(this,function(t){return N.matches(t,e)}))},add:function(t,e){return c(n(this.concat(c(t,e))))},is:function(t){return 0<this.length&&N.matches(this[0],t)},not:function(e){var n=[];if(A(e)&&e.call!==u)this.each(function(t){e.call(this,t)||n.push(this)});else{var r="string"==typeof e?this.filter(e):k(e)&&A(e.item)?f.call(e):c(e);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return c(n)},has:function(t){return this.filter(function(){return R(t)?c.contains(this,t):c(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:c(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:c(t)},find:function(t){var n=this;return t?"object"==typeof t?c(t).filter(function(){var e=this;return i.some.call(n,function(t){return c.contains(t,e)})}):1==this.length?c(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):c()},closest:function(n,r){var i=[],o="object"==typeof n&&c(n);return this.each(function(t,e){for(;e&&!(o?0<=o.indexOf(e):N.matches(e,n));)e=e!==r&&!$(e)&&e.parentNode;e&&i.indexOf(e)<0&&i.push(e)}),c(i)},parents:function(t){for(var e=[],n=this;0<n.length;)n=c.map(n,function(t){if((t=t.parentNode)&&!$(t)&&e.indexOf(t)<0)return e.push(t),t});return U(e,t)},parent:function(t){return U(n(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return H(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||f.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return l.call(H(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return c.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,p[t]||(e=h.createElement(t),h.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),p[t]=n),p[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=A(e);if(this[0]&&!n)var r=c(e).get(0),i=r.parentNode||1<this.length;return this.each(function(t){c(this).wrapAll(n?e.call(this,t):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){var e;for(c(this[0]).before(t=c(t));(e=t.children()).length;)t=e.first();c(t).append(this)}return this},wrapInner:function(i){var o=A(i);return this.each(function(t){var e=c(this),n=e.contents(),r=o?i.call(this,t):i;n.length?n.wrapAll(r):e.append(r)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=c(this);(e===u?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return c(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return c(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;c(this).empty().append(_(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=_(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(R(e))for(a in e)X(this,a,e[a]);else X(this,e,_(this,n,t,this.getAttribute(e)))}):0 in this&&1==this[0].nodeType&&null!=(t=this[0].getAttribute(e))?t:u},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(e,n){return e=O[e]||e,1 in arguments?this.each(function(t){this[e]=_(this,n,t,this[e])}):this[0]&&this[0][e]},removeProp:function(t){return t=O[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(x,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?B(r):u},val:function(e){return 0 in arguments?(null==e&&(e=""),this.each(function(t){this.value=_(this,e,t,this.value)})):this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=c(this),n=_(this,o,t,e.offset()),r=e.offsetParent().offset(),i={top:n.top-r.top,left:n.left-r.left};"static"==e.css("position")&&(i.position="relative"),e.css(i)});if(!this.length)return null;if(h.documentElement!==this[0]&&!c.contains(h.documentElement,this[0]))return{top:0,left:0};var t=this[0].getBoundingClientRect();return{left:t.left+Y.pageXOffset,top:t.top+Y.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n=this[0];if("string"==typeof t){if(!n)return;return n.style[s(t)]||getComputedStyle(n,"").getPropertyValue(t)}if(M(t)){if(!n)return;var r={},i=getComputedStyle(n,"");return c.each(t,function(t,e){r[e]=n.style[s(e)]||i.getPropertyValue(e)}),r}}var o="";if("string"==D(t))e||0===e?o=Z(t)+":"+q(t,e):this.each(function(){this.style.removeProperty(Z(t))});else for(a in t)t[a]||0===t[a]?o+=Z(a)+":"+q(a,t[a])+";":this.each(function(){this.style.removeProperty(Z(a))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(c(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&i.some.call(this,function(t){return this.test(V(t))},z(t))},addClass:function(n){return n?this.each(function(t){if("className"in this){r=[];var e=V(this);_(this,n,t,e).split(/\s+/g).forEach(function(t){c(this).hasClass(t)||r.push(t)},this),r.length&&V(this,e+(e?" ":"")+r.join(" "))}}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===u)return V(this,"");r=V(this),_(this,e,t,r).split(/\s+/g).forEach(function(t){r=r.replace(z(t)," ")}),V(this,r.trim())}})},toggleClass:function(n,r){return n?this.each(function(t){var e=c(this);_(this,n,t,V(this)).split(/\s+/g).forEach(function(t){(r===u?!e.hasClass(t):r)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===u?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===u?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=y.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(c(t).css("margin-top"))||0,n.left-=parseFloat(c(t).css("margin-left"))||0,r.top+=parseFloat(c(e[0]).css("border-top-width"))||0,r.left+=parseFloat(c(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||h.body;t&&!y.test(t.nodeName)&&"static"==c(t).css("position");)t=t.offsetParent;return t})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(r){var i=r.replace(/./,function(t){return t[0].toUpperCase()});c.fn[r]=function(e){var t,n=this[0];return e===u?L(n)?n["inner"+i]:$(n)?n.documentElement["scroll"+i]:(t=this.offset())&&t[r]:this.each(function(t){(n=c(this)).css(r,_(this,e,t,n[r]()))})}}),["after","prepend","before","append"].forEach(function(e,a){var s=a%2;c.fn[e]=function(){var n,r,i=c.map(arguments,function(t){var e=[];return"array"==(n=D(t))?(t.forEach(function(t){return t.nodeType!==u?e.push(t):c.zepto.isZ(t)?e=e.concat(t.get()):void(e=e.concat(N.fragment(t)))}),e):"object"==n||null==t?t:N.fragment(t)}),o=1<this.length;return i.length<1?this:this.each(function(t,e){r=s?e:e.parentNode,e=0==a?e.nextSibling:1==a?e.firstChild:2==a?e:null;var n=c.contains(h.documentElement,r);i.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!r)return c(t).remove();r.insertBefore(t,e),n&&function t(e,n){n(e);for(var r=0,i=e.childNodes.length;r<i;r++)t(e.childNodes[r],n)}(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:Y;e.eval.call(e,t.innerHTML)}})})})},c.fn[s?e+"To":"insert"+(a?"Before":"After")]=function(t){return c(t)[e](this),this}}),N.Z.prototype=I.prototype=c.fn,N.uniq=n,N.deserializeValue=B,c.zepto=N,c}();return Y.Zepto=t,void 0===Y.$&&(Y.$=t),function(l){var f,e=1,c=Array.prototype.slice,h=l.isFunction,p=function(t){return"string"==typeof t},d={},o={},n="onfocusin"in Y,r={focus:"focusin",blur:"focusout"},m={mouseenter:"mouseover",mouseleave:"mouseout"};function v(t){return t._zid||(t._zid=e++)}function a(t,e,n,r){if((e=g(e)).ns)var i=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(d[v(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||v(t.fn)===v(n))&&(!r||t.sel==r)})}function g(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function y(t,e){return t.del&&!n&&t.e in r||!!e}function x(t){return m[t]||n&&r[t]||t}function b(i,t,e,o,a,s,u){var n=v(i),c=d[n]||(d[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return l(document).ready(e);var n=g(t);n.fn=e,n.sel=a,n.e in m&&(e=function(t){var e=t.relatedTarget;if(!e||e!==this&&!l.contains(this,e))return n.fn.apply(this,arguments)});var r=(n.del=s)||e;n.proxy=function(t){if(!(t=T(t)).isImmediatePropagationStopped()){t.data=o;var e=r.apply(i,t._args==f?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=c.length,c.push(n),"addEventListener"in i&&i.addEventListener(x(n.e),n.proxy,y(n,u))})}function w(e,t,n,r,i){var o=v(e);(t||"").split(/\s/).forEach(function(t){a(e,t,n,r).forEach(function(t){delete d[o][t.i],"removeEventListener"in e&&e.removeEventListener(x(t.e),t.proxy,y(t,i))})})}o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",l.event={add:b,remove:w},l.proxy=function(t,e){var n=2 in arguments&&c.call(arguments,2);if(h(t)){var r=function(){return t.apply(e,n?n.concat(c.call(arguments)):arguments)};return r._zid=v(t),r}if(p(e))return n?(n.unshift(t[e],t),l.proxy.apply(null,n)):l.proxy(t[e],t);throw new TypeError("expected function")},l.fn.bind=function(t,e,n){return this.on(t,e,n)},l.fn.unbind=function(t,e){return this.off(t,e)},l.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var s=function(){return!0},E=function(){return!1},i=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function T(r,i){return!i&&r.isDefaultPrevented||(i||(i=r),l.each(t,function(t,e){var n=i[t];r[t]=function(){return this[e]=s,n&&n.apply(i,arguments)},r[e]=E}),r.timeStamp||(r.timeStamp=Date.now()),(i.defaultPrevented!==f?i.defaultPrevented:"returnValue"in i?!1===i.returnValue:i.getPreventDefault&&i.getPreventDefault())&&(r.isDefaultPrevented=s)),r}function S(t){var e,n={originalEvent:t};for(e in t)i.test(e)||t[e]===f||(n[e]=t[e]);return T(n,t)}l.fn.delegate=function(t,e,n){return this.on(e,t,n)},l.fn.undelegate=function(t,e,n){return this.off(e,t,n)},l.fn.live=function(t,e){return l(document.body).delegate(this.selector,t,e),this},l.fn.die=function(t,e){return l(document.body).undelegate(this.selector,t,e),this},l.fn.on=function(e,i,n,o,a){var s,u,r=this;return e&&!p(e)?(l.each(e,function(t,e){r.on(t,i,n,e,a)}),r):(p(i)||h(o)||!1===o||(o=n,n=i,i=f),o!==f&&!1!==n||(o=n,n=f),!1===o&&(o=E),r.each(function(t,r){a&&(s=function(t){return w(r,t.type,o),o.apply(this,arguments)}),i&&(u=function(t){var e,n=l(t.target).closest(i,r).get(0);if(n&&n!==r)return e=l.extend(S(t),{currentTarget:n,liveFired:r}),(s||o).apply(n,[e].concat(c.call(arguments,1)))}),b(r,e,o,n,i,u||s)}))},l.fn.off=function(t,n,e){var r=this;return t&&!p(t)?(l.each(t,function(t,e){r.off(t,n,e)}),r):(p(n)||h(e)||!1===e||(e=n,n=f),!1===e&&(e=E),r.each(function(){w(this,t,e,n)}))},l.fn.trigger=function(t,e){return(t=p(t)||l.isPlainObject(t)?l.Event(t):T(t))._args=e,this.each(function(){t.type in r&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):l(this).triggerHandler(t,e)})},l.fn.triggerHandler=function(n,r){var i,o;return this.each(function(t,e){(i=S(p(n)?l.Event(n):n))._args=r,i.target=e,l.each(a(e,n.type||n),function(t,e){if(o=e.proxy(i),i.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){l.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),l.Event=function(t,e){p(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(t),function(g){var y,x,l=+new Date,b=Y.document,u=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,T="application/json",S="text/html",j=/^\s*$/,C=b.createElement("a");function N(t,e,n,r){if(t.global)return i=e||b,o=n,a=r,s=g.Event(o),g(i).trigger(s,a),!s.isDefaultPrevented();var i,o,a,s}function P(t,e){var n=e.context;if(!1===e.beforeSend.call(n,t,e)||!1===N(e,n,"ajaxBeforeSend",[t,e]))return!1;N(e,n,"ajaxSend",[t,e])}function O(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),N(n,i,"ajaxSuccess",[e,n,t]),a(o,e,n)}function M(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),N(r,o,"ajaxError",[n,r,t||e]),a(e,n,r)}function a(t,e,n){var r,i=n.context;n.complete.call(i,e,t),N(n,i,"ajaxComplete",[e,n]),(r=n).global&&!--g.active&&N(r,null,"ajaxStop")}function D(){}function A(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function c(t,e,n,r){return g.isFunction(e)&&(r=n,n=e,e=void 0),g.isFunction(n)||(r=n,n=void 0),{url:t,data:e,success:n,dataType:r}}C.href=Y.location.href,g.active=0,g.ajaxJSONP=function(n,r){if(!("type"in n))return g.ajax(n);var i,o,t=n.jsonpCallback,a=(g.isFunction(t)?t():t)||"Zepto"+l++,s=b.createElement("script"),u=Y[a],e=function(t){g(s).triggerHandler("error",t||"abort")},c={abort:e};return r&&r.promise(c),g(s).on("load error",function(t,e){clearTimeout(o),g(s).off().remove(),"error"!=t.type&&i?O(i[0],c,n,r):M(null,e||"error",c,n,r),Y[a]=u,i&&g.isFunction(u)&&u(i[0]),u=i=void 0}),!1===P(c,n)?e("abort"):(Y[a]=function(){i=arguments},s.src=n.url.replace(/\?(.+)=\?/,"?$1="+a),b.head.appendChild(s),0<n.timeout&&(o=setTimeout(function(){e("timeout")},n.timeout))),c},g.ajaxSettings={type:"GET",beforeSend:D,success:D,error:D,complete:D,context:null,global:!0,xhr:function(){return new Y.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:D},g.ajax=function(t){var e,n,r,i,o=g.extend({},t||{}),a=g.Deferred&&g.Deferred();for(y in g.ajaxSettings)void 0===o[y]&&(o[y]=g.ajaxSettings[y]);(r=o).global&&0==g.active++&&N(r,null,"ajaxStart"),o.crossDomain||((e=b.createElement("a")).href=o.url,e.href=e.href,o.crossDomain=C.protocol+"//"+C.host!=e.protocol+"//"+e.host),o.url||(o.url=Y.location.toString()),-1<(n=o.url.indexOf("#"))&&(o.url=o.url.slice(0,n)),(i=o).processData&&i.data&&"string"!=g.type(i.data)&&(i.data=g.param(i.data,i.traditional)),!i.data||i.type&&"GET"!=i.type.toUpperCase()&&"jsonp"!=i.dataType||(i.url=A(i.url,i.data),i.data=void 0);var s=o.dataType,u=/\?.+=\?/.test(o.url);if(u&&(s="jsonp"),!1!==o.cache&&(t&&!0===t.cache||"script"!=s&&"jsonp"!=s)||(o.url=A(o.url,"_="+Date.now())),"jsonp"==s)return u||(o.url=A(o.url,o.jsonp?o.jsonp+"=?":!1===o.jsonp?"":"callback=?")),g.ajaxJSONP(o,a);var c,l=o.accepts[s],f={},h=function(t,e){f[t.toLowerCase()]=[t,e]},p=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:Y.location.protocol,d=o.xhr(),m=d.setRequestHeader;if(a&&a.promise(d),o.crossDomain||h("X-Requested-With","XMLHttpRequest"),h("Accept",l||"*/*"),(l=o.mimeType||l)&&(-1<l.indexOf(",")&&(l=l.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(l)),(o.contentType||!1!==o.contentType&&o.data&&"GET"!=o.type.toUpperCase())&&h("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(x in o.headers)h(x,o.headers[x]);if(d.setRequestHeader=h,!(d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=D,clearTimeout(c);var t,e=!1;if(200<=d.status&&d.status<300||304==d.status||0==d.status&&"file:"==p){if(s=s||((n=o.mimeType||d.getResponseHeader("content-type"))&&(n=n.split(";",2)[0]),n&&(n==S?"html":n==T?"json":w.test(n)?"script":E.test(n)&&"xml")||"text"),"arraybuffer"==d.responseType||"blob"==d.responseType)t=d.response;else{t=d.responseText;try{t=function(t,e,n){if(n.dataFilter==D)return t;var r=n.context;return n.dataFilter.call(r,t,e)}(t,s,o),"script"==s?(0,eval)(t):"xml"==s?t=d.responseXML:"json"==s&&(t=j.test(t)?null:g.parseJSON(t))}catch(t){e=t}if(e)return M(e,"parsererror",d,o,a)}O(t,d,o,a)}else M(d.statusText||null,d.status?"error":"abort",d,o,a)}var n})===P(d,o))return d.abort(),M(null,"abort",d,o,a),d;var v=!("async"in o)||o.async;if(d.open(o.type,o.url,v,o.username,o.password),o.xhrFields)for(x in o.xhrFields)d[x]=o.xhrFields[x];for(x in f)m.apply(d,f[x]);return 0<o.timeout&&(c=setTimeout(function(){d.onreadystatechange=D,d.abort(),M(null,"timeout",d,o,a)},o.timeout)),d.send(o.data?o.data:null),d},g.get=function(){return g.ajax(c.apply(null,arguments))},g.post=function(){var t=c.apply(null,arguments);return t.type="POST",g.ajax(t)},g.getJSON=function(){var t=c.apply(null,arguments);return t.dataType="json",g.ajax(t)},g.fn.load=function(t,e,n){if(!this.length)return this;var r,i=this,o=t.split(/\s/),a=c(t,e,n),s=a.success;return 1<o.length&&(a.url=o[0],r=o[1]),a.success=function(t){i.html(r?g("<div>").html(t.replace(u,"")).find(r):t),s&&s.apply(i,arguments)},g.ajax(a),this};var r=encodeURIComponent;g.param=function(t,e){var n=[];return n.add=function(t,e){g.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(r(t)+"="+r(e))},function n(r,t,i,o){var a,s=g.isArray(t),u=g.isPlainObject(t);g.each(t,function(t,e){a=g.type(e),o&&(t=i?o:o+"["+(u||"object"==a||"array"==a?t:"")+"]"),!o&&s?r.add(e.name,e.value):"array"==a||!i&&"object"==a?n(r,e,i,t):r.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(t),(o=t).fn.serializeArray=function(){var n,r,e=[],i=function(t){if(t.forEach)return t.forEach(i);e.push({name:n,value:t})};return this[0]&&o.each(this[0].elements,function(t,e){r=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&"file"!=r&&("radio"!=r&&"checkbox"!=r||e.checked)&&i(o(e).val())}),e},o.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},o.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=o.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this},function(){try{getComputedStyle(void 0)}catch(t){var n=getComputedStyle;Y.getComputedStyle=function(t,e){try{return n(t,e)}catch(t){return null}}}}(),t}),function(s){var u,c,l,f,h,p,d,m,v,g={},y=750,x=!1;function b(){f=null,g.last&&(g.el.trigger("longTap"),g={})}function w(){f&&clearTimeout(f),f=null}function E(){u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),f&&clearTimeout(f),u=c=l=f=null,g={}}function T(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function S(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}function t(t){var e,n,r,i,o=0,a=0;x&&(s(document).off(v.down,p).off(v.up,d).off(v.move,m).off(v.cancel,E),s(window).off("scroll",E),E(),x=!1),(v=t&&"down"in t?t:"ontouchstart"in document?{down:"touchstart",up:"touchend",move:"touchmove",cancel:"touchcancel"}:"onpointerdown"in document?{down:"pointerdown",up:"pointerup",move:"pointermove",cancel:"pointercancel"}:"onmspointerdown"in document&&{down:"MSPointerDown",up:"MSPointerUp",move:"MSPointerMove",cancel:"MSPointerCancel"})&&("MSGesture"in window&&((h=new MSGesture).target=document.body,s(document).bind("MSGestureEnd",function(t){var e=1<t.velocityX?"Right":t.velocityX<-1?"Left":1<t.velocityY?"Down":t.velocityY<-1?"Up":null;e&&(g.el.trigger("swipe"),g.el.trigger("swipe"+e))})),p=function(t){(i=S(t,"down"))&&!T(t)||(r=i?t:t.touches[0],t.touches&&1===t.touches.length&&g.x2&&(g.x2=void 0,g.y2=void 0),e=Date.now(),n=e-(g.last||e),g.el=s("tagName"in r.target?r.target:r.target.parentNode),u&&clearTimeout(u),g.x1=r.pageX,g.y1=r.pageY,0<n&&n<=250&&(g.isDoubleTap=!0),g.last=e,f=setTimeout(b,y),h&&i&&h.addPointer(t.pointerId))},m=function(t){(i=S(t,"move"))&&!T(t)||(r=i?t:t.touches[0],w(),g.x2=r.pageX,g.y2=r.pageY,o+=Math.abs(g.x1-g.x2),a+=Math.abs(g.y1-g.y2))},d=function(t){(i=S(t,"up"))&&!T(t)||(w(),g.x2&&30<Math.abs(g.x1-g.x2)||g.y2&&30<Math.abs(g.y1-g.y2)?l=setTimeout(function(){var t,e,n,r;g.el&&(g.el.trigger("swipe"),g.el.trigger("swipe"+(t=g.x1,e=g.x2,n=g.y1,r=g.y2,Math.abs(t-e)>=Math.abs(n-r)?0<t-e?"Left":"Right":0<n-r?"Up":"Down"))),g={}},0):"last"in g&&(o<30&&a<30?c=setTimeout(function(){var t=s.Event("tap");t.cancelTouch=E,g.el&&g.el.trigger(t),g.isDoubleTap?(g.el&&g.el.trigger("doubleTap"),g={}):u=setTimeout(function(){u=null,g.el&&g.el.trigger("singleTap"),g={}},250)},0):g={}),o=a=0)},s(document).on(v.up,d).on(v.down,p).on(v.move,m),s(document).on(v.cancel,E),s(window).on("scroll",E),x=!0)}["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){s.fn[e]=function(t){return this.on(e,t)}}),s.touch={setup:t},s(document).ready(t)}(Zepto);