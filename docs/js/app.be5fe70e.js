(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],f=0,l=[];f<c.length;f++)o=c[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"3ff6cc59":"5e297325","4b47640d":"21cfc388",eafc21f2:"1b5c33fc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"3ff6cc59":1,eafc21f2:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"3ff6cc59":"d9c9b07d","4b47640d":"31d6cfe0",eafc21f2:"64a8bb7c"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],s=c.getAttribute("data-href");if(s===r||s===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,f.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/quasar-kanban/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;i.push([0,"vendor"]),n()})({0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var r=n("fb1c"),o=n.n(r);o.a},"1e5d":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addItem",function(){return T}),n.d(r,"removeItem",function(){return B}),n.d(r,"updateItems",function(){return M}),n.d(r,"initStore",function(){return $});n("a114"),n("d14b"),n("1e5d"),n("7e6d");var o=n("2b0e"),a=n("e84f"),i=n("7051"),c=n("46a9"),u=n("32a1"),s=n("7646"),f=n("6580"),l=n("3a08"),d=n("6ddb"),p=n("5d8b"),g=n("482e"),v=n("4bf4"),h=n("1526"),b=n("133b"),m=n("6780");o["a"].use(a["a"],{config:{},components:{QLayout:i["a"],QPageContainer:c["a"],QPage:u["a"],QCard:s["a"],QCardTitle:f["a"],QCardMain:l["a"],QCardActions:d["a"],QInput:p["a"],QBtn:g["a"],QChip:v["a"]},directives:{Ripple:h["a"]},plugins:{Notify:b["a"],Dialog:m["a"]}});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-grey-4",attrs:{id:"q-app"}},[n("q-layout",[n("navigation"),n("q-page-container",[n("router-view")],1)],1)],1)},w=[];y._withStripped=!0;var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col q-mt-md"},[n("q-btn",{staticClass:"q-mr-md",attrs:{label:"Backlog",color:"secondary",outline:!e.isPath("/backlog")},on:{click:function(t){e.$router.push("/backlog")}}}),n("q-btn",{attrs:{label:"Board",color:"secondary",outline:!e.isPath("/board")},on:{click:function(t){e.$router.push("/board")}}})],1)])},k=[];S._withStripped=!0;var P={name:"Navigation",methods:{isPath:function(e){return this.$route.path===e}}},O=P,j=n("2877"),_=Object(j["a"])(O,S,k,!1,null,null,null);_.options.__file="Navigation.vue";var C=_.exports,x={name:"App",components:{Navigation:C},created:function(){this.$store.commit("app/initStore")}},q=x,E=(n("034f"),Object(j["a"])(q,y,w,!1,null,null,null));E.options.__file="App.vue";var N=E.exports,A=n("2f62"),I={items:{todo:[],inProgress:[],done:[]},nextId:1},Q=n("43a3");n("20d6"),n("ac6a"),n("f751");function T(e,t){e.items.todo.push(Object.assign(t,{id:e.nextId})),e.nextId+=1}function B(e,t){[e.items.todo,e.items.inProgress,e.items.done].forEach(function(e){var n=e.findIndex(function(e){return e.id===t.id});n>-1&&e.splice(n,1)})}function M(e,t){var n=t.items,r=t.id;e.items[r]=n}function $(){var e=localStorage.getItem("boardState");e&&this.replaceState(Object.assign(this.state,JSON.parse(e)))}var L=n("e048"),J={namespaced:!0,state:I,getters:Q,mutations:r,actions:L},D=function(e){e.subscribe(function(e,t){localStorage.setItem("boardState",JSON.stringify(t))})};o["a"].use(A["a"]);var R=new A["a"].Store({plugins:[D],modules:{app:J}}),z=R,F=n("8c4f"),G=[{path:"*",redirect:"/backlog"},{path:"/backlog",component:function(){return n.e("eafc21f2").then(n.bind(null,"1013"))}},{path:"/board",component:function(){return n.e("3ff6cc59").then(n.bind(null,"91ea"))}}];G.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var H=G;o["a"].use(F["a"]);var K=function(){var e=new F["a"]({scrollBehavior:function(){return{y:0}},routes:H,mode:"hash",base:"/quasar-kanban/"});return e},U=function(){var e="function"===typeof z?z():z,t="function"===typeof K?K({store:e}):K;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(N)}};return{app:n,store:e,router:t}},V=n("9483");Object(V["a"])("/quasar-kanban/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var W=n("fe3c"),X=n.n(W),Y=U(),Z=Y.app;Y.store,Y.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){X.a.attach(document.body)},!1),new o["a"](Z)},"43a3":function(e,t){},"7e6d":function(e,t,n){},e048:function(e,t){},fb1c:function(e,t,n){}});