(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{202:function(e,t,a){"use strict";var n=a(1);t.a=function(e){Object(n.useEffect)(function(){document.title=e},[e])}},203:function(e,t,a){"use strict";var n=a(1),l=a.n(n),c=a(52);t.a=function(e){var t=e.completed;return l.a.createElement("small",{style:{display:"block"}},l.a.createElement(c.a,{color:t?"success":"danger"},t?"Completed":"Not Completed"))}},204:function(e,t,a){"use strict";var n=a(1),l=a.n(n),c=a(53),r=a(52),o=a(22);t.a=function(e){var t=e.id;return l.a.createElement(r.k,{className:"text-center"},l.a.createElement(r.c,{xs:12},l.a.createElement("h1",null,"Todo Not Found"),l.a.createElement("hr",null)),l.a.createElement(r.c,{xs:12},l.a.createElement("p",{className:" text-danger"},'A todo does not exist with id "',t,'".')),l.a.createElement(r.c,{xs:12},l.a.createElement(c.a,{to:Object(o.a)("/")},"All Todos")))}},209:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a.n(n),c=a(12),r=a(1),o=a.n(r),u=a(53),m=a(52),s=a(54),d=a(55),i=a(204),E=a(203),p=a(48),f=function(e){var t=e.todo,a=t.createdAt,n=t.createdBy,l=t.updatedAt,c=t.updatedBy;return o.a.createElement(m.l,{bordered:!0,size:"sm",className:"text-center"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Action"),o.a.createElement("th",null,"Date"),o.a.createElement("th",null,"User"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Create"),o.a.createElement("td",null,Object(p.a)(a)),o.a.createElement("td",null,n)),o.a.createElement("tr",null,o.a.createElement("td",null,"Update"),o.a.createElement("td",null,Object(p.a)(l)),o.a.createElement("td",null,c))))},b=a(202),x=a(22);t.default=function(e){var t=e.id,a=Object(r.useContext)(s.b),n=a.isLoading,p=a.getTodoById,h=a.deleteTodo,v=p(t);Object(b.a)(v?'Details for "'.concat(v.text,'" todo'):"Todo Not Found");var j=function(){var e=Object(c.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t).then(function(){return Object(u.c)(Object(x.a)("/"))}).catch(function(e){var t=e.message;return alert("Error deleting todo: ".concat(t))});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();if(!n&&!v)return o.a.createElement(i.a,{id:t});if(n)return o.a.createElement(m.k,null,o.a.createElement(m.c,{xs:12},o.a.createElement(d.a,null)));var k=v.text,O=v.completed;return o.a.createElement(m.k,null,o.a.createElement(m.c,{xs:12,className:"text-center"},o.a.createElement("h1",null,k," ",o.a.createElement(E.a,{completed:O})),o.a.createElement(u.a,{to:Object(x.a)("/update/".concat(t))},"Update"),o.a.createElement("span",{className:"text-muted"}," | "),o.a.createElement("button",{type:"button",className:"look-like-a-link",onClick:j},"Delete"),o.a.createElement("hr",null)),o.a.createElement(m.c,{xs:12,className:"text-center"},o.a.createElement(f,{todo:v}),o.a.createElement(u.a,{to:Object(x.a)("/")},"All Todos")))}}}]);
//# sourceMappingURL=TodoDetailsPage.bae618df.chunk.js.map