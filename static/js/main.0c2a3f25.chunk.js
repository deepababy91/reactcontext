(this.webpackJsonpreactcontext=this.webpackJsonpreactcontext||[]).push([[0],{126:function(e,t,c){},173:function(e,t,c){},281:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(0),s=c(17),l=c.n(s),r=(c(173),c(126),c(19)),o=c(22),i=Object(a.createContext)(),j=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],l=c[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoLocalstorage"));e&&l(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todoLocalstorage",JSON.stringify(s))}),[s]),Object(n.jsx)(i.Provider,{value:[s,l],children:e.children})},d=c(293),m=c(290),u=c(166);var b=function(){var e=Object(a.useContext)(i),t=Object(o.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),b=j[0],h=j[1];return Object(n.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),s([].concat(Object(r.a)(c),[{name:b,complete:!1}])),h("")},children:[Object(n.jsx)("input",{type:"text",name:"todos",id:"todos",required:!0,placeholder:"Type a todo and press Enter",value:b,onChange:function(e){return h(e.target.value)}}),Object(n.jsx)("button",{type:"submit",onClick:function(){m.b.success({content:"Yay!You added a task",style:{fontSize:"18px",fontFamily:"Oleo Script",color:""}})},children:Object(n.jsxs)(u.a,{title:"Click here to add the task",children:[Object(n.jsx)(d.a,{style:{fontSize:"25px",color:"white"}})," "]})})]})},h=c(294),p=c(295),x=c(296),O=c(291);function f(e){var t=e.todo,c=e.id,s=e.checkComplete,l=e.handleEditTodos,j=Object(a.useState)(!1),d=Object(o.a)(j,2),m=d[0],u=d[1],b=Object(a.useState)(t.name),f=Object(o.a)(b,2),v=f[0],y=f[1],g=Object(a.useContext)(i),N=Object(o.a)(g,2),C=N[0],k=N[1];return m?Object(n.jsxs)("li",{children:[Object(n.jsx)("input",{type:"text",id:"editValue",value:v,name:"editValue",onChange:function(e){return y(e.target.value)}}),Object(n.jsx)(h.a,{onClick:function(){return function(e){u(!1),v?l(v,e):y(t.name)}(c)},style:{color:"purple",fontSize:"20px"},className:t.complete?"disabled1":""})]}):Object(n.jsxs)("li",{children:[Object(n.jsxs)("label",{htmlFor:c,className:t.complete?"active":"",children:[Object(n.jsx)("input",{type:"checkbox",id:c,checked:t.complete,onChange:function(){return s(c)}}),t.name]}),Object(n.jsxs)("span",{children:[Object(n.jsx)(p.a,{className:t.complete?"disabled1":"",onClick:function(){u(!0)},style:{color:"dodgerblue",fontSize:"20px"}})," ",Object(n.jsxs)(O.a,{title:"Are you sure you want to delete this task?",onConfirm:function(){return function(e){var t=Object(r.a)(C);t.splice(e,1),k(t)}(c)},okText:"Yes",cancelText:"No",children:[Object(n.jsx)(x.a,{className:t.complete?"disabled1":"",style:{color:"red",fontSize:"18px",cursor:"pointer"}}),"  "]})]})]})}function v(){var e=Object(a.useContext)(i),t=Object(o.a)(e,2),c=t[0],s=t[1];console.log(c);var l=function(e){var t=Object(r.a)(c);t.forEach((function(t,c){c===e&&(t.complete=!t.complete)})),s(t)},j=function(e,t){var n=Object(r.a)(c);n.forEach((function(c,n){n===t&&(c.name=e)})),s(n)};return Object(n.jsx)("ul",{children:c.map((function(e,t){return Object(n.jsx)(f,{todo:e,id:t,checkComplete:l,handleEditTodos:j},t)}))})}var y=c(289),g=c(286),N=c(69),C=c(76);var k=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],l=Object(a.useContext)(i),j=Object(o.a)(l,2),d=j[0],m=j[1],b=g.a.TabPane,h=function(){return Object(n.jsxs)(g.a,{defaultActiveKey:"1",type:"card",children:[Object(n.jsx)(b,{tab:"All",children:Object(n.jsx)("div",{style:{paddingBottom:"25px"},children:d.map((function(e,t){return Object(n.jsx)("li",{style:{listStyle:"circle",textTransform:"capitalize"},children:e.name},t)}))})},"1"),Object(n.jsx)(b,{tab:"Active",children:Object(n.jsx)("div",{style:{paddingBottom:"25px"},children:d.filter((function(e){return!1===e.complete})).map((function(e,t){return Object(n.jsx)("li",{style:{color:"darkblue",listStyle:"circle",textTransform:"capitalize"},children:e.name},t)}))})},"2"),Object(n.jsx)(b,{tab:"Completed",children:Object(n.jsx)("div",{style:{paddingBottom:"25px"},children:d.filter((function(e){return!0===e.complete})).map((function(e,t){return Object(n.jsx)("li",{style:{color:"green",listStyle:"circle",textTransform:"capitalize"},children:e.name},t)}))})},"3")]})};return Object(n.jsx)("div",{children:0===d.length?Object(n.jsx)("h2",{children:Object(n.jsx)(N.a,{})}):Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(h,{}),Object(n.jsx)(C.a,{type:"primary",onClick:function(){y.a.open({message:Object(n.jsx)("h4",{style:{fontFamily:"Oleo Script"},children:"Hey,your task status"}),description:Object(n.jsxs)("p",{children:["You have ",d.filter((function(e){return!1===e.complete})).length," active tasks and ",d.filter((function(e){return!0===e.complete})).length," completed tasks"]})})},style:{width:"96%",marginBottom:"20px"},children:"click to know about the task status"}),Object(n.jsx)(O.a,{title:"Are you sure you want to delete all tasks?",onConfirm:function(e){var t=Object(r.a)(d);t.splice(e,d.length),m(t)},okText:"Yes",cancelText:"No",children:Object(n.jsx)("button",{id:"delete",style:{width:"96%"},children:"Clear all"})}),Object(n.jsxs)("label",{htmlFor:"all",className:"allinput",children:[Object(n.jsx)(u.a,{placement:"left",title:"Check to complete all tasks and uncheck to make it active again",children:Object(n.jsx)("input",{type:"checkbox",name:"all",id:"all",onChange:function(){var e=Object(r.a)(d);e.forEach((function(e){e.complete=!c})),m(e),s(!c)},checked:c})}),"Mark all complete"]})]})})},S=c(285);var w=function(){return Object(n.jsx)(j,{children:Object(n.jsxs)("div",{className:"Todo",children:[Object(n.jsx)("h1",{children:"To Do List"}),Object(n.jsx)(S.a,{style:{cursor:"pointer"}}),Object(n.jsx)(b,{}),Object(n.jsx)(v,{}),Object(n.jsx)(k,{})]})})},T=c(39),F=c(57),_=c(284);function L(){var e=Object(T.d)({initialValues:{full_name:"",email:"",password:"",confirm_password:""},validationSchema:F.a({full_name:F.c().min(2,"Mininum 2 characters").max(15,"Maximum 15 characters").required("Required!"),email:F.c().email("Invalid email format").required("Required!"),password:F.c().min(8,"Minimum 8 characters").required("Required!"),confirm_password:F.c().oneOf([F.b("password")],"Password's not match").required("Required!")}),onSubmit:function(e){alert(JSON.stringify(e,null,2))}});return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{style:{color:"rgb(209, 193, 193)"},className:"signup",children:"SIGN UP"}),Object(n.jsxs)("form",{onSubmit:e.handleSubmit,className:"signupform",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{className:"formlabel",children:"Full Name"}),Object(n.jsx)("input",{className:"forminput",type:"text",name:"full_name",value:e.values.full_name,onChange:e.handleChange}),e.errors.full_name&&e.touched.full_name&&Object(n.jsx)("p",{className:"formp",children:e.errors.full_name})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{className:"formlabel",children:"Email"}),Object(n.jsx)("input",{className:"forminput",type:"email",name:"email",value:e.values.email,onChange:e.handleChange}),e.errors.email&&e.touched.email&&Object(n.jsx)("p",{className:"formp",children:e.errors.email})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{className:"formlabel",children:"Password"}),Object(n.jsx)("input",{className:"forminput",type:"password",name:"password",value:e.values.password,onChange:e.handleChange}),e.errors.password&&e.touched.password&&Object(n.jsx)("p",{className:"formp",children:e.errors.password})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{className:"formlabel",children:"Confirm Password"}),Object(n.jsx)("input",{className:"forminput",type:"password",name:"confirm_password",value:e.values.confirm_password,onChange:e.handleChange}),e.errors.confirm_password&&e.touched.confirm_password&&Object(n.jsx)("p",{className:"formp",children:e.errors.confirm_password})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)(_.a,{color:"primary",type:"submit",style:{fontFamily:"Oleo Script"},children:"Submit"})]})]})]})}c(148);function E(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"signup",style:{color:"rgb(209, 193, 193)"},children:"Contact Us"}),Object(n.jsx)(T.c,{initialValues:{name:"",email:"",subject:"",content:""},onSubmit:function(e,t){var c=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),c(!1)}),1e3)},children:function(e){e.isSubmitting;return Object(n.jsxs)(T.b,{className:"signupform",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"name",className:"formlabel",children:"Name"}),Object(n.jsx)(T.a,{name:"name",className:"form-control",type:"text",required:!0,style:{height:"28px"}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",className:"formlabel",children:"Email Address"}),Object(n.jsx)(T.a,{name:"email",className:"form-control",type:"email",style:{height:"28px"}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"subject",className:"formlabel",children:"Subject"}),Object(n.jsx)(T.a,{name:"subject",className:"form-control",type:"text",style:{height:"28px"}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"content",className:"formlabel",children:"Content"}),Object(n.jsx)(T.a,{name:"content",className:"form-control",as:"textarea"})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(_.a,{color:"primary",type:"submit",style:{fontFamily:"Oleo Script"},children:"Submit"})})]})}})]})}c(149);var q=c(287),z=c(288),A=c(78),P=function(){return Object(n.jsxs)(q.a,{className:"color-nav",expand:"lg",children:[Object(n.jsx)("h2",{children:"Mytodoapp"}),Object(n.jsx)(q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(q.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(z.a,{className:"ml-auto",style:{fontSize:"20px"},children:[Object(n.jsx)(A.LinkContainer,{to:"/",children:Object(n.jsx)(z.a.Link,{})}),Object(n.jsx)(A.LinkContainer,{to:"/account",children:Object(n.jsx)(z.a.Link,{children:"Account"})}),Object(n.jsx)(A.LinkContainer,{to:"/todo",children:Object(n.jsx)(z.a.Link,{children:"Todos"})}),Object(n.jsx)(A.LinkContainer,{to:"/help",children:Object(n.jsx)(z.a.Link,{children:"Help"})})]})})]})};var B=c(86),I=c(18);var J=function(){return Object(n.jsx)(B.HashRouter,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(P,{}),Object(n.jsxs)(I.g,{children:[Object(n.jsx)(I.d,{exact:!0,path:"/",component:L}),Object(n.jsx)(I.d,{path:"/account",component:L}),Object(n.jsx)(I.d,{path:"/todo",component:w}),Object(n.jsx)(I.d,{path:"/help",component:E}),Object(n.jsx)(I.c,{to:"/"})]})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,297)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(n.jsx)(J,{}),document.getElementById("root")),M()}},[[281,1,2]]]);
//# sourceMappingURL=main.0c2a3f25.chunk.js.map