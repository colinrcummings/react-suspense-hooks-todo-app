(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},108:function(e,t){},110:function(e,t){},145:function(e,t){},146:function(e,t){},199:function(e,t,n){"use strict";n.r(t);n(95);var r=n(1),a=n.n(r),o=n(14),c=n.n(o),u=(n(101),n(52)),s=n(51),i=n(50),l=n(89),d=a.a.lazy(function(){return n.e(1).then(n.bind(null,202))}),p=a.a.lazy(function(){return n.e(2).then(n.bind(null,204))}),f=a.a.lazy(function(){return n.e(3).then(n.bind(null,203))});var v=function(){return a.a.createElement(r.Suspense,{maxDuration:500,fallback:a.a.createElement(l.a,null)},a.a.createElement(i.d,null,a.a.createElement(s.b,null,a.a.createElement(d,{path:"".concat("/react-suspense-hooks-todo-app","/")}),a.a.createElement(p,{path:"".concat("/react-suspense-hooks-todo-app","/details/:id")}),a.a.createElement(f,{path:"".concat("/react-suspense-hooks-todo-app","/create")}))))};var m=function(){return a.a.createElement(u.a,null,a.a.createElement(v,null))};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(m,null))},52:function(e,t,n){"use strict";var r=n(11),a=n.n(r),o=n(18),c=n(21),u=n(90),s=n(1),i=n.n(s),l=n(93),d=n(19),p=function(){var e=function(e){var t=localStorage.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch(n){return null}}("TODOS");return e?(console.log("\ud83d\udcda `todos` loaded from local storage."),JSON.parse(e)):null},f=function(e){var t,n;console.log("\ud83d\udcda `todos` set to local storage."),t="TODOS",n=JSON.stringify(e),localStorage.setItem(t,JSON.stringify(n))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.min,n=void 0===t?100:t,r=e.max,a=void 0===r?1600:r;return Math.floor(Math.random()*(a-n+1)+n)}();return console.log("     - delay was ".concat(e," ms")),new Promise(function(t){return setTimeout(t,e)})},m=[{id:Object(d.v4)(),text:"Try Suspense",completed:!0,createdAt:1541163993401,createdBy:"colin",updatedAt:1541163996938,updatedBy:"colin"},{id:Object(d.v4)(),text:"Try Hooks",completed:!0,createdAt:1541163995178,createdBy:"colin",updatedAt:1541163996938,updatedBy:"colin"},{id:Object(d.v4)(),text:"Profit",completed:!1,createdAt:1541163996071,createdBy:"colin",updatedAt:1541163996071,updatedBy:"colin"}],O={todos:{list:function(){var e=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=p())){e.next=3;break}return e.abrupt("return",t);case 3:return console.log("\ud83d\udcde `api.todos.list` called:"),e.next=6,v();case 6:return f(m),e.abrupt("return",m);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\udcde api.todos.create called:"),n=(new Date).getTime(),"user",r=Object(c.a)({},t,{id:Object(d.v4)(),createdAt:n,createdBy:"user",updatedAt:n,updatedBy:"user"}),o=p(),f(Object(l.a)(o).concat([r])),e.next=8,v();case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}};n.d(t,"a",function(){return b});var h={isLoading:!0,error:null,todos:null},y=i.a.createContext(null),b=function(e){var t=e.children,n=Object(s.useReducer)(function(e,t){switch(t.type){case"FETCH_TODO_LIST_SUCCESS":return Object(c.a)({},e,{isLoading:!1,error:null,todos:t.payload.todos});case"FETCH_TODO_LIST_ERROR":return Object(c.a)({},e,{isLoading:!1,error:t.payload.error,todos:null});default:return e}},h),r=Object(u.a)(n,2),l=r[0],d=r[1],p=function(){var e=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.todos.list();case 3:t=e.sent,d({type:"FETCH_TODO_LIST_SUCCESS",payload:{todos:t}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d({type:"FETCH_TODO_LIST_ERROR",payload:{error:e.t0}});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)(function(){p()},[]);var f=function(){var e=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.todos.create(t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:return e.next=10,p();case 10:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(y.Provider,{value:Object(c.a)({},l,{getTodoById:function(e){var t=l.todos;return t?t.find(function(t){return t.id===e}):null},createTodo:f})},t)};y.Consumer,t.b=y},89:function(e,t,n){"use strict";var r=n(1),a=n.n(r);t.a=function(e){var t=e.resourceName,n=void 0===t?null:t;return a.a.createElement("p",{className:"text-center text-muted"},n?"Loading ".concat(n,"..."):"Loading...")}},94:function(e,t,n){e.exports=n(199)}},[[94,5,4]]]);
//# sourceMappingURL=main.2677fc66.chunk.js.map