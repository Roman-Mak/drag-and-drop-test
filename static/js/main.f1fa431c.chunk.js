(this["webpackJsonpdrag-and-drop-test"]=this["webpackJsonpdrag-and-drop-test"]||[]).push([[0],{16:function(n,t,e){},17:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var c=e(0),a=e.n(c),r=e(2),o=e.n(r),i=(e(16),e(3)),d=e(11),l=e(10),s=e(6),u=(e(17),e(1)),b=["1","2","3","4","5","6","7","8","9","10"],f=["a","b","c","d","e","f","g","h","i","j"],h=function n(t,e,c,a){for(var r="".concat(e[Math.floor(Math.random()*e.length)]).concat(t[Math.floor(Math.random()*t.length)]),o=0;o<c.length;o++)if(r===c[o]||a.includes(r))return n(t,e,c,a);return r},p=function(n,t){var e=Math.floor(Math.random()*n.length),c=Math.floor(Math.random()*t.length);return["".concat(t[c]).concat(n[e]),"".concat(t[c]).concat("1"===n[e]?n[e+1]:n[e-1]),"".concat("a"===t[c]?t[c+1]:t[c-1]).concat(n[e]),"".concat("a"===t[c]?t[c+1]:t[c-1]).concat("1"===n[e]?n[e+1]:n[e-1])]};var j=function(){var n=Object(c.useState)([]),t=Object(l.a)(n,2),e=t[0],a=t[1],r=Object(c.useState)(p(b,f)),o=Object(l.a)(r,1)[0];return Object(c.useEffect)((function(){for(var n=1;n<=4;n++)a((function(n){return[].concat(Object(d.a)(n),[h(b,f,n,o)])}));console.log(p(b,f))}),[o]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:e.length?"Collect all apples in the box":"Great job!"}),Object(u.jsx)(s.a,{onDragEnd:function(n){if(n.destination)return o.includes(n.destination.droppableId)?a(e.filter((function(t){return t!==n.source.droppableId}))):void a((function(t){return t.map((function(e,c){return c!==n.source.index||t.includes(n.destination.droppableId)||(e=n.destination.droppableId),e}))}))},children:b.map((function(n){return Object(u.jsx)("div",{style:{display:"flex"},children:f.map((function(t){var c=e.find((function(e){return e==="".concat(t).concat(n)}));return Object(u.jsx)(s.c,{droppableId:"".concat(t).concat(n),isDropDisabled:!!c,children:function(a){return Object(u.jsxs)("div",Object(i.a)(Object(i.a)({},a.droppableProps),{},{ref:a.innerRef,style:{border:"1px solid",width:"30px",height:"30px",backgroundColor:o.includes("".concat(t).concat(n))?"brown":"white"},children:[c&&Object(u.jsx)(s.b,{disableInteractiveElementBlocking:!0,draggableId:"".concat(e.indexOf(c)),index:e.indexOf(c),children:function(n){return Object(u.jsx)("div",Object(i.a)(Object(i.a)(Object(i.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{className:"circle"}))}}),a.placeholder]}))}},"".concat(t).concat(n))}))},n)}))})]})})},g=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),a(n),r(n),o(n)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),g()}},[[23,1,2]]]);
//# sourceMappingURL=main.f1fa431c.chunk.js.map