(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(17),u=t.n(a),i=(t(8),t(4)),o=t(3),s=t.n(o),d=t(0),l=function(e){var n=e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filter_by.toLowerCase())})).map((function(e){return Object(d.jsx)("form",{onSubmit:(n=e,function(e){window.confirm("Delete "+n.name+"?")&&s.a.delete("api/persons/"+n.id).then((function(e){return e.data}))}),children:Object(d.jsxs)("li",{children:[e.name," ",e.number,Object(d.jsx)("button",{type:"submit",children:"delete"})]})});var n}));return Object(d.jsx)("ul",{children:n})},b=function(e){return Object(d.jsxs)("form",{onSubmit:e.addName,children:[Object(d.jsxs)("div",{children:["name:",Object(d.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(d.jsxs)("div",{children:["number:",Object(d.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){return Object(d.jsxs)("div",{children:["Filter shown with",Object(d.jsx)("input",{value:e.filter_by,onChange:e.handleFilterChange})]})},j="/api/persons/",m=function(){return s.a.get(j).then((function(e){return e.data}))},f=function(e){return s.a.post(j,e).then((function(e){return e.data}))},O=function(e,n){return s.a.put("".concat(j).concat(e),n).then((function(e){return e.data}))},p=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1];Object(r.useEffect)((function(){m().then((function(e){console.log(e),c(e)}))}),[]);var a=Object(r.useState)(""),u=Object(i.a)(a,2),o=u[0],s=u[1],j=Object(r.useState)(""),p=Object(i.a)(j,2),x=p[0],g=p[1],v=Object(r.useState)(""),w=Object(i.a)(v,2),C=w[0],N=w[1],y=Object(r.useState)(null),S=Object(i.a)(y,2),T=S[0],F=S[1],k=function(e){var n=e.message;return null===n?null:Object(d.jsx)("div",{className:"error",children:n})};return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{message:T}),Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(h,{filter_by:o,handleFilterChange:function(e){s(e.target.value)}}),Object(d.jsx)("h3",{children:" Add a new"}),Object(d.jsx)(b,{addName:function(e){e.preventDefault();var n=t.findIndex((function(e){return e.name===x}));-1!==n?window.confirm(x+" is already added to the phonebook, replace the old number with a new one?")&&(O(t[n].id,{name:x,number:C}).then((function(e){return console.log(e)})).catch((function(e){return F("Information of "+x+"has already been removed")})),c(t.map((function(e){return e.name===x?{name:x,number:C,id:e.id}:e}))),g(""),N(""),F("Updated "+x),setTimeout((function(){F(null)}),2e3)):f({name:x,number:C}).then((function(e){c(t.concat(e)),g(""),N(""),F("Added "+x),setTimeout((function(){F(null)}),2e3)})).catch((function(e){var n=document.createElement("html");n.innerHTML=e.response.data,F(n.getElementsByTagName("pre")[0].innerText),setTimeout((function(){F(null)}),2e3)}))},newName:x,handleNameChange:function(e){g(e.target.value)},newNumber:C,handleNumberChange:function(e){N(e.target.value)}}),Object(d.jsx)("h3",{children:"Numbers"}),Object(d.jsx)(l,{persons:t,filter_by:o})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,u=n.getTTFB;t(e),r(e),c(e),a(e),u(e)}))};u.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),x()},8:function(e,n,t){}},[[41,1,2]]]);
//# sourceMappingURL=main.b4a20938.chunk.js.map