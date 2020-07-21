(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],v=0,d=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1872:function(e,t,a){"use strict";var n=a("8161"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ab8b");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("SideBar",[a("router-view")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"sidebar"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/list"}},[e._v(" Bought Items Page ")])],1),a("li",[a("router-link",{attrs:{to:"/received"}},[e._v(" Received List Page ")])],1)])])]),a("div",{staticClass:"content"},[e._t("default")],2)],1)])},o=[],c={methods:{},computed:{}},l=c,u=(a("1872"),a("2877")),v=Object(u["a"])(l,i,o,!1,null,null,null),d=v.exports,m={name:"app",components:{SideBar:d},data:function(){return{}},methods:{}},f=m,h=Object(u["a"])(f,r,s,!1,null,null,null),p=h.exports,b=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("nav",{staticClass:"navbar navbar-default navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container-fluid collapse navbar-collapse"},[a("div",{staticClass:"navbar-nav"},e._l(e.tabs,(function(t,n){return a("span",{key:n,staticClass:"nav-item nav-link",class:{active:t.isActive},on:{click:function(a){return e.selectTab(t)}}},[e._v(e._s(t.name))])})),0)])]),a("div",{staticClass:"container-fluid"},[a("ItemList",{attrs:{name:"Item List",selected:!0}}),a("Stores",{attrs:{name:"Stores",selected:!1}})],1)])])},g=[],y=(a("4160"),a("b0c0"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"container"},[a("h1",[e._v("Items")]),a("table",{staticClass:"table"},[e._m(0),a("tbody",e._l(e.items,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.store))]),a("td",[e._v(e._s(t.price))]),a("td",[e._v(e._s(t.date))]),e.isReceived?e._e():a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return e.received(t)}}},[e._v("Received")])]),e.isReceived?a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return e.remove(t)}}},[e._v("Remove")])]):e._e()])})),0)])])}),C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Item Name")]),a("th",[e._v("Online Store")]),a("th",[e._v("Price")]),a("th",[e._v("Delivery EST Date")])])])}],I={props:{name:{required:!0},selected:{default:!1},isReceived:{default:!1}},data:function(){return{isActive:!1}},mounted:function(){this.isActive=this.selected},computed:{items:function(){var e=this.$store.getters.getItemToItemList;return this.isReceived&&(e=this.$store.getters.getReceivedItems),this.sortedByDateItems(e)}},methods:{received:function(e){this.$store.commit("received",e)},remove:function(e){this.$store.commit("remove",e)},sortedByDateItems:function(e){var t=e,a=t.sort((function(e,t){var a=new Date(e.date).getTime(),n=new Date(t.date).getTime();return a>=n?1:-1}));return a}}},S=I,w=Object(u["a"])(S,y,C,!1,null,null,null),R=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"container"},[a("h1",[e._v("Stores")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 form-group container"},[a("label",{attrs:{for:"rate"}},[e._v("Calculate by rate:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.myRate,expression:"myRate"}],staticClass:"form-control select-responsive",attrs:{id:"rate"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.myRate=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""},domProps:{value:e.myRate}},[e._v(e._s(e.myRate))]),e._l(e.exchangeRate,(function(t,n){return a("option",{key:n,domProps:{value:n}},[e._v(e._s(n))])}))],2)])]),a("table",{staticClass:"table"},[e._m(0),a("tbody",[e._l(e.stores,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(n))]),a("td",[e._v(e._s(t))])])})),a("tr",[e._m(1),a("td",[a("b",[e._v(e._s(e.storesTotalSum)+" ("+e._s(e.myRate)+")")])])])],2)])])},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Store Name")]),a("th",[e._v("Sum Items from Store")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("b",[e._v("Total:")])])}],O={props:{name:{required:!0},selected:{default:!1}},data:function(){return{isActive:!1,exchangeRate:{},myRate:"1"}},mounted:function(){this.isActive=this.selected,this.getCurrencyDataFromServer()},computed:{stores:function(){return this.$store.getters.getStores},storesTotalSum:function(){var e=this.$store.getters.getStoresTotalSum;return this.exchangeRate[this.myRate]&&(e*=parseFloat(this.exchangeRate[this.myRate])),e}},methods:{getCurrencyDataFromServer:function(){var e=this;this.axios.get("https://api.exchangeratesapi.io/latest").then((function(t){e.exchangeRate=t.data.rates,e.myRate=t.data.base})).catch((function(e){e&&alert("cannot get exchange rate API")}))}}},$=O,k=(a("5896"),Object(u["a"])($,x,P,!1,null,null,null)),E=k.exports,T={name:"BoughtItemsPage",components:{ItemList:R,Stores:E},data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(e){this.tabs.forEach((function(t){t.isActive=t.name===e.name}))}}},j=T,A=Object(u["a"])(j,_,g,!1,null,null,null),L=A.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("nav",{staticClass:"navbar navbar-default navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container-fluid collapse navbar-collapse"},[a("div",{staticClass:"navbar-nav"},e._l(e.tabs,(function(t,n){return a("span",{key:n,staticClass:"nav-item nav-link",class:{active:t.isActive},on:{click:function(a){return e.selectTab(t)}}},[e._v(e._s(t.name))])})),0)])]),a("div",{staticClass:"container-fluid"},[a("ItemList",{attrs:{name:"Item List",selected:!0,isReceived:!0}}),a("Stores",{attrs:{name:"Stores",selected:!1}})],1)])])},B=[],N={name:"ReceivedListPage",components:{ItemList:R,Stores:E},data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(e){this.tabs.forEach((function(t){t.isActive=t.name===e.name}))}}},F=N,M=Object(u["a"])(F,D,B,!1,null,null,null),z=M.exports,q=[{path:"/",component:L},{path:"/list",component:L},{path:"/received",component:z}],J=q;n["a"].use(b["a"]);var G=new b["a"]({routes:J,linkActiveClass:"active"}),H=G,K=(a("a434"),a("2f62"));n["a"].use(K["a"]);var Q={receivedItems:[],stores:["amazon","ebay"],items:[{name:"iPhone 11",store:"amazon",price:"23.56",date:"01/12/2020",id:"1"},{name:"iPhone 12",store:"ebay",price:"29.55",date:"02/25/2020",id:"2"},{name:"iPhone 10",store:"ebay",price:"29.55",date:"02/23/2020",id:"3"},{name:"iPhone 10",store:"amazon",price:"29.55",date:"02/12/2020",id:"4"},{name:"shiomi",store:"walla",price:"291.55",date:"02/11/2020",id:"5"},{name:"iPhone 6",store:"ebay",price:"277.5775",date:"07/12/2020",id:"6"},{name:"bamba",store:"ebay",price:"297.5577",date:"05/12/2020",id:"7"}]},U={received:function(e,t){e.receivedItems.push(t)},remove:function(e,t){for(var a=-1,n=0;n<e.receivedItems.length;n++)t.id==e.receivedItems[n].id&&(a=n);return a>-1&&e.receivedItems.splice(a,1),e.receivedItems}},V={getItemToItemList:function(e){var t=[];return e.receivedItems.length<1?e.items:(e.items.forEach((function(a){var n=!1;e.receivedItems.forEach((function(e){a.id==e.id&&(n=!0)})),n||t.push(a)})),t)},getStores:function(e){var t={};return e.stores.forEach((function(e){t[e]=0})),e.receivedItems.forEach((function(e){t[e.store]++})),t},getStoresTotalSum:function(e){var t=0;return e.receivedItems.forEach((function(e){t+=parseFloat(e.price)})),t},getReceivedItems:function(e){return e.receivedItems}},W=new K["a"].Store({state:Q,mutations:U,getters:V}),X=a("bc3a"),Y=a.n(X),Z=a("a7fe"),ee=a.n(Z);n["a"].use(ee.a,Y.a),n["a"].config.productionTip=!1,new n["a"]({store:W,router:H,render:function(e){return e(p)}}).$mount("#app")},5896:function(e,t,a){"use strict";var n=a("c7f8"),r=a.n(n);r.a},8161:function(e,t,a){},c7f8:function(e,t,a){}});
//# sourceMappingURL=app.bce02797.js.map