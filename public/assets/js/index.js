/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";const e=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},t=function(t,n){if(void 0===n&&(n=document),t instanceof Array)return t.filter(e);if(e(t))return[t];if(i=t,r=Object.prototype.toString.call(i),"object"==typeof window.NodeList?i instanceof window.NodeList:null!==i&&"object"==typeof i&&"number"==typeof i.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(r)&&(0===i.length||e(i[0])))return Array.prototype.slice.call(t);var i,r;if("string"==typeof t)try{var o=n.querySelectorAll(t);return Array.prototype.slice.call(o)}catch(e){return[]}return[]};function n(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=i();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function i(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function r(e,t){for(var i=n(e),r=n(t),o=[],a=0;a<4;a++)for(var s=[i[a],i[a+4],i[a+8],i[a+12]],l=0;l<4;l++){var c=4*l,d=[r[c],r[c+1],r[c+2],r[c+3]],u=s[0]*d[0]+s[1]*d[1]+s[2]*d[2]+s[3]*d[3];o[a+c]=u}return o}function o(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return n(t[2].split(", ").map(parseFloat))}return i()}function a(e,t){var n=i();return n[0]=e,n[5]="number"==typeof t?t:e,n}var s,l=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){return l(e)}),0)});const c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l;var d={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},u=function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},f=function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}};function h(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function m(e,t){if(h(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,i){return t(n,i,e)}));throw new TypeError("Expected either an array or object literal.")}function v(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach((function(e){return i+="\n — "+e})),console.log(i,"color: #ea654b;")}}function p(){var e=this,n={active:[],stale:[]},i={active:[],stale:[]},r={active:[],stale:[]};try{m(t("[data-sr-id]"),(function(e){var t=parseInt(e.getAttribute("data-sr-id"));n.active.push(t)}))}catch(e){throw e}m(this.store.elements,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),m(n.stale,(function(t){return delete e.store.elements[t]})),m(this.store.elements,(function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===i.active.indexOf(e.sequence.id)&&i.active.push(e.sequence.id)})),m(this.store.containers,(function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)})),m(r.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),m(this.store.sequences,(function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)})),m(i.stale,(function(t){return delete e.store.sequences[t]}))}var y=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function g(e){var t=window.getComputedStyle(e.node),n=t.position,s=e.config,l={},c=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];l.computed=c?c.map((function(e){return e.trim()})).join("; ")+";":"",l.generated=c.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?l.computed:c.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var d,u,f,h=parseFloat(t.opacity),m=isNaN(parseFloat(s.opacity))?parseFloat(t.opacity):parseFloat(s.opacity),v={computed:h!==m?"opacity: "+h+";":"",generated:h!==m?"opacity: "+m+";":""},p=[];if(parseFloat(s.distance)){var g="top"===s.origin||"bottom"===s.origin?"Y":"X",b=s.distance;"top"!==s.origin&&"left"!==s.origin||(b=/^-/.test(b)?b.substr(1):"-"+b);var w=b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),E=w[0];switch(w[1]){case"em":b=parseInt(t.fontSize)*E;break;case"px":b=E;break;case"%":b="Y"===g?e.node.getBoundingClientRect().height*E/100:e.node.getBoundingClientRect().width*E/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===g?p.push(function(e){var t=i();return t[13]=e,t}(b)):p.push(function(e){var t=i();return t[12]=e,t}(b))}s.rotate.x&&p.push((d=s.rotate.x,u=Math.PI/180*d,(f=i())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),s.rotate.y&&p.push(function(e){var t=Math.PI/180*e,n=i();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(s.rotate.y)),s.rotate.z&&p.push(function(e){var t=Math.PI/180*e,n=i();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}(s.rotate.z)),1!==s.scale&&(0===s.scale?p.push(a(2e-4)):p.push(a(s.scale)));var L={};if(p.length){L.property=y("transform"),L.computed={raw:t[L.property],matrix:o(t[L.property])},p.unshift(L.computed.matrix);var x=p.reduce(r);L.generated={initial:L.property+": matrix3d("+x.join(", ")+");",final:L.property+": matrix3d("+L.computed.matrix.join(", ")+");"}}else L.generated={initial:"",final:""};var j={};if(v.generated||L.generated.initial){j.property=y("transition"),j.computed=t[j.property],j.fragments=[];var T=s.delay,k=s.duration,q=s.easing;v.generated&&j.fragments.push({delayed:"opacity "+k/1e3+"s "+q+" "+T/1e3+"s",instant:"opacity "+k/1e3+"s "+q+" 0s"}),L.generated.initial&&j.fragments.push({delayed:L.property+" "+k/1e3+"s "+q+" "+T/1e3+"s",instant:L.property+" "+k/1e3+"s "+q+" 0s"}),j.computed&&!j.computed.match(/all 0s|none 0s/)&&j.fragments.unshift({delayed:j.computed,instant:j.computed});var O=j.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});j.generated={delayed:j.property+": "+O.delayed+";",instant:j.property+": "+O.instant+";"}}else j.generated={delayed:"",instant:""};return{inline:l,opacity:v,position:n,transform:L,transition:j}}function b(e,t){t.split(";").forEach((function(t){var n=t.split(":"),i=n[0],r=n.slice(1);i&&r&&(e.style[i.trim()]=r.join(":"))}))}function w(e){var n,i=this;try{m(t(e),(function(e){var t=e.getAttribute("data-sr-id");if(null!==t){n=!0;var r=i.store.elements[t];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),b(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete i.store.elements[t]}}))}catch(e){return v.call(this,"Clean failed.",e.message)}if(n)try{p.call(this)}catch(e){return v.call(this,"Clean failed.",e.message)}}function E(){var e=this;m(this.store.elements,(function(e){b(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),m(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function L(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(h(e))return m(t,(function(t){m(t,(function(t,n){h(t)?(e[n]&&h(e[n])||(e[n]={}),L(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function x(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var j,T=(j=0,function(){return j++});function k(){var e=this;p.call(this),m(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),b(e.node,t.filter((function(e){return""!==e})).join(" "))})),m(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function q(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?O.call(this,e,i):t.reset||o?A.call(this,e):void 0}function O(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,b(e.node,n.filter((function(e){return""!==e})).join(" ")),S.call(this,e,t)}function A(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,b(e.node,t.filter((function(e){return""!==e})).join(" ")),S.call(this,e)}function S(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&w.call(n,e.node)}),i-a)}}function I(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return q.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new M(n,"visible",this.store),o=new M(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var a=n.members[r.body[0]],s=this.store.elements[a];if(s)return R.call(this,n,r.body[0],-1,t),R.call(this,n,r.body[0],1,t),q.call(this,s,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return R.call(this,n,i,-1,t),q.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return R.call(this,n,i,1,t),q.call(this,e,{reveal:!0,pristine:t})}}function P(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=T(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function M(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],m(e.members,(function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)})),this.body.length&&m(e.members,(function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))}))}function R(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],a=e.members[t+n],s=this.store.elements[a];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,s&&I.call(r,s,i)}),e.interval)}function N(e,n,i){var r=this;void 0===n&&(n={}),void 0===i&&(i=!1);var o,a=[],s=n.interval||d.interval;try{s&&(o=new P(s));var l=t(e);if(!l.length)throw new Error("Invalid reveal target.");var c=l.reduce((function(e,i){var s={},l=i.getAttribute("data-sr-id");l?(L(s,r.store.elements[l]),b(s.node,s.styles.inline.computed)):(s.id=T(),s.node=i,s.seen=!1,s.revealed=!1,s.visible=!1);var c=L({},s.config||r.defaults,n);if(!c.mobile&&x()||!c.desktop&&!x())return l&&w.call(r,s),e;var d,u=t(c.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(i)?(d=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var i=null;return m(t,(function(t){m(t,(function(t){null===i&&t.node===e&&(i=t.id)}))})),i}(u,a,r.store.containers),null===d&&(d=T(),a.push({id:d,node:u})),s.config=c,s.containerId=d,s.styles=g(s),o&&(s.sequence={id:o.id,index:o.members.length},o.members.push(s.id)),e.push(s),e):e}),[]);m(c,(function(e){r.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(e){return v.call(this,"Reveal failed.",e.message)}m(a,(function(e){r.store.containers[e.id]={id:e.id,node:e.node}})),o&&(this.store.sequences[o.id]=o),!0!==i&&(this.store.history.push({target:e,options:n}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(k.bind(this),0))}function z(){var e=this;m(this.store.history,(function(t){N.call(e,t.target,t.options,!0)})),k.call(this)}var F,C,D,W,Y,$,H,B,U=Math.sign||function(e){return(e>0)-(e<0)||+e};function X(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,a=e.node;do{isNaN(a.offsetTop)||(r+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent}while(a);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function V(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function G(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,a=e.geometry.bounds.bottom-e.geometry.height*n,s=e.geometry.bounds.left+e.geometry.width*n,l=t.geometry.bounds.top+t.scroll.top+i.top,c=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&o>u&&a>l&&s<c||"fixed"===e.styles.position}}function J(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),c((function(){var i="init"===e.type||"resize"===e.type;m(n.store.containers,(function(e){i&&(e.geometry=X.call(n,e,!0));var t=V.call(n,e);e.scroll&&(e.direction={x:U(t.left-e.scroll.left),y:U(t.top-e.scroll.top)}),e.scroll=t})),m(t,(function(e){(i||void 0===e.geometry)&&(e.geometry=X.call(n,e)),e.visible=G.call(n,e)})),m(t,(function(e){e.sequence?I.call(n,e):q.call(n,e)})),n.pristine=!1}))}function K(e){var n;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==K.prototype)return new K(e);if(!K.isSupported())return v.call(this,"Instantiation failed.","This browser is not supported."),f();try{n=L({},$||d,e)}catch(e){return v.call(this,"Invalid configuration.",e.message),f()}try{if(!t(n.container)[0])throw new Error("Invalid container.")}catch(e){return v.call(this,e.message),f()}return!($=n).mobile&&x()||!$.desktop&&!x()?(v.call(this,"This device is disabled.","desktop: "+$.desktop,"mobile: "+$.mobile),f()):(u(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,F=F||J.bind(this),C=C||E.bind(this),D=D||N.bind(this),W=W||w.bind(this),Y=Y||z.bind(this),Object.defineProperty(this,"delegate",{get:function(){return F}}),Object.defineProperty(this,"destroy",{get:function(){return C}}),Object.defineProperty(this,"reveal",{get:function(){return D}}),Object.defineProperty(this,"clean",{get:function(){return W}}),Object.defineProperty(this,"sync",{get:function(){return Y}}),Object.defineProperty(this,"defaults",{get:function(){return $}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),B||(B=this))}K.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(K,"debug",{get:function(){return H||!1},set:function(e){return H="boolean"==typeof e?e:H}}),K();const Q=K;var Z,_,ee,te,ne,ie,re,oe,ae,se=document.querySelector(".navbar-menu"),le=document.querySelectorAll(".navbar-link"),ce=document.querySelector(".navbar-content"),de=document.querySelector("#toggle-menu"),ue=function(){var e;(e=document.querySelectorAll("#toggle-menu i")).length&&e.forEach((function(e){return e.classList.toggle("hidden")})),null==se||se.classList.toggle("hidden"),null==ce||ce.classList.toggle("change-color")};de&&le.length&&(de.addEventListener("click",(function(){ue()})),le.forEach((function(e){return e.addEventListener("click",(function(){ue()}))})));var fe=document.querySelectorAll(".banner-item"),he=document.querySelectorAll(".banner-text"),me=null!==(Z=null==fe?void 0:fe.length)&&void 0!==Z?Z:0,ve=getComputedStyle(document.documentElement).getPropertyValue("--banner-animation-time").trim(),pe=1e3*parseFloat(ve.replace("s","")),ye=0,ge="fade-banner",be="fade-banner-text";null===(_=fe[ye])||void 0===_||_.classList.add(ge),null===(ee=he[ye])||void 0===ee||ee.classList.add(be);var we=setInterval((function(){var e=ye+1;ye=e>=me?0:e,null==fe||fe.forEach((function(e){return e.classList.remove(ge)})),null==he||he.forEach((function(e){return e.classList.remove(be)})),setTimeout((function(){var e,t;null===(e=fe[ye])||void 0===e||e.classList.add(ge),null===(t=he[ye])||void 0===t||t.classList.add(be)}),200)}),pe);window.addEventListener("beforeunload",(function(){clearInterval(we)}));var Ee=document.querySelector(".testimonial-items"),Le=document.querySelectorAll(".testimonial-item"),xe=Le.length,je="highlight",Te="less-highlight",ke=function(){var e,t,n=Math.floor(xe/2),i=null!==(t=null===(e=Le[n])||void 0===e?void 0:e.offsetWidth)&&void 0!==t?t:0;Ee.style.left=xe%2==0?"calc(".concat(2*i,"px + 100px)"):"calc(".concat(3*i,"px - 75px)")},qe=function(){var e,t;Oe(),Le=document.querySelectorAll(".testimonial-item"),Ae();var n=Math.floor(xe/2),i=n-1,r=n+1;Le[i]&&Le[i].classList.add(Te),Le[n]&&Le[n].classList.add(je),Le[r]&&Le[r].classList.add(Te);var o=null!==(t=null===(e=Le[n])||void 0===e?void 0:e.offsetWidth)&&void 0!==t?t:0;Ee.style.left="-calc(".concat(o,"px + 25px)")},Oe=function(){var e=Le[0];Ee.appendChild(e)},Ae=function(){Le.forEach((function(e){e.classList.remove(je,Te)}))};if(Ee&&xe>0){ke(),qe();var Se=setInterval(qe,1e4);window.addEventListener("beforeunload",(function(){clearInterval(Se)})),window.addEventListener("resize",(function(){ke()}))}var Ie=null!==(ne=null===(te=document.querySelectorAll(".about-item"))||void 0===te?void 0:te.length)&&void 0!==ne?ne:0,Pe=null!==(re=null===(ie=document.querySelectorAll(".feature-item"))||void 0===ie?void 0:ie.length)&&void 0!==re?re:0,Me=function(e,t,n){for(var i=0;i<e;i++)Q().reveal(".".concat(t,":nth-child(").concat(i+1,")"),{reset:!0,opacity:0,duration:1500,delay:n*(i+1)})};Me(Ie,"about-item",50),Me(Pe,"feature-item",75),Q().reveal("#contact",{reset:!1,duration:2e3,delay:200,origin:"bottom",distance:"20%",opacity:0}),Me(null!==(ae=null===(oe=document.querySelectorAll(".benefit-item"))||void 0===oe?void 0:oe.length)&&void 0!==ae?ae:0,"benefit-item",150)})();