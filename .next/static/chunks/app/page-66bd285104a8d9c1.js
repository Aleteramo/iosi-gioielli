(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6844:function(e,t,o){Promise.resolve().then(o.bind(o,5888))},1233:function(e){"use strict";e.exports=function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=(n(o(1)),o(6)),r=n(a),s=n(o(7)),c=n(o(8)),l=n(o(9)),u=n(o(10)),d=n(o(11)),f=n(o(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(p=!0),p)return m=(0,d.default)(m,b),(0,u.default)(m,b.once),m},g=function(){m=(0,f.default)(),v()},h=function(){m.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){b=i(b,e),m=(0,f.default)();var t,o=document.all&&!window.atob;return!0===(t=b.disable)||"mobile"===t&&l.default.mobile()||"phone"===t&&l.default.phone()||"tablet"===t&&l.default.tablet()||"function"==typeof t&&!0===t()||o?h():(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,function(){v(!0)}):document.addEventListener(b.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,u.default)(m,b.once)},b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",g),m)},refresh:v,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){function o(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":i(t))||t&&"object"==(void 0===t?"undefined":i(t))&&v.call(t)==s)return r;if(o(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var a=u.test(e=e.replace(c,""));return a||d.test(e)?f(e.slice(2),a?2:8):l.test(e)?r:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",r=NaN,s="[object Symbol]",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,m="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,b=m||p||Function("return this")(),v=Object.prototype.toString,g=Math.max,h=Math.min,y=function(){return b.Date.now()};e.exports=function(e,t,i){var r=!0,s=!0;if("function"!=typeof e)throw TypeError(a);return o(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),function(e,t,i){function r(t){var o=d,n=f;return d=f=void 0,w=t,p=e.apply(n,o)}function s(e){var o=e-v,n=e-w;return void 0===v||o>=t||o<0||k&&n>=m}function c(){var e,o,n,i=y();return s(i)?l(i):void(b=setTimeout(c,(e=i-v,o=i-w,n=t-e,k?h(n,m-o):n)))}function l(e){return b=void 0,j&&d?r(e):(d=f=void 0,p)}function u(){var e,o=y(),n=s(o);if(d=arguments,f=this,v=o,n){if(void 0===b)return w=e=v,b=setTimeout(c,t),x?r(e):p;if(k)return b=setTimeout(c,t),r(v)}return void 0===b&&(b=setTimeout(c,t)),p}var d,f,m,p,b,v,w=0,x=!1,k=!1,j=!0;if("function"!=typeof e)throw TypeError(a);return t=n(t)||0,o(i)&&(x=!!i.leading,m=(k="maxWait"in i)?g(n(i.maxWait)||0,t):m,j="trailing"in i?!!i.trailing:j),u.cancel=function(){void 0!==b&&clearTimeout(b),w=0,d=v=f=b=void 0},u.flush=function(){return void 0===b?p:l(y())},u}(e,t,{leading:r,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){function o(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":i(t))||t&&"object"==(void 0===t?"undefined":i(t))&&b.call(t)==r)return a;if(o(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var f=l.test(e=e.replace(s,""));return f||u.test(e)?d(e.slice(2),f?2:8):c.test(e)?a:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=NaN,r="[object Symbol]",s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt,f="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,p=f||m||Function("return this")(),b=Object.prototype.toString,v=Math.max,g=Math.min,h=function(){return p.Date.now()};e.exports=function(e,t,i){function a(t){var o=u,n=d;return u=d=void 0,y=t,m=e.apply(n,o)}function r(e){var o=e-b,n=e-y;return void 0===b||o>=t||o<0||x&&n>=f}function s(){var e,o,n,i=h();return r(i)?c(i):void(p=setTimeout(s,(e=i-b,o=i-y,n=t-e,x?g(n,f-o):n)))}function c(e){return p=void 0,k&&u?a(e):(u=d=void 0,m)}function l(){var e,o=h(),n=r(o);if(u=arguments,d=this,b=o,n){if(void 0===p)return y=e=b,p=setTimeout(s,t),w?a(e):m;if(x)return p=setTimeout(s,t),a(b)}return void 0===p&&(p=setTimeout(s,t)),m}var u,d,f,m,p,b,y=0,w=!1,x=!1,k=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=n(t)||0,o(i)&&(w=!!i.leading,f=(x="maxWait"in i)?v(n(i.maxWait)||0,t):f,k="trailing"in i?!!i.trailing:k),l.cancel=function(){void 0!==p&&clearTimeout(p),y=0,u=b=d=p=void 0},l.flush=function(){return void 0===p?m:c(h())},l}}).call(t,function(){return this}())},function(e,t){function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(function e(t){var o=void 0,n=void 0;for(o=0;o<t.length;o+=1)if((n=t[o]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(o)))return i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default={isSupported:function(){return!!o()},ready:function(e,t){var a=window.document,r=new(o())(n);i=t,r.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=o();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===n||"false"!==n&&(o||"true"===n)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){o(e,i+n,t)})}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=o(12))&&n.__esModule?n:{default:n};t.default=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)}),e}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=o(13))&&n.__esModule?n:{default:n};t.default=function(e,t){var o=0,n=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+e.offsetHeight;break;case"center-center":o+=a/2+e.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=e.offsetHeight+a;break;case"center-top":o+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},4930:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=o(6921);o(3827),o(4090);let i=n._(o(4795));function a(e,t){let o={loading:e=>{let{error:t,isLoading:o,pastDelay:n}=e;return null}};return"function"==typeof e&&(o.loader=e),(0,i.default)({...o,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9721:function(e,t,o){"use strict";function n(e){let{reason:t,children:o}=e;return o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}}),o(9775)},4795:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=o(3827),i=o(4090),a=o(9721);function r(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let s={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},c=function(e){let t={...s,...e},o=(0,i.lazy)(()=>t.loader().then(r)),c=t.loading;function l(e){let r=c?(0,n.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,s=t.ssr?(0,n.jsx)(o,{...e}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(o,{...e})});return(0,n.jsx)(i.Suspense,{fallback:r,children:s})}return l.displayName="LoadableComponent",l}},5888:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return b}});var n=o(3827),i=o(4090),a=o(4930),r=o.n(a),s=o(1233),c=o.n(s);o(7002);var l=o(5343);let u=r()(()=>o.e(926).then(o.bind(o,6926)),{loadableGenerated:{webpack:()=>[6926]},ssr:!1}),d=r()(()=>Promise.all([o.e(792),o.e(376)]).then(o.bind(o,2931)),{loadableGenerated:{webpack:()=>[2931]},ssr:!1}),f=r()(()=>Promise.all([o.e(136),o.e(366)]).then(o.bind(o,304)),{loadableGenerated:{webpack:()=>[304]},ssr:!1}),m=[{id:1,name:"Collezione Noir",description:"Un viaggio nell'oscurit\xe0 pi\xf9 preziosa, dove ogni diamante racconta una storia segreta",image:"/images/IMG_1898.jpg"},{id:2,name:"Collezione Mystique",description:"La perfezione si nasconde nell'ombra, rivelando la sua bellezza solo agli occhi pi\xf9 attenti",image:"/images/IMG_1899.jpg"},{id:3,name:"Collezione Shadow",description:"Quando l'eleganza incontra il mistero, nascono creazioni che sfidano il tempo",image:"/images/IMG_1900.jpg"}],p=[{href:"/collezioni",title:"Collezioni →",description:"Esplora il nostro universo di creazioni misteriose"},{href:"/su-di-noi",title:"Essenza →",description:"Scopri il segreto dietro ogni nostra creazione"},{href:"/contatti",title:"Contatti →",description:"Inizia il tuo viaggio nel mondo IO S\xec"},{href:"/journal",title:"Journal →",description:"Storie dall'ombra del lusso contemporaneo"}];function b(){return(0,i.useEffect)(()=>{c().init({duration:1200,once:!0,easing:"ease-out"})},[]),(0,n.jsx)("div",{className:"min-h-screen bg-black",children:(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)("header",{className:"fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/80 to-transparent",children:(0,n.jsx)("div",{className:"flex justify-center py-8",children:(0,n.jsx)(l.Z,{})})}),(0,n.jsx)("section",{className:"flex-grow",children:(0,n.jsx)(u,{})}),(0,n.jsx)("section",{className:"py-24 bg-gradient-to-b from-black to-zinc-900",children:(0,n.jsx)("div",{className:"container mx-auto px-4",children:(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8","data-aos":"fade-up","data-aos-delay":"100",children:p.map(e=>(0,n.jsx)(d,{...e},e.href))})})}),(0,n.jsx)("section",{className:"py-24 bg-zinc-900",children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsx)("h2",{className:"text-3xl md:text-4xl font-cormorant text-center mb-16 text-golden","data-aos":"fade-up",children:"Le Nostre Collezioni"}),(0,n.jsx)("div",{"data-aos":"fade-up","data-aos-delay":"200",children:(0,n.jsx)(f,{collections:m})})]})})]})})}},5343:function(e,t,o){"use strict";var n=o(3827);o(4090),t.Z=()=>(0,n.jsxs)("div",{className:"relative inline-block",children:[(0,n.jsxs)("div",{className:"text-4xl font-cormorant tracking-wider",children:["IO ",(0,n.jsx)("span",{className:"font-light",children:"S\xec"})]}),(0,n.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-accent transform origin-left transition-transform duration-300 hover:scale-x-110"})]})},7002:function(){}},function(e){e.O(0,[464,971,69,744],function(){return e(e.s=6844)}),_N_E=e.O()}]);