(this.webpackJsonpcustomerdetails=this.webpackJsonpcustomerdetails||[]).push([[0],{134:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},270:function(e,t,n){},481:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(27),s=n.n(o),i=(n(245),n(246),n(515)),r=n(516),d=n(1);var l=function(e){return e.name,Object(d.jsx)("div",{children:Object(d.jsx)(i.a,{className:"bg-warning my-2",children:Object(d.jsx)(r.a,{children:Object(d.jsx)("h1",{className:"text-center my-2",children:"Welcome to Mulchand Badridas"})})})})},j=n(517),u=n(518),b=n(519),m=n(26),h=function(){return Object(c.useEffect)((function(){document.title="Home"}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{className:"text-center",children:[Object(d.jsx)("h1",{children:" Welcome to Customer Details"}),Object(d.jsx)(u.a,{children:Object(d.jsx)(m.b,{to:"/add-customer",children:Object(d.jsx)(b.a,{color:"success",children:"Start Using"})})})]})})},O=n(526),f=n(527),x=n(13),p=n(14),g=n(28),v=n.n(g),y=n(520),w="https://mb-accounting.herokuapp.com",A=function(e){var t=e.course,n=e.update;e.rahil;return Object(d.jsx)(i.a,{className:"text-center",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(y.a,{className:"font-weight-bold",children:t.name}),Object(d.jsxs)(u.a,{className:"text-center",children:[Object(d.jsx)(m.b,{to:"/update-customer/".concat(t.name),children:Object(d.jsx)(b.a,{color:"warning",children:"Add Entry"})}),"\xa0\xa0\xa0",Object(d.jsx)(m.b,{to:"/view-customer/".concat(t.name),children:Object(d.jsx)(b.a,{color:"success",children:"View"})}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{color:"danger",onClick:function(){var e;e=t.id,v.a.delete("".concat(w,"/customer/").concat(e)).then((function(t){x.b.success("deleted successfully"),n(e)}),(function(e){x.b.error("not deleted")}))},children:"Delete"})]})]})})},C=n(105),E=n.n(C),N=(n(134),function(){Object(c.useEffect)((function(){document.title="All Customers"}),[]);Object(c.useEffect)((function(){v.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),a(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}),[]);var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),s=Object(p.a)(o,2),i=s[0],r=s[1],l=function(e){a(n.filter((function(t){return t.id!==e})))},j=Object(c.useState)(0),u=Object(p.a)(j,2),b=u[0],m=u[1],h=5*b,O=Math.ceil(n.length/5),f=n.slice(h,h+5).map((function(e){return Object(d.jsx)(A,{course:e,update:l},e.id)})),g=n.filter((function(e){if(e.name.toUpperCase().includes(i.toUpperCase()))return e})).map((function(e){return Object(d.jsx)(A,{course:e,update:l},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"AllCustomers"}),Object(d.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){r(e.target.value)}}),""===i?f:g,Object(d.jsx)("br",{}),Object(d.jsx)(E.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:O,onPageChange:function(e){var t=e.selected;m(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})}),D=n(12),B=n(521),R=n(522),S=n(523),P=function(){Object(c.useEffect)((function(){document.title="Add Customer"}),[]);var e=Object(c.useState)({}),t=Object(p.a)(e,2),n=t[0],a=t[1],o=function(e){v.a.post("".concat(w,"/customer"),e).then((function(e){console.log(e),"Customer Already Exists"===e.data?x.b.error("Customer Already Exists",{position:"bottom-center"}):x.b.success("Customer has been added successfully",{position:"bottom-center"})}),(function(e){console.log(e),console.log("error")}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Add Customer"}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{onSubmit:function(e){console.log(n),o(n),e.target.reset(),e.preventDefault()},children:[Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"firstName",style:{width:300},children:"FirstName"}),Object(d.jsx)(S.a,{type:"text",placeholder:"Enter FirstName",name:"firstName",id:"firstName",required:!0,maxlength:"45",onChange:function(e){a(Object(D.a)(Object(D.a)({},n),{},{name:e.target.value.toUpperCase()}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Add Customer"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]})]})},k=n(524),L=function(){return Object(d.jsxs)(k.a,{children:[Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/",children:"Home"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/view-customers",children:"View Customers"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/add-customer",children:"Add Customer"}),Object(d.jsxs)(k.a,{horizontal:!0,children:[Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/Balance-CashReceipt",children:"Cash Receipt"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/Balance-CashPayment",children:"Cash Payment"})]}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/Balance-CashBook",children:"Ledger"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/Balance",children:"CashBook"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"#!",children:"About"}),Object(d.jsx)(m.b,{className:"list-group-item list-group-item-action",tag:"a",to:"#!",children:"Contact Us"})]})},I=n(34),V=n(86),F=n.n(V),T=n(128),U=n(525);var q=Object(I.e)((function(e){console.warn("props",e.match.params.firstName),Object(c.useEffect)(Object(T.a)(F.a.mark((function t(){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(w,"/customer/details/").concat(e.match.params.firstName));case 2:return n=t.sent,t.next=5,n.json();case 5:n=t.sent,o(n);case 7:case"end":return t.stop()}}),t)}))),[]);var t=Object(c.useState)([]),n=Object(p.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(0),i=Object(p.a)(s,2),r=i[0],l=i[1],j=10*r,b=Math.ceil(a.length/10),m=a.slice(j,j+10).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{children:e.transactionEffectiveDate}),Object(d.jsx)("td",{children:e.creditAmountReceived}),Object(d.jsx)("td",{children:e.debitAmountReceived}),Object(d.jsx)("td",{children:e.totalAmountPending})]},e.id)}));return Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{fluid:!0,children:[Object(d.jsx)("h3",{align:"center",children:"Customer Transactions"}),Object(d.jsx)("br",{}),Object(d.jsxs)(U.a,{className:"mt-4",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"10%",children:"FirstName"}),Object(d.jsx)("th",{width:"10%",children:"Received Date"}),Object(d.jsx)("th",{width:"10%",children:"Credit Amount"}),Object(d.jsx)("th",{width:"10%",children:"Debit Amount"}),Object(d.jsx)("th",{width:"10%",children:"AmountPending"})]})}),Object(d.jsxs)("tbody",{children:[m,Object(d.jsx)("br",{})]})]}),Object(d.jsx)(E.a,{rowsPer:!0,previousLabel:"Previous",nextLabel:"Next",pageCount:b,onPageChange:function(e){var t=e.selected;l(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})})})),M=Object(I.e)((function(e){console.warn("props",e.match.params.firstName,e.match.params.lastName),Object(c.useEffect)(Object(T.a)(F.a.mark((function t(){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(w,"/customer/").concat(e.match.params.firstName));case 2:return n=t.sent,t.next=5,n.json();case 5:n=t.sent,i(n);case 7:case"end":return t.stop()}}),t)}))),[]);var t=Object(c.useState)([]),n=Object(p.a)(t,2),a=(n[0],n[1],Object(c.useState)([])),o=Object(p.a)(a,2),s=o[0],i=o[1],r=function(e){0===e.creditAmountReceived&&0===e.debitAmountReceived?x.b.error("Please enter credit or debit Amount",{position:"bottom-center"}):v.a.put("".concat(w,"/customer/"),e).then((function(e){console.log(e),i(Object(D.a)(Object(D.a)({},s),{},{totalAmountPending:e.data.totalAmountPending})),document.getElementById("totalAmountPending").value=e.data.totalAmountPending,x.b.success("Entry has been added successfully",{position:"bottom-center"})}),(function(e){console.log(e),console.log("error")}))},l=document.getElementById("description"),j=document.getElementById("creditAmountReceived");null!=l&&null!=j&&(l.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("creditAmountReceived").focus())})),j.addEventListener("keydown",(function(e){13===e.keyCode&&document.getElementById("debitAmountReceived").focus()})));var m=document.getElementById("debitAmountReceived");document.getElementById("creditAmountReceived");return null!=l&&null!=j&&(m.addEventListener("keydown",(function(e){27===e.keyCode&&(e.preventDefault(),document.getElementById("creditAmountReceived").focus())})),j.addEventListener("keydown",(function(e){27===e.keyCode&&document.getElementById("description").focus()}))),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Add Entry"}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{onSubmit:function(e){console.log(s),r(s),e.target.reset(),e.preventDefault()},children:[Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"firstName",style:{width:300},children:"FirstName"}),Object(d.jsx)(S.a,{type:"text",defaultValue:s.firstName,readOnly:"true",style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"description",style:{width:300},children:"Description"}),Object(d.jsx)(S.a,{type:"textarea",placeholder:"Enter Description",name:"description",id:"description",autoFocus:!0,maxlength:"110",onChange:function(e){i(Object(D.a)(Object(D.a)({},s),{},{description:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"totalAmountPending",style:{width:300},children:"Total Amount Pending"}),Object(d.jsx)(S.a,{type:"text",defaultValue:s.totalAmountPending,readOnly:"totalAmountPending",id:"totalAmountPending",style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"creditAmountReceived",style:{width:300},children:"Credit Amount"}),Object(d.jsx)(S.a,{placeholder:"Enter Credit Amount",name:"creditAmountReceived",id:"creditAmountReceived",onChange:function(e){i(Object(D.a)(Object(D.a)({},s),{},{creditAmountReceived:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"debitAmountReceived",style:{width:300},children:"Debit Amount"}),Object(d.jsx)(S.a,{type:"number",placeholder:"Enter Debit Amount",name:"debitAmountReceived",id:"debitAmountReceived",onChange:function(e){i(Object(D.a)(Object(D.a)({},s),{},{debitAmountReceived:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"transactionEffectiveDate",style:{width:300},children:"Transaction Date"}),Object(d.jsx)(S.a,{type:"date",placeholder:"Enter Date",defaultValue:s.transactionEffectiveDate,readOnly:"true",name:"transactionEffectiveDate",id:"transactionEffectiveDate",required:!0,style:{width:300}})]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Add Entry"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]})]})})),z=n(74),J=function(){var e;Object(c.useEffect)((function(){document.title="Cash Book"}),[]);var t=Object(c.useState)([]),n=Object(p.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)([]),i=Object(p.a)(s,2),r=i[0],l=i[1],j=function(){v.a.get("".concat(w,"/customer/balance")).then((function(e){console.log(e.data),o(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))},u=Object(c.useState)(0),b=Object(p.a)(u,2);b[0],b[1],Math.ceil(a.length/9);Object(c.useEffect)((function(){j(),v.a.get("".concat(w,"/customer/endingBalance")).then((function(e){console.log(e.data),l(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}),[]);var m=a.filter((function(e){if(0!==e.creditAmountReceived)return e})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.firstName}),Object(d.jsx)("td",{children:e.creditAmountReceived})]},e.id)})),h=a.filter((function(e){if(0!==e.debitAmountReceived)return e})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.firstName}),Object(d.jsx)("td",{children:e.debitAmountReceived})]},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{class:"form-inline",children:[Object(d.jsx)("label",{for:"endingBalance",children:"Ending Balance:"}),Object(d.jsx)("input",(e={type:"text",id:"endingBalance",readOnly:"true",defaultValue:r.endingBalance},Object(z.a)(e,"readOnly","true"),Object(z.a)(e,"style",{marginLeft:5}),e)),Object(d.jsx)("label",{for:"todayDate",style:{marginLeft:35},children:"Date:"}),Object(d.jsx)("input",{type:"date",id:"todayDate",defaultValue:r.todayDate,style:{marginLeft:5},readOnly:"true"})]})}),Object(d.jsx)("br",{}),Object(d.jsxs)(O.a,{children:[Object(d.jsx)(f.a,{md:6,children:Object(d.jsxs)(U.a,{className:"mt-4",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"15%",children:"Name"}),Object(d.jsx)("th",{width:"20%",children:"Credit"}),Object(d.jsx)("th",{width:"15%",children:"Date"})]})}),Object(d.jsx)("tbody",{children:m})]})}),Object(d.jsx)(f.a,{md:6,children:Object(d.jsxs)(U.a,{className:"mt-4 offset-2",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"15%",children:"Name"}),Object(d.jsx)("th",{width:"20%",children:"Debit"}),Object(d.jsx)("th",{width:"15%",children:"Date"})]})}),Object(d.jsx)("tbody",{children:h})]})})]})]})};n(270);var W=function(e){e.placeholder;var t=e.data,n=(e.handleChange,Object(c.useState)([])),a=Object(p.a)(n,2),o=a[0],s=a[1],i=document.getElementById("searchName");return null!=i&&i.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("description").focus())})),Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("div",{className:"searchInputs",children:Object(d.jsx)("input",{type:"text",id:"searchName",onChange:function(e){var n=e.target.value,c=t.filter((function(e){return e.firstName.toUpperCase().includes(n.toUpperCase())}));s(""===n?[]:c)},autoFocus:!0})}),0!=o.length&&Object(d.jsx)("div",{className:"dataResult",children:o.slice(0,15).map((function(e,t){return Object(d.jsx)("a",{className:"dataItem",href:e.receiptLink,target:"_self",children:Object(d.jsx)("p",{children:e.firstName})})}))})]})},H=n(533),_=n(534),G=Object(I.e)((function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)([]),i=Object(p.a)(s,2),r=i[0],l=i[1];Object(c.useEffect)((function(){v.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),o(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})})),document.title="Cash Receipt"}),[]);var j=function(e){v.a.put("".concat(w,"/customer/"),e).then((function(e){console.log(e),l(Object(D.a)(Object(D.a)({},r),{},{totalAmountPending:e.data.totalAmountPending})),document.getElementById("totalAmountPending").value=e.data.totalAmountPending,x.b.success("Entry has been added successfully",{position:"bottom-center"})}),(function(e){console.log(e),console.log("error")}))},m=(document.getElementById("add"),document.getElementById("description")),h=document.getElementById("add");null!=m&&null!=h&&(m.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("creditAmountReceived").focus())})),h.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("description").focus())})));var O=a.a.useState(""),f=Object(p.a)(O,2),g=f[0],y=f[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Add CashReceipt"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{height:5},children:Object(d.jsx)(_.a,{inputValue:g,onInputChange:function(e,t){y(t),function(e){v.a.get("".concat(w,"/customer/").concat(e)).then((function(e){console.log(e.data),e.data===[]&&x.b.success("No customer found",{position:"bottom-center"}),l(e.data)}),(function(e){console.log(e)}))}(t)},id:"controllable-states-demo",options:n,getOptionLabel:function(e){return e.name},style:{width:300},renderInput:function(e){return Object(d.jsx)(H.a,Object(D.a)(Object(D.a)({},e),{},{label:"Search Name",variant:"outlined",size:"small"}))}})}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{onSubmit:function(e){console.log(r),j(r),e.target.reset(),document.getElementById("controllable-states-demo").focus(),e.preventDefault()},children:[Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"description",style:{width:300},children:"Description"}),Object(d.jsx)(S.a,{type:"textarea",placeholder:"Enter Description",name:"description",id:"description",maxlength:"110",onChange:function(e){l(Object(D.a)(Object(D.a)({},r),{},{description:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"totalAmountPending",style:{width:300},children:"Total Amount Pending"}),Object(d.jsx)(S.a,{type:"text",defaultValue:r.totalAmountPending,readOnly:"totalAmountPending",id:"totalAmountPending",style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"creditAmountReceived",style:{width:300},children:"Credit Amount"}),Object(d.jsx)(S.a,{placeholder:"Enter Credit Amount",name:"creditAmountReceived",id:"creditAmountReceived",required:!0,onChange:function(e){l(Object(D.a)(Object(D.a)({},r),{},{creditAmountReceived:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"transactionEffectiveDate",style:{width:300},children:"Transaction Date"}),Object(d.jsx)(S.a,{type:"date",placeholder:"Enter Date",defaultValue:r.transactionEffectiveDate,readOnly:"true",name:"transactionEffectiveDate",id:"transactionEffectiveDate",required:!0,style:{width:300}})]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",id:"add",children:"Add Entry"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]})]})})),K=(Object(I.e)((function(e){console.warn("props",e.match.params.firstName);Object(c.useEffect)((function(){v.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),o(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}),[]);var t=Object(c.useState)([]),n=Object(p.a)(t,2),a=n[0],o=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Add CashReceipt"}),Object(d.jsx)("br",{}),Object(d.jsx)(W,{data:a})]})})),function(){var e;Object(c.useEffect)((function(){document.title="Ledger"}),[]);var t=Object(c.useState)([]),n=Object(p.a)(t,2),o=n[0],s=n[1],i=Object(c.useState)(!1),r=Object(p.a)(i,2),l=(r[0],r[1]),j=Object(c.useState)([]),m=Object(p.a)(j,2),h=m[0],g=m[1],y=Object(c.useState)({id:1,firstName:"RATAN MAJUR",lastName:null,transactionEffectiveDate:null,totalAmountPending:0,description:null,creditAmountReceived:0,debitAmountReceived:0,receiptLink:null,paymentLink:null,fromDate:null,toDate:null}),A=Object(p.a)(y,2),C=A[0],E=A[1],N=Object(c.useState)([]),B=Object(p.a)(N,2),R=B[0],S=B[1],P=Object(c.useState)([]),k=Object(p.a)(P,2);k[0],k[1];Object(c.useEffect)((function(){v.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),S(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}),[]);var L=o.filter((function(e){if(0!==e.creditAmountReceived)return e})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.firstName}),Object(d.jsx)("td",{children:e.creditAmountReceived}),Object(d.jsx)("td",{children:e.transactionEffectiveDate})]},e.id)})),I=o.filter((function(e){if(0!==e.debitAmountReceived)return e})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.firstName}),Object(d.jsx)("td",{children:e.debitAmountReceived}),Object(d.jsx)("td",{children:e.transactionEffectiveDate})]},e.id)})),V=a.a.useState(""),F=Object(p.a)(V,2),T=F[0],q=F[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{height:5},children:Object(d.jsx)(_.a,{inputValue:T,onInputChange:function(e,t){q(t),E(Object(D.a)(Object(D.a)({},C),{},{firstName:t}))},id:"controllable-states-demo",options:R,getOptionLabel:function(e){return e.name},style:{width:250},renderInput:function(e){return Object(d.jsx)(H.a,Object(D.a)(Object(D.a)({},e),{},{label:"Search Name",variant:"outlined",size:"small"}))}})}),Object(d.jsxs)("form",{onSubmit:function(e){console.log(C),function(e){e.fromDate>e.toDate?x.b.error("From Date Should Be Bigger",{position:"bottom-center"}):v.a.put("".concat(w,"/customer/datewise"),e).then((function(e){console.log(e.data),0===e.data.length&&x.b.error("No Record Found",{position:"bottom-center"}),s(e.data),l(!0)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}(C),function(e){v.a.put("".concat(w,"/customer/endingDateWiseBalance"),e).then((function(e){console.log(e.data),g(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})}))}(C),e.preventDefault()},class:"form-inline",children:[Object(d.jsx)("label",{for:"fromDate",style:{marginLeft:275},children:"From:"}),Object(d.jsx)("input",{type:"date",id:"fromDate",style:{marginLeft:5},onChange:function(e){E(Object(D.a)(Object(D.a)({},C),{},{fromDate:e.target.value}))}}),Object(d.jsx)("label",{for:"todayDate",style:{marginLeft:40},children:"To:"}),Object(d.jsx)("input",{type:"date",id:"todayDate",style:{marginLeft:5},onChange:function(e){E(Object(D.a)(Object(D.a)({},C),{},{toDate:e.target.value}))}}),Object(d.jsx)(u.a,{children:Object(d.jsx)(b.a,{type:"submit",color:"success",children:"Search"})})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"endingBalance",children:"Ending Balance:"}),Object(d.jsx)("input",(e={type:"text",id:"endingBalance",defaultValue:h.endingBalance,readOnly:"true"},Object(z.a)(e,"readOnly","true"),Object(z.a)(e,"style",{marginLeft:5}),e))]}),Object(d.jsx)("br",{}),Object(d.jsxs)(O.a,{children:[Object(d.jsx)(f.a,{md:6,children:Object(d.jsxs)(U.a,{className:"mt-4",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"15%",children:"Name"}),Object(d.jsx)("th",{width:"20%",children:"Credit"}),Object(d.jsx)("th",{width:"15%",children:"Date"})]})}),Object(d.jsx)("tbody",{children:L})]})}),Object(d.jsx)(f.a,{md:6,children:Object(d.jsxs)(U.a,{className:"mt-4 offset-2",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"15%",children:"Name"}),Object(d.jsx)("th",{width:"20%",children:"Debit"}),Object(d.jsx)("th",{width:"15%",children:"Date"})]})}),Object(d.jsx)("tbody",{children:I})]})})]})]})}),Q=Object(I.e)((function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)([]),i=Object(p.a)(s,2),r=i[0],l=i[1];Object(c.useEffect)((function(){v.a.get("".concat(w,"/customer")).then((function(e){console.log(e.data),e.data===[]&&x.b.success("customer has been loaded",{position:"bottom-center"}),o(e.data)}),(function(e){console.log(e),x.b.error("something went wrong",{position:"bottom-center"})})),document.title="Cash Payment"}),[]);var j=function(e){v.a.put("".concat(w,"/customer/"),e).then((function(e){console.log(e),l(Object(D.a)(Object(D.a)({},r),{},{totalAmountPending:e.data.totalAmountPending})),document.getElementById("totalAmountPending").value=e.data.totalAmountPending,x.b.success("Entry has been added successfully",{position:"bottom-center"})}),(function(e){console.log(e),console.log("error")}))},m=document.getElementById("description"),h=document.getElementById("add");null!=m&&null!=h&&(m.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("debitAmountReceived").focus())})),h.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("description").focus())})));var O=a.a.useState([]),f=Object(p.a)(O,2),g=f[0],y=f[1],A=a.a.useState(""),C=Object(p.a)(A,2),E=C[0],N=C[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"Add CashPayment"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{height:5},children:Object(d.jsx)(_.a,{value:g,onChange:function(e,t){y(t)},inputValue:E,onInputChange:function(e,t){N(t),function(e){v.a.get("".concat(w,"/customer/").concat(e)).then((function(e){console.log(e.data),e.data===[]&&x.b.success("No customer found",{position:"bottom-center"}),l(e.data)}),(function(e){console.log(e)}))}(t)},id:"controllable-states-demo",options:n,getOptionLabel:function(e){return e.name},style:{width:300},renderInput:function(e){return Object(d.jsx)(H.a,Object(D.a)(Object(D.a)({},e),{},{label:"Search Name",variant:"outlined",size:"small"}))}})}),Object(d.jsx)("br",{}),Object(d.jsxs)(B.a,{onSubmit:function(e){console.log(r),j(r),e.target.reset(),document.getElementById("controllable-states-demo").focus(),e.preventDefault()},children:[Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"description",style:{width:300},children:"Description"}),Object(d.jsx)(S.a,{type:"textarea",placeholder:"Enter Description",name:"description",id:"description",maxlength:"110",onChange:function(e){l(Object(D.a)(Object(D.a)({},r),{},{description:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"totalAmountPending",style:{width:300},children:"Total Amount Pending"}),Object(d.jsx)(S.a,{type:"text",defaultValue:r.totalAmountPending,readOnly:"totalAmountPending",id:"totalAmountPending",style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"debitAmountReceived",style:{width:300},children:"Debit Amount"}),Object(d.jsx)(S.a,{placeholder:"Enter Credit Amount",name:"debitAmountReceived",id:"debitAmountReceived",required:!0,onChange:function(e){l(Object(D.a)(Object(D.a)({},r),{},{debitAmountReceived:e.target.value}))},style:{width:300}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)("label",{for:"transactionEffectiveDate",style:{width:300},children:"Transaction Date"}),Object(d.jsx)(S.a,{type:"date",placeholder:"Enter Date",defaultValue:r.transactionEffectiveDate,readOnly:"true",name:"transactionEffectiveDate",id:"transactionEffectiveDate",required:!0,style:{width:300}})]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b.a,{type:"submit",color:"success",id:"add",children:"Add Entry"}),"\xa0\xa0\xa0",Object(d.jsx)(b.a,{type:"reset",color:"warning",children:"Clear"})]})]})]})}));n(271);var X=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(x.a,{}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(l,{}),Object(d.jsxs)(O.a,{children:[Object(d.jsx)(f.a,{md:4,children:Object(d.jsx)(L,{})}),Object(d.jsxs)(f.a,{md:8,children:[Object(d.jsx)(I.a,{path:"/",component:h,exact:!0}),Object(d.jsx)(I.a,{path:"/add-customer",component:P,exact:!0}),Object(d.jsx)(I.a,{path:"/view-customers",component:N,exact:!0}),Object(d.jsx)(I.a,{path:"/view-customer/:firstName",component:q,exact:!0}),Object(d.jsx)(I.a,{path:"/update-customer/:firstName",component:M,exact:!0}),Object(d.jsx)(I.a,{path:"/Balance",component:J,exact:!0}),Object(d.jsx)(I.a,{path:"/Balance-CashReceipt",component:G,exact:!0}),Object(d.jsx)(I.a,{path:"/addreceipt-customer/:firstName",component:G,exact:!0}),Object(d.jsx)(I.a,{path:"/Balance-CashPayment",component:Q,exact:!0}),Object(d.jsx)(I.a,{path:"/addpayment-customer/:firstName",component:Q,exact:!0}),Object(d.jsx)(I.a,{path:"/Balance-CashBook",component:K,exact:!0})]})]})]})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,536)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};n(479),n(480);s.a.render(Object(d.jsx)(X,{}),document.getElementById("root")),Y()}},[[481,1,2]]]);
//# sourceMappingURL=main.fca0e979.chunk.js.map