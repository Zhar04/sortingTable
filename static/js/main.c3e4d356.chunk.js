(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),i=n.n(a),o=n(5),l=n(6),u=(n(12),function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=c.a.useState(t),r=Object(l.a)(n,2),a=r[0],i=r[1];return{items:c.a.useMemo(function(){var t=Object(o.a)(e);return null!==a&&t.sort(function(e,t){return e[a.key]<t[a.key]?"ascending"===a.direction?-1:1:e[a.key]>t[a.key]?"ascending"===a.direction?1:-1:0}),t},[e,a]),requestSort:function(e){var t="ascending";a&&a.key===e&&"ascending"===a.direction&&(t="descending"),i({key:e,direction:t})},sortConfig:a}}(e.products),n=t.items,r=t.requestSort,a=t.sortConfig,i=function(e){if(a)return a.key===e?a.direction:void 0};return c.a.createElement("table",null,c.a.createElement("caption",null,"Products"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("button",{type:"button",onClick:function(){return r("name")},className:i("name")},"Name")),c.a.createElement("th",null,c.a.createElement("button",{type:"button",onClick:function(){return r("price")},className:i("price")},"Price")),c.a.createElement("th",null,c.a.createElement("button",{type:"button",onClick:function(){return r("stock")},className:i("stock")},"In Stock")))),c.a.createElement("tbody",null,n.map(function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.name),c.a.createElement("td",null,"$",e.price),c.a.createElement("td",null,e.stock))})))});function s(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,{products:[{id:1,name:"Cheese",price:4.9,stock:20},{id:2,name:"Milk",price:1.9,stock:32},{id:3,name:"Yoghurt",price:2.4,stock:12},{id:4,name:"Heavy Cream",price:3.9,stock:9},{id:5,name:"Butter",price:.9,stock:99},{id:6,name:"Sour Cream ",price:2.9,stock:86},{id:7,name:"Fancy French Cheese \ud83c\uddeb\ud83c\uddf7",price:99,stock:12}]}))}var m=document.getElementById("root");i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),m)},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c3e4d356.chunk.js.map