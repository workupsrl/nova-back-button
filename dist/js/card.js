!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){Nova.booting(function(t,e,r){t.component("nova-back-button",n(2))})},function(t,e,n){var r=n(8)(n(9),n(10),!1,function(t){n(3)},null,null);t.exports=r.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("489c9f65",r,!0,{})},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".backButton{height:auto}.backButton__content>p:not(:last-child){margin-bottom:1em}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(s).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(7),s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,u=!1,d=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(u)return d;r.parentNode.removeChild(r)}if(p){var o=c++;r=i||(i=v()),e=C.bind(null,r,o,!1),n=C.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);l.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){u=n,l=r||{};var a=o(t,e);return h(a),function(e){for(var n=[],r=0;r<a.length;r++){var i=a[r];(c=s[i.id]).refs--,n.push(c)}e?h(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}};var y,g=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function C(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var s=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],a=s[0],i={id:t+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,s){var a,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,i=t.default);var u,d="function"==typeof i?i.options:i;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=u):r&&(u=r),u){var l=d.functional,f=l?d.render:d.beforeCreate;l?(d._injectStyles=u,d.render=function(t,e){return u.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,u):[u]}return{esModule:a,exports:i,options:d}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["card"],computed:{cardClassList:function(){var t="";return this.card.center&&(t+=" flex flex-col justify-center text-center"),t}},mounted:function(){this.card.forceFullWidth&&(this.$parent.$el.classList.remove("w-5/6"),this.$parent.$el.classList.add("w-full"))}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.card.withoutCardStyles?"div":"card",{tag:"compoonent",staticClass:"backButton",class:t.cardClassList},[t.card.url?n("router-link",{directives:[{name:"class",rawName:"v-class",value:{"px-3":!t.card.withoutCardStyles,"py-3":!t.card.withoutCardStyles},expression:"{ 'px-3': ! card.withoutCardStyles, 'py-3': ! card.withoutCardStyles }"}],staticClass:"backButton__content",attrs:{to:t.card.url},domProps:{innerHTML:t._s(t.card.content)}}):n("a",{directives:[{name:"class",rawName:"v-class",value:{"px-3":!t.card.withoutCardStyles,"py-3":!t.card.withoutCardStyles},expression:"{ 'px-3': ! card.withoutCardStyles, 'py-3': ! card.withoutCardStyles }"}],staticClass:"backButton__content",attrs:{href:"javascript:history.go(-1)"},domProps:{innerHTML:t._s(t.card.content)}})],1)},staticRenderFns:[]}}]);