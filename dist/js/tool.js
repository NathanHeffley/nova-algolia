!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t,e,n,a,o,r){var s,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,i=t.default);var c,u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):a&&(c=a),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:i,options:u}}},function(t,e,n){n(2),t.exports=n(14)},function(t,e,n){Nova.booting(function(t,e){t.component("algolia-resource-tool",n(3)),e.addRoutes([{name:"nova-algolia",path:"/nova-algolia",component:n(6)}])})},function(t,e,n){var a=n(0)(n(4),n(5),!1,null,null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resourceName","resourceId","field"],data:function(){return{algoliaData:[],path:"/nova-vendor/nova-algolia/"+this.resourceName+"/"+this.resourceId,showingConfirmRemoval:!1}},mounted:function(){var t=this;Nova.request(this.path).then(function(e){var n=e.data;t.algoliaData=n})},methods:{importRecord:function(){var t=this;Nova.request().post(this.path).then(function(e){var n=e.data;t.algoliaData=n})},removeRecord:function(){var t=this;this.closeConfirmRemoval(),Nova.request().delete(this.path).then(function(e){var n=e.data;t.algoliaData=n})},openConfirmRemoval:function(){this.showingConfirmRemoval=!0},closeConfirmRemoval:function(){this.showingConfirmRemoval=!1}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"mr-3 text-base text-80 font-bold"},[t._v("Index")]),t._v(" "),n("div",{staticClass:"flex items-center mb-4"},[n("p",{staticClass:"text-4xl mr-auto",domProps:{textContent:t._s(t.algoliaData.index)}}),t._v(" "),n("button",{staticClass:"appearance-none cursor-pointer text-70 hover:text-primary mr-3",attrs:{title:"Import"},on:{click:t.importRecord}},[n("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20","aria-labelledby":"import",role:"presentation"}},[n("path",{attrs:{"fill-rule":"nonzero",d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"}})])]),t._v(" "),n("button",{staticClass:"appearance-none cursor-pointer text-70 hover:text-danger mr-3",attrs:{title:"Remove"},on:{click:t.openConfirmRemoval}},[n("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20","aria-labelledby":"delete",role:"presentation"}},[n("path",{attrs:{"fill-rule":"nonzero",d:"M6 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5zM4 6v12h12V6H4zm8-2V2H8v2h4zM8 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"}})])])]),t._v(" "),t.algoliaData.data?n("pre",[n("code",{domProps:{textContent:t._s(t.algoliaData.data)}})]):n("pre",[t._v("This model doesn't have a record in Algolia.")]),t._v(" "),n("portal",{attrs:{to:"modals"}},[t.showingConfirmRemoval?n("modal",{on:{"modal-close":t.closeConfirmRemoval}},[n("div",{staticClass:"bg-white rounded-lg shadow-lg overflow-hidden",staticStyle:{width:"460px"}},[n("div",{staticClass:"p-8"},[n("h2",{staticClass:"mb-6 text-90 font-normal text-xl"},[t._v("Remove Record")]),t._v(" "),n("p",{staticClass:"text-80 leading-normal"},[t._v("Are you sure you want to remove this record from the search index?")])]),t._v(" "),n("div",{staticClass:"bg-30 px-6 py-3 flex"},[n("div",{staticClass:"ml-auto"},[n("button",{staticClass:"btn text-80 font-normal h-9 px-3 mr-3 btn-link",on:{click:t.closeConfirmRemoval}},[t._v("Cancel")]),t._v(" "),n("button",{staticClass:"btn btn-default btn-danger",on:{click:t.removeRecord}},[t._v("Remove")])])])])]):t._e()],1)],1)},staticRenderFns:[]}},function(t,e,n){var a=n(0)(n(12),n(13),!1,function(t){n(7)},null,null);t.exports=a.exports},function(t,e,n){var a=n(8);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(10)("1c175ab5",a,!0,{})},function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".card+.card{margin-top:1.5rem}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=(s=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(a[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(11),r={},s=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,u=function(){},d=null,f="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t){for(var e=0;e<t.length;e++){var n=t[e],a=r[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(m(n.parts[o]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(m(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function m(t){var e,n,a=document.querySelector("style["+f+'~="'+t.id+'"]');if(a){if(c)return u;a.parentNode.removeChild(a)}if(v){var o=l++;a=i||(i=h()),e=C.bind(null,a,o,!1),n=C.bind(null,a,o,!0)}else a=h(),e=function(t,e){var n=e.css,a=e.media,o=e.sourceMap;a&&t.setAttribute("media",a);d.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}t.exports=function(t,e,n,a){c=n,d=a||{};var s=o(t,e);return p(s),function(e){for(var n=[],a=0;a<s.length;a++){var i=s[a];(l=r[i.id]).refs--,n.push(l)}e?p(s=o(t,e)):s=[];for(a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete r[l.id]}}}};var x,g=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function C(t,e,n,a){var o=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t,e){for(var n=[],a={},o=0;o<e.length;o++){var r=e[o],s=r[0],i={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};a[s]?a[s].parts.push(i):n.push(a[s]={id:s,parts:[i]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{indexes:[],flushName:null}},mounted:function(){var t=this;Nova.request("/nova-vendor/nova-algolia/indexes").then(function(e){var n=e.data;t.indexes=n.items})},methods:{importRecords:function(t){var e=this;Nova.request().post("/nova-vendor/nova-algolia/indexes/"+t+"/import").then(function(n){var a=n.data;e.indexes.find(function(e){return e.name===t}).entries=a})},closeConfirmFlush:function(){this.flushName=null},openConfirmFlush:function(t){this.flushName=t},flush:function(){var t=this;Nova.request().post("/nova-vendor/nova-algolia/indexes/"+this.flushName+"/flush").then(function(e){var n=e.data,a=t.indexes.find(function(e){return e.name===t.flushName});a.entries=0,a.updatedAt=n.updatedAt,t.flushName=""})}},filters:{pluralize:function(t,e){return 1===e?t:t+"s"}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("heading",{staticClass:"mb-6"},[t._v("Algolia")]),t._v(" "),t._l(t.indexes,function(e){return n("card",{key:e.name,staticClass:"card px-6 py-4"},[n("div",{staticClass:"flex mb-4 items-center"},[n("h3",{staticClass:"mr-3 text-2xl text-80 font-normal",domProps:{textContent:t._s(e.name)}}),t._v(" "),n("p",{staticClass:"ml-auto"},[t._v("Last Updated: "+t._s(e.updatedAt))])]),t._v(" "),n("div",{staticClass:"flex items-center"},[n("p",{staticClass:"text-4xl mr-auto"},[t._v(t._s(e.entries)+" "+t._s(t._f("pluralize")("record",e.entries)))]),t._v(" "),n("button",{staticClass:"appearance-none cursor-pointer text-70 hover:text-primary mr-3",attrs:{title:"Import"},on:{click:function(n){t.importRecords(e.name)}}},[n("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20","aria-labelledby":"import",role:"presentation"}},[n("path",{attrs:{"fill-rule":"nonzero",d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"}})])]),t._v(" "),n("button",{staticClass:"appearance-none cursor-pointer text-70 hover:text-danger mr-3",attrs:{title:"Flush"},on:{click:function(n){t.openConfirmFlush(e.name)}}},[n("svg",{staticClass:"fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20","aria-labelledby":"delete",role:"presentation"}},[n("path",{attrs:{"fill-rule":"nonzero",d:"M6 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5zM4 6v12h12V6H4zm8-2V2H8v2h4zM8 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"}})])])])])}),t._v(" "),n("portal",{attrs:{to:"modals"}},[t.flushName?n("modal",{on:{"modal-close":t.closeConfirmFlush}},[n("div",{staticClass:"bg-white rounded-lg shadow-lg overflow-hidden",staticStyle:{width:"460px"}},[n("div",{staticClass:"p-8"},[n("h2",{staticClass:"mb-6 text-90 font-normal text-xl"},[t._v("Flush Index")]),t._v(" "),n("p",{staticClass:"text-80 leading-normal"},[t._v("Are you sure you want to flush this index?")])]),t._v(" "),n("div",{staticClass:"bg-30 px-6 py-3 flex"},[n("div",{staticClass:"ml-auto"},[n("button",{staticClass:"btn text-80 font-normal h-9 px-3 mr-3 btn-link",on:{click:t.closeConfirmFlush}},[t._v("Cancel")]),t._v(" "),n("button",{staticClass:"btn btn-default btn-danger",on:{click:t.flush}},[t._v("Flush")])])])])]):t._e()],1)],2)},staticRenderFns:[]}},function(t,e){}]);