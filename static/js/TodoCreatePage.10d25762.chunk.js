(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{205:function(e,t,n){"use strict";var a=n(7),c=n.n(a),r=n(12),l=n(56),o=n(1),u=n.n(o),i=n(53),s=n(52),m=n(22);t.a=function(e){var t=e.id,n=void 0===t?null:t,a=e.initialText,d=void 0===a?"":a,b=e.initialCompleted,p=void 0!==b&&b,f=e.onSubmit,E=Object(o.useState)(d),h=Object(l.a)(E,2),v=h[0],x=h[1],j=Object(o.useState)(p),O=Object(l.a)(j,2),g=O[0],k=O[1],w=Object(o.useState)(null),C=Object(l.a)(w,2),S=C[0],y=C[1];return u.a.createElement("div",null,S&&u.a.createElement("p",{className:"text-danger"},"Error: ",S),u.a.createElement(s.e,{onSubmit:function(){var e=Object(r.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f({id:n,values:{text:v,completed:g}}).then(function(){return Object(i.c)(Object(m.a)("/"))}).catch(function(e){var t=e.message;return y(t)});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},u.a.createElement(s.f,null,u.a.createElement(s.h,{for:"text"},"Text"),u.a.createElement(s.g,{type:"text",id:"test",name:"text",value:v,onChange:function(e){return x(e.target.value)}})),u.a.createElement(s.f,null,u.a.createElement(s.h,{for:"completed"},"Completed"),u.a.createElement(s.g,{type:"checkbox",id:"completed",name:"completed",checked:g,onChange:function(e){return k(e.target.checked)},style:{position:"static",display:"block",marginLeft:0}})),u.a.createElement(s.f,null,u.a.createElement(s.b,{type:"submit",outline:!0,color:"success",size:"sm"},"Submit")," ",u.a.createElement(i.a,{to:Object(m.a)("/")},u.a.createElement(s.b,{outline:!0,color:"danger",size:"sm"},"Cancel")))))}},206:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(52),l=n(54),o=n(205);t.default=function(){var e=Object(a.useContext)(l.b).createTodo;return c.a.createElement(r.k,null,c.a.createElement(r.c,{xs:12},c.a.createElement("h1",{className:"text-center"},"Create Todo"),c.a.createElement("hr",null)),c.a.createElement(r.c,{xs:12},c.a.createElement(o.a,{onSubmit:e})))}}}]);
//# sourceMappingURL=TodoCreatePage.10d25762.chunk.js.map