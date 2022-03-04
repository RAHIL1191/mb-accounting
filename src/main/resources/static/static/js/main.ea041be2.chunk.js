(this.webpackJsonpcustomerdetails=this.webpackJsonpcustomerdetails||[]).push([[0],{185:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){},457:function(e,t,n){},654:function(e,t,n){},657:function(e,t){},659:function(e,t){},688:function(e,t){},689:function(e,t){},763:function(e,t){},910:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(34),o=n.n(i),s=(n(432),n(433),n(946)),r=n(947),d=n(2);var l=function(e){return e.name,Object(d.jsx)("div",{children:Object(d.jsx)(s.a,{className:"bg-warning my-2",children:Object(d.jsx)(r.a,{children:Object(d.jsx)("h1",{className:"text-center my-2",children:"Welcome to Mulchand Badridas"})})})})},j=n(948),u=n(949),b=n(950),m=n(36),h=a.a.forwardRef((function(e,t){return Object(c.useEffect)((function(){document.title="Home"}),[]),Object(d.jsx)("div",{ref:t,children:Object(d.jsxs)(j.a,{className:"text-center",children:[Object(d.jsx)("h1",{children:" Welcome to Customer Details"}),Object(d.jsx)(u.a,{children:Object(d.jsx)(m.b,{to:"/add-customer",children:Object(d.jsx)(b.a,{color:"success",children:"Start Using"})})})]})})})),O=n(957),f=n(958),x=n(19),g=n(18),p=n(28),y=n.n(p),v=n(951),w="https://mb-accounting.herokuapp.com/",A=function(e){var t=e.course,n=e.update;return Object(d.jsx)(s.a,{className:"text-center",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(v.a,{className:"font-weight-bold",children:t.name}),Object(d.jsxs)(u.a,{className:"text-center",children:[Object(d.jsx)(m.b,{to:"/update-customer/".concat(t.name),children:Object(d.jsx)(b.a,{color:"warning",children:"Add Entry"})}),"\xa0\xa0\xa0",Object(d.jsx)(m.b,{to:"/pdf/".concat(t.name),children:Object(d.jsx)(b.a,{color:"success",children:"View"})}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{color:"danger",onClick:function(){var e;e=t.id,y.a.delete("".concat(w,"/customer/").concat(e)).then((function(t){x.b.success("deleted successfully"),n(e)}),(function(e){x.b.error("Data Exists")}))},children:"Delete"}),"\xa0\xa0\xa0",Object(d.jsx)(m.b,{to:"/update-name/".concat(t.id),children:Object(d.jsx)(b.a,{color:"success",children:"Update"})})]})]})})},C=n(177),D=n.n(C),E=(n(185),function(){Object(c.useEffect)((function(){document.title="All Customers"}),[]);Object(c.useEffect)((function(){y.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),a(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}),[]);var e=Object(c.useState)([]),t=Object(g.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),o=Object(g.a)(i,2),s=o[0],r=o[1],l=function(e){a(n.filter((function(t){return t.id!==e})))},j=Object(c.useState)(0),u=Object(g.a)(j,2),b=u[0],m=u[1],h=5*b,O=Math.ceil(n.length/5),f=n.slice(h,h+5).map((function(e){return Object(d.jsx)(A,{course:e,update:l},e.id)})),p=n.filter((function(e){if(e.name.toUpperCase().includes(s.toUpperCase()))return e})).map((function(e){return Object(d.jsx)(A,{course:e,update:l},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"AllCustomers"}),Object(d.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){r(e.target.value)}}),""===s?f:p,Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(D.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:O,onPageChange:function(e){var t=e.selected;m(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})}),N=n(12),R=n(952),B=n(953),P=n(954),S=function(){Object(c.useEffect)((function(){document.title="Add Customer"}),[]);var e=Object(c.useState)({}),t=Object(g.a)(e,2),n=t[0],a=t[1],i=function(e){y.a.post("".concat(w,"/customer"),e).then((function(e){console.log(e),"Customer Already Exists"===e.data?x.b.error("Customer Already Exists",{position:"bottom-center"}):x.b.success("Customer has been added successfully",{position:"bottom-center"})}),(function(e){console.log(e),console.log("error")}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Add Customer"}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{onSubmit:function(e){console.log(n),i(n),e.target.reset(),e.preventDefault()},children:[Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"firstName",style:{width:300},children:"Name"}),Object(d.jsx)(P.a,{type:"text",name:"firstName",id:"firstName",required:!0,maxlength:"45",onChange:function(e){a(Object(N.a)(Object(N.a)({},n),{},{name:e.target.value.toUpperCase()}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Add Customer"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]})]})},L=n(955),k=function(){return Object(d.jsxs)(L.a,{children:[Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/",children:"Home"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/view-customers",children:"View Customers"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/add-customer",children:"Add Customer"}),Object(d.jsxs)(L.a,{horizontal:!0,children:[Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/Balance-CashReceipt/".concat(!0),children:"Cash Receipt"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/Balance-CashPayment/".concat(!0),children:"Cash Payment"})]}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/Balance-CashBook",children:"Ledger"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/Balance",children:"CashBook"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"#!",children:"About"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"#!",children:"Contact Us"})]})},I=n(43),V=n(13),F=n.n(V),U=n(393),T=n(956),M=n(239),q=n.n(M),z=(n(175),n(261),a.a.forwardRef((function(e,t){Object(c.useEffect)(Object(U.a)(F.a.mark((function t(){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(w,"/customer/details/").concat(e.firstName));case 2:return n=t.sent,t.next=5,n.json();case 5:n=t.sent,o(n);case 7:case"end":return t.stop()}}),t)}))),[]);var n=Object(c.useState)([]),a=Object(g.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(0),r=Object(g.a)(s,2),l=r[0],j=r[1],b=10*l,m=Math.ceil(i.length/10),h=i.slice(b,b+10).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{children:e.transactionEffectiveDate}),Object(d.jsx)("td",{children:e.creditAmountReceived}),Object(d.jsx)("td",{children:e.debitAmountReceived}),Object(d.jsx)("td",{children:e.totalAmountPending>0?e.totalAmountPending+" DR":Math.abs(e.totalAmountPending)+" CR"})]},e.id)}));return Object(d.jsx)("div",{ref:t,children:Object(d.jsxs)(u.a,{fluid:!0,children:[Object(d.jsx)("h3",{align:"center",children:"Customer Transactions"}),Object(d.jsx)("br",{}),Object(d.jsxs)(T.a,{className:"mt-4",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"10%",children:"Voucher Number"}),Object(d.jsx)("th",{width:"10%",children:"FirstName"}),Object(d.jsx)("th",{width:"10%",children:"Received Date"}),Object(d.jsx)("th",{width:"10%",children:"Credit Amount"}),Object(d.jsx)("th",{width:"10%",children:"Debit Amount"}),Object(d.jsx)("th",{width:"10%",children:"AmountPending"})]})}),Object(d.jsx)("tbody",{children:h})]}),Object(d.jsx)(D.a,{rowsPer:!0,previousLabel:"Previous",nextLabel:"Next",pageCount:m,onPageChange:function(e){var t=e.selected;j(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})})}))),J=function(e){var t=Object(c.useState)([]),n=Object(g.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){fetch("".concat(w,"/customer/").concat(e.match.params.firstName)).then((function(e){return e.json()})).then((function(e){i(e),document.getElementById("totalAmountPending").value=e.totalAmountPending>0?e.totalAmountPending+" DR":Math.abs(e.totalAmountPending)+" CR"}))}),[]);var o=function(e){0===e.creditAmountReceived&&0===e.debitAmountReceived?x.b.error("Please enter credit or debit Amount",{position:"bottom-center"}):y.a.put("".concat(w,"/customer/"),e).then((function(e){console.log(e),i(Object(N.a)(Object(N.a)({},a),{},{totalAmountPending:e.data.totalAmountPending})),document.getElementById("totalAmountPending").value=e.data.totalAmountPending,x.b.success("Entry has been added successfully",{position:"bottom-center"})}),(function(e){console.log(e)}))},s=document.getElementById("description"),r=document.getElementById("creditAmountReceived");null!=s&&null!=r&&(s.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("creditAmountReceived").focus())})),r.addEventListener("keydown",(function(e){13===e.keyCode&&document.getElementById("debitAmountReceived").focus()})));var l=document.getElementById("debitAmountReceived");null!=s&&null!=r&&(l.addEventListener("keydown",(function(e){27===e.keyCode&&(e.preventDefault(),document.getElementById("creditAmountReceived").focus())})),r.addEventListener("keydown",(function(e){27===e.keyCode&&document.getElementById("description").focus()})));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Add Entry"}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{onSubmit:function(e){console.log(a),o(a),e.target.reset(),e.preventDefault()},children:[Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"firstName",style:{width:300},children:"FirstName"}),Object(d.jsx)(P.a,{type:"text",defaultValue:a.firstName,readOnly:"true",style:{width:300},id:"firstname"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"description",style:{width:300},children:"Description"}),Object(d.jsx)(P.a,{type:"textarea",placeholder:"Enter Description",name:"description",id:"description",autoFocus:!0,maxlength:"110",onClick:function(){document.getElementById("description").value="rahil"},onChange:function(e){i(Object(N.a)(Object(N.a)({},a),{},{description:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"totalAmountPending",style:{width:300},children:"Total Amount Pending"}),Object(d.jsx)(P.a,{type:"text",defaultValue:a.totalAmountPending,readOnly:"totalAmountPending",id:"totalAmountPending",style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"creditAmountReceived",style:{width:300},children:"Credit Amount"}),Object(d.jsx)(P.a,{placeholder:"Enter Credit Amount",name:"creditAmountReceived",id:"creditAmountReceived",onChange:function(e){i(Object(N.a)(Object(N.a)({},a),{},{creditAmountReceived:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"debitAmountReceived",style:{width:300},children:"Debit Amount"}),Object(d.jsx)(P.a,{type:"number",placeholder:"Enter Debit Amount",name:"debitAmountReceived",id:"debitAmountReceived",onChange:function(e){i(Object(N.a)(Object(N.a)({},a),{},{debitAmountReceived:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"transactionEffectiveDate",style:{width:300},children:"Transaction Date"}),Object(d.jsx)(P.a,{type:"date",placeholder:"Enter Date",defaultValue:a.transactionEffectiveDate,readOnly:"true",name:"transactionEffectiveDate",id:"transactionEffectiveDate",required:!0,style:{width:300}})]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Add Entry"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]})]})},W=n(79),H=function(){var e,t;Object(c.useEffect)((function(){document.title="Cash Book"}),[]);var n=Object(c.useState)([]),a=Object(g.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)([]),r=Object(g.a)(s,2),l=r[0],j=r[1],m=Object(c.useState)({id:1,firstName:"RATAN MAJUR",lastName:null,transactionEffectiveDate:null,totalAmountPending:0,description:null,creditAmountReceived:0,debitAmountReceived:0,receiptLink:null,paymentLink:null,fromDate:"2021-04-01",toDate:"2022-03-31"}),h=Object(g.a)(m,2),p=h[0],v=h[1],A=function(){y.a.get("".concat(w,"/customer/balance")).then((function(e){console.log(e.data),o(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))},C=Object(c.useState)(0),D=Object(g.a)(C,2);D[0],D[1],Math.ceil(i.length/9);Object(c.useEffect)((function(){A(),y.a.get("".concat(w,"/customer/endingBalance")).then((function(e){console.log(e.data),j(e.data),v(Object(N.a)(Object(N.a)({},p),{},{fromDate:e.data.todayDate}))}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}),[]);var E=i.filter((function(e){if(0!==e.creditAmountReceived)return e})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.transactionEffectiveDate}),Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.firstName}),Object(d.jsx)("td",{children:e.creditAmountReceived})]},e.id)})),R=i.filter((function(e){if(0!==e.debitAmountReceived)return e})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.transactionEffectiveDate}),Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.firstName}),Object(d.jsx)("td",{children:e.debitAmountReceived})]},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){console.log(p),function(e){e.fromDate>e.toDate?x.b.error("From Date Should Be Bigger",{position:"bottom-center"}):y.a.put("".concat(w,"/customer/datewiseDetails"),e).then((function(e){console.log(e.data),0===e.data.length&&x.b.error("No Record Found",{position:"bottom-center"}),o(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}(p),function(e){y.a.put("".concat(w,"/customer/getListFromDate"),e).then((function(e){console.log(e.data),j(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}(p),e.preventDefault()},class:"form-inline",children:[Object(d.jsx)("label",{for:"endingBalance",children:"Ending Balance:"}),Object(d.jsx)("input",(e={type:"text",id:"endingBalance",readOnly:"true",defaultValue:l.endingBalance},Object(W.a)(e,"readOnly","true"),Object(W.a)(e,"style",{marginLeft:5}),e)),Object(d.jsx)("label",{for:"openingBalance",style:{marginLeft:25},children:"Opening Balance:"}),Object(d.jsx)("input",(t={type:"text",id:"openingBalance",readOnly:"true",defaultValue:l.openingBalance},Object(W.a)(t,"readOnly","true"),Object(W.a)(t,"style",{marginLeft:5}),t)),Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsx)("label",{for:"todayDate",style:{marginLeft:75},children:"Date:"}),Object(d.jsx)("input",{type:"date",id:"todayDate",defaultValue:l.todayDate,style:{marginLeft:5},onChange:function(e){v(Object(N.a)(Object(N.a)({},p),{},{fromDate:e.target.value}))}}),Object(d.jsx)(u.a,{children:Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Search"})})]})}),Object(d.jsx)("br",{}),Object(d.jsxs)(O.a,{children:[Object(d.jsx)(f.a,{md:6,children:Object(d.jsxs)(T.a,{className:"mt-4",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"10%",children:"Voucher No."}),Object(d.jsx)("th",{width:"15%",children:"Date"}),Object(d.jsx)("th",{width:"20%",children:"Name"}),Object(d.jsx)("th",{width:"15%",children:"Rs"})]})}),Object(d.jsx)("tbody",{children:E})]})}),Object(d.jsx)(f.a,{md:6,children:Object(d.jsxs)(T.a,{className:"mt-4 offset-2",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"10%",children:"Voucher No."}),Object(d.jsx)("th",{width:"15%",children:"Date"}),Object(d.jsx)("th",{width:"20%",children:"Name"}),Object(d.jsx)("th",{width:"15%",children:"Rs"})]})}),Object(d.jsx)("tbody",{children:R})]})})]})]})},G=n(964),K=n(965),Q=function(){var e;Object(c.useEffect)((function(){document.title="Ledger"}),[]);var t=Object(c.useState)([]),n=Object(g.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)([]),r=Object(g.a)(s,2),l=r[0],j=r[1],m=Object(c.useState)({id:1,firstName:"RATAN MAJUR",lastName:null,transactionEffectiveDate:null,totalAmountPending:0,description:null,creditAmountReceived:0,debitAmountReceived:0,receiptLink:null,paymentLink:null,fromDate:"2021-04-01",toDate:"2022-03-31"}),h=Object(g.a)(m,2),p=h[0],v=h[1],A=Object(c.useState)([]),C=Object(g.a)(A,2),D=C[0],E=C[1],R=Object(c.useState)([]),B=Object(g.a)(R,2);B[0],B[1];Object(c.useEffect)((function(){y.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),E(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}),[]);var P=i.filter((function(e){if(0!==e.creditAmountReceived)return e})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.transactionEffectiveDate}),Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.firstName}),Object(d.jsx)("td",{children:e.creditAmountReceived})]},e.id)})),S=i.filter((function(e){if(0!==e.debitAmountReceived)return e})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.transactionEffectiveDate}),Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.firstName}),Object(d.jsx)("td",{children:e.debitAmountReceived})]},e.id)})),L=a.a.useState(""),k=Object(g.a)(L,2),I=k[0],V=k[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{height:5},children:Object(d.jsx)(K.a,{inputValue:I,onInputChange:function(e,t){V(t),v(Object(N.a)(Object(N.a)({},p),{},{firstName:t}))},id:"controllable-states-demo",options:D,getOptionLabel:function(e){return e.name},style:{width:250},renderInput:function(e){return Object(d.jsx)(G.a,Object(N.a)(Object(N.a)({},e),{},{label:"Search Name",variant:"outlined",size:"small"}))}})}),Object(d.jsxs)("form",{onSubmit:function(e){console.log(p),function(e){e.fromDate>e.toDate?x.b.error("From Date Should Be Bigger",{position:"bottom-center"}):y.a.put("".concat(w,"/customer/datewise"),e).then((function(e){console.log(e.data),0===e.data.length&&x.b.error("No Record Found",{position:"bottom-center"}),o(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}(p),function(e){y.a.put("".concat(w,"/customer/endingDateWiseBalance"),e).then((function(e){console.log(e.data),j(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}(p),e.preventDefault()},class:"form-inline",children:[Object(d.jsx)("label",{for:"fromDate",style:{marginLeft:275},children:"From:"}),Object(d.jsx)("input",{type:"date",defaultValue:p.fromDate,id:"fromDate",style:{marginLeft:5},onChange:function(e){v(Object(N.a)(Object(N.a)({},p),{},{fromDate:e.target.value}))}}),Object(d.jsx)("label",{for:"todayDate",style:{marginLeft:40},children:"To:"}),Object(d.jsx)("input",{type:"date",defaultValue:p.toDate,id:"todayDate",style:{marginLeft:5},onChange:function(e){v(Object(N.a)(Object(N.a)({},p),{},{toDate:e.target.value}))}}),Object(d.jsx)(u.a,{children:Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Search"})})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"endingBalance",children:"Ending Balance:"}),Object(d.jsx)("input",(e={type:"text",id:"endingBalance",defaultValue:l.endingBalance,readOnly:"true"},Object(W.a)(e,"readOnly","true"),Object(W.a)(e,"style",{marginLeft:5}),e))]}),Object(d.jsx)("br",{}),Object(d.jsxs)(O.a,{children:[Object(d.jsx)(f.a,{md:6,children:Object(d.jsxs)(T.a,{className:"mt-4",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"15%",children:"Date"}),Object(d.jsx)("th",{width:"20%",children:"Name"}),Object(d.jsx)("th",{width:"15%",children:"Rs"})]})}),Object(d.jsx)("tbody",{children:P})]})}),Object(d.jsx)(f.a,{md:6,children:Object(d.jsxs)(T.a,{className:"mt-4 offset-2",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"15%",children:"Date"}),Object(d.jsx)("th",{width:"20%",children:"Name"}),Object(d.jsx)("th",{width:"15%",children:"Rs"})]})}),Object(d.jsx)("tbody",{children:S})]})})]})]})},X=(n(457),function(e){Object(c.useEffect)((function(){document.title="Update Entry"}),[]);var t=Object(c.useState)(0),n=Object(g.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)(!1),r=Object(g.a)(s,2),l=r[0],j=r[1],m=Object(c.useState)([]),h=Object(g.a)(m,2),O=h[0],f=h[1],p=a.a.useState(""),v=Object(g.a)(p,2),A=v[0],C=v[1],D=Object(c.useState)([]),E=Object(g.a)(D,2),S=E[0],L=E[1],k=Object(c.useState)(!1),I=Object(g.a)(k,2);I[0],I[1];Object(c.useEffect)((function(){y.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),L(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})})),document.title="Cash Receipt"}),[]);return Object(d.jsxs)("div",{children:[!l&&Object(d.jsxs)(R.a,{onSubmit:function(e){console.log(i),function(e){y.a.get("".concat(w,"/customer/entry/").concat(e.id)).then((function(e){console.log(e.data),""===e.data?(j(!1),x.b.success("No Voucher found",{position:"bottom-center"})):(j(!0),f(e.data))}),(function(e){console.log(e)}))}(i),e.target.reset(),e.preventDefault()},children:[Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"entry id",style:{width:300},children:"Enter Voucher Number"}),Object(d.jsx)(P.a,{type:"number",name:"entry id",id:"entry id",maxlength:"110",onChange:function(e){o(Object(N.a)(Object(N.a)({},i),{},{id:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Find Entry"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]}),Object(d.jsx)("br",{}),l&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{class:"onerow",children:[Object(d.jsx)("label",{for:"firstName",style:{width:300},children:"Description"}),Object(d.jsx)(P.a,{type:"text",defaultValue:O.firstName,readOnly:"true",name:"firstName",id:"firstName",maxlength:"110",onChange:function(e){f(Object(N.a)(Object(N.a)({},O),{},{description:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("div",{class:"onerow",children:Object(d.jsx)(K.a,{inputValue:A,onInputChange:function(e,t){C(t),f(Object(N.a)(Object(N.a)({},O),{},{firstName:t}))},id:"controllable-states-demo",options:S,getOptionLabel:function(e){return e.name},style:{width:220,marginLeft:25},renderInput:function(e){return Object(d.jsx)(G.a,Object(N.a)(Object(N.a)({},e),{},{label:"Search Name",variant:"outlined",size:"small"}))}})}),Object(d.jsxs)(R.a,{onSubmit:function(e){var t;console.log(O),t=O,y.a.put("".concat(w,"/customer/updateEntry"),t).then((function(e){console.log(e),document.getElementById("totalAmountPending").value=e.data.amountPendingEntry,j(!1),x.b.success("Entry has been added successfully",{position:"bottom-center"})}),(function(e){console.log(e),console.log("error")})),e.target.reset(),document.getElementById("controllable-states-demo").focus(),e.preventDefault()},children:[Object(d.jsx)(B.a,{}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"description",style:{width:300},children:"Description"}),Object(d.jsx)(P.a,{type:"textarea",placeholder:"Enter Description",name:"description",id:"description",maxlength:"110",onChange:function(e){f(Object(N.a)(Object(N.a)({},O),{},{description:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"totalAmountPending",style:{width:300},children:"Total Amount Pending"}),Object(d.jsx)(P.a,{type:"text",defaultValue:O.totalAmountPending,readOnly:"totalAmountPending",id:"totalAmountPending",style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"creditAmountReceived",style:{width:300},children:"false"==e.match.params.boolean?"Credit Amount":"Debit Amount"}),Object(d.jsx)(P.a,{placeholder:"Enter Credit Amount",defaultValue:"false"==e.match.params.boolean?O.creditAmountReceived:O.debitAmountReceived,name:"creditAmountReceived",id:"creditAmountReceived",required:!0,onChange:function(t){"false"==e.match.params.boolean?f(Object(N.a)(Object(N.a)({},O),{},{creditAmountReceived:t.target.value})):f(Object(N.a)(Object(N.a)({},O),{},{debitAmountReceived:t.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"transactionEffectiveDate",style:{width:300},children:"Transaction Date"}),Object(d.jsx)(P.a,{type:"date",placeholder:"Enter Date",defaultValue:O.transactionEffectiveDate,name:"transactionEffectiveDate",id:"transactionEffectiveDate",required:!0,onChange:function(e){f(Object(N.a)(Object(N.a)({},O),{},{transactionEffectiveDate:e.target.value}))},style:{width:300}})]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",id:"add",children:"Add Entry"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]})]})]})}),Y=Object(I.e)((function(e){var t=Object(c.useState)([]),n=Object(g.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)([]),r=Object(g.a)(s,2),l=r[0],j=r[1],h=null,O=document.getElementById("description"),f=document.getElementById("add");Object(c.useEffect)((function(){y.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),o(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})})),document.title="Cash Receipt"}),[]);var p=function(e){y.a.put("".concat(w,"/customer/"),e).then((function(e){console.log(e),h=e.data,j(Object(N.a)(Object(N.a)({},l),{},{totalAmountPending:h.totalAmountPending})),document.getElementById("totalAmountPending").value=l.totalAmountPending>0?h.totalAmountPending+" DR":Math.abs(h.totalAmountPending)+" CR",x.b.success("Entry has been added successfully",{position:"bottom-center"})}),(function(e){console.log(e),console.log("error")}))};null!=O&&null!=f&&(O.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("creditAmountReceived").focus())})),f.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("description").focus())})));var v=a.a.useState(""),A=Object(g.a)(v,2),C=A[0],D=A[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Add CashReceipt"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{height:5},children:Object(d.jsx)(K.a,{inputValue:C,onInputChange:function(e,t){D(t),function(e){""==e?document.getElementById("totalAmountPending").value=0:y.a.get("".concat(w,"/customer/").concat(e)).then((function(e){console.log(e.data),h=e.data,j(e.data),document.getElementById("totalAmountPending").value=h.totalAmountPending>0?h.totalAmountPending+" DR":Math.abs(h.totalAmountPending)+" CR"}),(function(e){console.log(e)}))}(t)},id:"controllable-states-demo",options:i,getOptionLabel:function(e){return e.name},style:{width:300},renderInput:function(e){return Object(d.jsx)(G.a,Object(N.a)(Object(N.a)({},e),{},{label:"Search Name",variant:"outlined",size:"small"}))}})}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{onSubmit:function(e){console.log(l),p(l),e.target.reset(),document.getElementById("controllable-states-demo").focus(),e.preventDefault()},children:[Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"description",style:{width:300},children:"Description"}),Object(d.jsx)(P.a,{type:"textarea",placeholder:"Enter Description",name:"description",id:"description",maxlength:"110",onChange:function(e){j(Object(N.a)(Object(N.a)({},l),{},{description:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"totalAmountPending",style:{width:300},children:"Total Amount Pending"}),Object(d.jsx)(P.a,{type:"text",defaultValue:""==C?0:l.totalAmountPending,readOnly:"totalAmountPending",id:"totalAmountPending",style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsx)(B.a,{children:"true"==e.match.params.Credit?Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{style:{width:300},children:"Credit Amount"}),Object(d.jsx)(P.a,{placeholder:"Enter Credit Amount",name:"creditAmountReceived",id:"creditAmountReceived",required:!0,onChange:function(e){j(Object(N.a)(Object(N.a)({},l),{},{creditAmountReceived:e.target.value}))},style:{width:300}})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"debitAmountReceived",style:{width:300},children:"Debit Amount"}),Object(d.jsx)(P.a,{placeholder:"Enter Debit Amount",name:"debitAmountReceived",id:"debitAmountReceived",required:!0,onChange:function(e){j(Object(N.a)(Object(N.a)({},l),{},{debitAmountReceived:e.target.value}))},style:{width:300}})]})}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"transactionEffectiveDate",style:{width:300},children:"Transaction Date"}),Object(d.jsx)(P.a,{type:"date",placeholder:"Enter Date",defaultValue:l.transactionEffectiveDate,name:"transactionEffectiveDate",id:"transactionEffectiveDate",required:!0,onChange:function(e){j(Object(N.a)(Object(N.a)({},l),{},{transactionEffectiveDate:e.target.value}))},style:{width:300}})]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",id:"add",children:"Add Entry"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"}),"\xa0\xa0\xa0",Object(d.jsx)(m.b,{to:"/update-entry/".concat(!1),children:Object(d.jsx)(b.a,{color:"success",children:"Update Entry"})}),"\xa0\xa0\xa0",Object(d.jsx)(m.b,{to:"/delete-entry/".concat(!1),children:Object(d.jsx)(b.a,{color:"danger",children:"Delete Entry"})})]})]})]})})),Z=(n(458),function(e){var t=Object(c.useState)({}),n=Object(g.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){document.title="Update Customer"}),[]);var o=function(t){y.a.put("".concat(w,"/customer/updateCustomer/").concat(e.match.params.id),t).then((function(e){console.log(e),x.b.success("Customer has been updated successfully",{position:"bottom-center"})}),(function(e){console.log(e),console.log("error")}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Update Customer"}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{onSubmit:function(e){console.log(a),o(a),e.target.reset(),e.preventDefault()},children:[Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"firstName",style:{width:300},children:"FirstName"}),Object(d.jsx)(P.a,{type:"text",placeholder:"Enter FirstName",name:"firstName",id:"firstName",required:!0,maxlength:"45",onChange:function(e){i(Object(N.a)(Object(N.a)({},a),{},{name:e.target.value.toUpperCase()}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Update Customer"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]})]})}),$=(n(654),function(e){Object(c.useEffect)((function(){document.title="Delete Entry"}),[]);var t=Object(c.useState)(0),n=Object(g.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(!1),s=Object(g.a)(o,2),r=s[0],l=s[1],j=Object(c.useState)(""),m=Object(g.a)(j,2),h=m[0],O=m[1];return Object(d.jsx)("div",{id:"body",children:r?Object(d.jsxs)(R.a,{onSubmit:function(e){console.log(a),function(e){y.a.delete("".concat(w,"/customer/deleteEntry/").concat(e.id)).then((function(e){x.b.success("deleted successfully")}),(function(e){x.b.error("Data Exists")}))}(a),e.target.reset(),e.preventDefault()},children:[Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{children:[Object(d.jsx)("label",{for:"entry id",style:{width:300},children:"Enter Voucher Number"}),Object(d.jsx)(P.a,{type:"number",name:"entry id",id:"entry id",maxlength:"110",onChange:function(e){i(Object(N.a)(Object(N.a)({},a),{},{id:e.target.value}))},autoFocus:!0,style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Delete Entry"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]}):Object(d.jsx)("div",{id:"center",children:Object(d.jsxs)(R.a,{name:"form1",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(d.jsx)("input",{type:"password",id:"password",name:"text1",onChange:function(e){O(e.target.value)},autoFocus:!0}),Object(d.jsx)(b.a,{type:"submit",id:"submit",value:"submit",onClick:function(){"rahil"===h?l(!0):alert("sorry Try Again")},children:"Validate"})]})})})}),_=(n(399).StyleSheet.create({page:{backgroundColor:"#d11fb6",color:"white"},section:{margin:10,padding:10},viewer:{width:window.innerWidth,height:window.innerHeight}}),function(e){var t=Object(c.useRef)(),n=e.match.params.firstName;return Object(d.jsxs)("div",{children:[Object(d.jsx)(z,{firstName:n,ref:t}),Object(d.jsx)(q.a,{content:function(){return t.current},trigger:function(){return Object(d.jsx)("button",{children:"Print to PDF!"})}})]})});var ee=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(x.a,{}),Object(d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(l,{}),Object(d.jsxs)(O.a,{children:[Object(d.jsx)(f.a,{md:4,children:Object(d.jsx)(k,{})}),Object(d.jsxs)(f.a,{md:8,children:[Object(d.jsx)(I.a,{path:"/",component:h,exact:!0}),Object(d.jsx)(I.a,{path:"/add-customer",component:S,exact:!0}),Object(d.jsx)(I.a,{path:"/view-customers",component:E,exact:!0}),Object(d.jsx)(I.a,{path:"/pdf/:firstName",component:_,exact:!0}),Object(d.jsx)(I.a,{path:"/update-customer/:firstName",component:J,exact:!0}),Object(d.jsx)(I.a,{path:"/update-name/:id",component:Z,exact:!0}),Object(d.jsx)(I.a,{path:"/Balance",component:H,exact:!0}),Object(d.jsx)(I.a,{path:"/Balance-CashReceipt/:Credit",component:Y,exact:!0}),Object(d.jsx)(I.a,{path:"/Balance-CashPayment/:Debit",component:Y,exact:!0}),Object(d.jsx)(I.a,{path:"/Balance-CashBook",component:Q,exact:!0}),Object(d.jsx)(I.a,{path:"/update-entry/:boolean",component:X,exact:!0}),Object(d.jsx)(I.a,{path:"/delete-entry/:boolean",component:$,exact:!0})]})]})]})]})})},te=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,983)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};n(908),n(909);o.a.render(Object(d.jsx)(ee,{}),document.getElementById("root")),te()}},[[910,1,2]]]);
//# sourceMappingURL=main.ea041be2.chunk.js.map