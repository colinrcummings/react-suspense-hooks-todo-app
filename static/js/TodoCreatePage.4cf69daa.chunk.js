(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(50),o=n(52),l=n(11),u=n.n(l),s=n(18),i=n(90),m=n(51),p=function(e){var t=e.initialText,n=void 0===t?"":t,o=e.initialCompleted,l=void 0!==o&&o,p=e.onSubmit,d=Object(a.useState)(n),b=Object(i.a)(d,2),f=b[0],E=b[1],h=Object(a.useState)(l),x=Object(i.a)(h,2),v=x[0],g=x[1],k=Object(a.useState)(null),j=Object(i.a)(k,2),O=j[0],w=j[1];return c.a.createElement("div",null,O&&c.a.createElement("p",{className:"text-danger"},"Error: ",O),c.a.createElement(r.e,{onSubmit:function(){var e=Object(s.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p({text:f,completed:v}).then(function(){Object(m.c)("".concat("/react-suspense-hooks-todo-app","/"))}).catch(function(e){return w(e.message)});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},c.a.createElement(r.f,null,c.a.createElement(r.h,{for:"text"},"Text"),c.a.createElement(r.g,{type:"text",id:"test",name:"text",value:f,onChange:function(e){return E(e.target.value)}})),c.a.createElement(r.f,null,c.a.createElement(r.h,{for:"completed"},"Completed"),c.a.createElement(r.g,{type:"checkbox",id:"completed",name:"completed",checked:v,onChange:function(e){return g(e.target.checked)},style:{position:"static",display:"block",marginLeft:0}})),c.a.createElement(r.f,null,c.a.createElement(r.b,{type:"submit",outline:!0,color:"success",size:"sm"},"Submit")," ",c.a.createElement(m.a,{to:"".concat("/react-suspense-hooks-todo-app","/")},c.a.createElement(r.b,{outline:!0,color:"danger",size:"sm"},"Cancel")))))};t.default=function(){var e=Object(a.useContext)(o.b).createTodo;return c.a.createElement(r.k,null,c.a.createElement(r.c,{xs:12,className:"text-center"},c.a.createElement("h2",null,"Create Todo"),c.a.createElement("hr",null)),c.a.createElement(r.c,{xs:12},c.a.createElement(p,{onSubmit:e})))}}}]);
//# sourceMappingURL=TodoCreatePage.4cf69daa.chunk.js.map