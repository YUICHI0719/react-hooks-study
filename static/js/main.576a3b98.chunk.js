(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),o=n(2),u=(n(13),Object(a.createContext)()),E=function(){var e=Object(a.useContext)(u),t=e.state,n=e.dispatch,r=Object(a.useState)(""),c=Object(o.a)(r,2),E=c[0],m=c[1],i=Object(a.useState)(""),d=Object(o.a)(i,2),s=d[0],b=d[1],f=""===E||""===s;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"TODO\u7ba1\u7406"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"formEventTitle"},"\u30bf\u30a4\u30c8\u30eb"),l.a.createElement("input",{className:"form-control",id:"formEventTitle",value:E,onChange:function(e){return m(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"formEventBody"},"\u8a73\u7d30"),l.a.createElement("textarea",{className:"form-control",id:"formEventBody",value:s,onChange:function(e){return b(e.target.value)}})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n({type:"CREATE_EVENT",title:E,body:s}),m(""),b("")},disabled:f},"TODO\u3092\u4f5c\u6210\u3059\u308b"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),window.confirm("\u5168\u3066\u306eTODO\u3092\u672c\u5f53\u306b\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")&&n({type:"DELETE_ALL_EVENTS"})},disabled:0===t.length},"\u5168\u3066\u306eTODO\u3092\u524a\u9664\u3059\u308b")))},m=function(e){var t=e.event,n=Object(a.useContext)(u).dispatch,r=t.id;return l.a.createElement("tr",null,l.a.createElement("td",null,r),l.a.createElement("td",null,t.title),l.a.createElement("td",null,t.body),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){window.confirm("ID:".concat(r," \u306eTODO\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f"))&&n({type:"DELETE_EVENT",id:r})}},"\u524a\u9664")))},i=function(){var e=Object(a.useContext)(u).state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"TODO \u4e00\u89a7"),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"\u30bf\u30a4\u30c8\u30eb"),l.a.createElement("th",null,"\u8a73\u7d30"))),l.a.createElement("tbody",null,e.map(function(e,t){return l.a.createElement(m,{key:t,event:e})}))))},d=n(7),s=n(6),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_EVENT":var n={title:t.title,body:t.body},a=e.length,l=0===a?1:e[a-1].id+1;return[].concat(Object(s.a)(e),[Object(d.a)({id:l},n)]);case"DELETE_EVENT":return e.filter(function(e){return e.id!==t.id});case"DELETE_ALL_EVENTS":return[];default:return e}},f=function(){var e=Object(a.useReducer)(b,[]),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement(u.Provider,{value:{state:n,dispatch:r}},l.a.createElement("div",{className:"container"},l.a.createElement(E,null),l.a.createElement(i,null)))};c.a.render(l.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.576a3b98.chunk.js.map