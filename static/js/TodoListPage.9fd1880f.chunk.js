(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(e,t){},202:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n(11),u=n(72),d=n(71),i=n(69),l=n(12),s=n(70),p=function(e){var t=e.id,n=e.text,a=e.completed;return r.a.createElement(c.e,{className:"text-center"},r.a.createElement("h4",null,n," ",r.a.createElement(s.a,{completed:a})),r.a.createElement(l.a,{to:"".concat("/react-suspense-hooks-todo-app","/details/").concat(t)},"Details"))},f=function(e){var t=e.todos;return r.a.createElement(c.d,null,t.map(function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))},m=Object(u.unstable_createResource)(d.a.todos.list),v=function(){return Object(i.a)("Todos"),r.a.createElement(c.f,null,r.a.createElement(c.b,{xs:12},r.a.createElement(f,{todos:m.read()})))};t.default=function(){return r.a.createElement(c.f,{className:"text-center"},r.a.createElement(c.b,{xs:12},r.a.createElement("h2",null,"Todos"),r.a.createElement("hr",null)),r.a.createElement(c.b,{xs:12},r.a.createElement(a.Suspense,{maxDuration:1e3,fallback:r.a.createElement(o.a,{resourceName:"todo list"})},r.a.createElement(v,null))))}},69:function(e,t,n){"use strict";var a=n(1);t.a=function(e){Object(a.useEffect)(function(){document.title=e},[e])}},70:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(10);t.a=function(e){var t=e.completed;return r.a.createElement(c.a,{color:t?"success":"danger"},t?"Completed":"Not Completed")}},71:function(e,t,n){"use strict";var a=n(73),r=n.n(a),c=n(115),o=n(74),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.min,n=void 0===t?100:t,a=e.max,r=void 0===a?1600:a;return Math.floor(Math.random()*(r-n+1)+n)}();return console.log("     - delay was ".concat(e," ms")),new Promise(function(t){return setTimeout(t,e)})},d=n(75),i=[{id:Object(d.v4)(),text:"Try Suspense",completed:!0,createdAt:1541163993401,createdBy:"colin",updatedAt:1541163996938,updatedBy:"colin"},{id:Object(d.v4)(),text:"Try Hooks",completed:!0,createdAt:1541163995178,createdBy:"colin",updatedAt:1541163996938,updatedBy:"colin"},{id:Object(d.v4)(),text:"Profit",completed:!1,createdAt:1541163996071,createdBy:"colin",updatedAt:1541163996071,updatedBy:"colin"}],l={todos:{list:function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\udcde api.todos.list called:"),e.next=3,u();case 3:return e.abrupt("return",i.map(function(e){e.createdAt,e.createdBy,e.updatedAt,e.updatedBy;return Object(c.a)(e,["createdAt","createdBy","updatedAt","updatedBy"])}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),get:function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\udcde api.todos.get called for id ".concat(t,":")),e.next=3,u();case 3:return e.abrupt("return",i.find(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}};t.a=l},80:function(e,t){},81:function(e,t){},99:function(e,t){}}]);
//# sourceMappingURL=TodoListPage.9fd1880f.chunk.js.map