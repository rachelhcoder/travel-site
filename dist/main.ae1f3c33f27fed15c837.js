(()=>{"use strict";var e,t,r,n={429:(e,t,r)=>{function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r(90);const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleMenu()}))}},{key:"toggleMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--show"),this.siteHeader.classList.toggle("site-header--show"),this.menuIcon.classList.toggle("site-header__menu-icon--x")}}])&&n(t.prototype,r),e}();var o=r(493),s=r.n(o),l=r(279),a=r.n(l);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const u=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.threshold=r,this.itemsToReveal=t,this.hideInit(),this.browserHeight=window.innerHeight,this.scrollThrottle=s()(this.calCaller,200).bind(this),this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calCaller",value:function(){var e=this;this.itemsToReveal.forEach((function(t){!1===t.isRevealed&&e.calcScroll(t)}))}},{key:"calcScroll",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().y/this.browserHeight*100<this.threshold&&(e.classList.add("reveal-item--show"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInit",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&c(t.prototype,r),e}();function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.prevScrollY=window.scrollY,this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",s()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.prevScrollY?this.scrollDirection="down":this.scrollDirection="up",this.prevScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||"up"==this.scrollDirection){var r=e.getAttribute("data-target");document.querySelectorAll(".primary-nav a:not(".concat(r,")")).forEach((function(e){return e.classList.remove("current")})),document.querySelector("#"+r).classList.add("current")}}}}])&&d(t.prototype,r),e}();var f;new i,new u(document.querySelectorAll(".feature-item"),75),new u(document.querySelectorAll(".testimonial"),60),new h,document.querySelectorAll(".open-modals").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===f?r.e(582).then(r.bind(r,222)).then((function(e){f=new e.default,setTimeout((function(){return f.openTheModal()}),20)})).catch((function(){return console.log("there was a problem")})):f.openTheModal()}))}))}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,e=[],o.O=(t,r,n,i)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,n,i]=e[c],l=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](r[a])))?r.splice(a--,1):(l=!1,i<s&&(s=i));l&&(e.splice(c--,1),t=n())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>"modal.8c144d63785ee46f5400.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="travel-site:",o.l=(e,n,i,s)=>{if(t[e])t[e].push(n);else{var l,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+i){l=d;break}}l||(a=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",r+i),l.src=e),t[e]=[n];var h=(r,n)=>{l.onerror=l.onload=null,clearTimeout(f);var i=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(n))),r)return r(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),a&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=i);var s=o.p+o.u(t),l=new Error;o.l(s,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,n[1](l)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[s,l,a]=r,c=0;for(n in l)o.o(l,n)&&(o.m[n]=l[n]);for(a&&a(o),t&&t(r);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[s[c]]=0;o.O()},r=self.webpackChunktravel_site=self.webpackChunktravel_site||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=o.O(void 0,[636],(()=>o(429)));s=o.O(s)})();