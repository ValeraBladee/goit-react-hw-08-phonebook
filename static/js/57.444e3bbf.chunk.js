"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[57],{2057:function(t,e,n){n.r(e),n.d(e,{default:function(){return Q}});var a=n(2791),s=n(9434),r=n(5705),o=n(3634),c=n(6916),i=function(t){return t.contactsBook.contacts.items},l=function(t){return t.contactsBook.contacts.isLoading},m=function(t){return t.contactsBook.contacts.error},u=function(t){return t.contactsBook.filter},_=(0,c.P1)([u,i],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))})),d=n(1686),h=n.n(d),p=n(6727),x="ContactForm_contactFormWrap__JSni7",f="ContactForm_formTitle__N6O4g",j="ContactForm_form__dhl+T",b="ContactForm_formLabel__TSwxK",C="ContactForm_formInput__GszVU",N="ContactForm_formBtn__qZGY3",v="ContactForm_error__C1smZ",F=n(184),g={name:"",number:""},k=p.Ry().shape({name:p.Z_().min(2,"Must be at least 2 characters long").max(70,"Must be no more than 70 characters long"),number:p.Rx()}),L=function(){var t=(0,s.I0)(),e=(0,s.v9)(i);return(0,F.jsxs)("div",{className:x,children:[(0,F.jsx)("h1",{className:f,children:"Phonebook"}),(0,F.jsx)(r.J9,{initialValues:g,validationSchema:k,onSubmit:function(n,a){var s=a.resetForm;e.find((function(t){return t.name.toLowerCase()===n.name.toLowerCase()}))?h().Notify.failure("".concat(n.name," is already in contacts!"),{position:"left-top",distance:"10px"}):(t((0,o.uK)({name:n.name,number:n.number})),s())},children:(0,F.jsxs)(r.l0,{className:j,autoComplete:"off",children:[(0,F.jsxs)("label",{className:b,htmlFor:"name",children:["Name",(0,F.jsx)(r.gN,{className:C,type:"text",name:"name",required:!0}),(0,F.jsx)("span",{className:v,children:(0,F.jsx)(r.Bc,{name:"name"})})]}),(0,F.jsxs)("label",{className:b,htmlFor:"number",children:["Number",(0,F.jsx)(r.gN,{className:C,type:"tel",name:"number",placeholder:"+380",required:!0}),(0,F.jsx)("span",{className:v,children:(0,F.jsx)(r.Bc,{name:"number"})})]}),(0,F.jsx)("button",{className:N,type:"submit",children:"Add contact"})]})})]})},y=n(5748),w=n(7840),B="Filter_filterWrap__xOHoa",I="Filter_contactsTitle__eTnDx",T="Filter_inputWrap__XEHXz",W="Filter_filterText__QGy-k",S="Filter_filterInput__1Cysk",z={padding:"5px 65px",position:"absolute",bottom:"-20px",left:"60px"};function G(){var t=(0,s.I0)(),e=(0,s.v9)(u),n=(0,s.v9)(l);return(0,F.jsxs)("div",{className:B,children:[(0,F.jsx)("h2",{className:I,children:"Contacts"}),(0,F.jsxs)("div",{className:T,children:[(0,F.jsx)("p",{className:W,children:"Find contacts by name"}),(0,F.jsx)("input",{className:S,type:"text",onChange:function(e){var n=e.target.value.trim();t((0,w.T)(n))},value:e,name:"filter"})]}),n&&(0,F.jsx)(y.g4,{height:"20",width:"50",radius:"10",color:"#9B5CFF",wrapperClassName:"spinner",wrapperStyle:z,visible:!0})]})}var Z=n(4373),q=n(6856),E="ContactList_noContact__7t3Lb",H="ContactList_contactList__UFVCg",K="ContactList_contactIcon__nWatp",M="ContactList_contactItem__ppNQ5",P="ContactList_deleteBtn__1dg25",V="ContactList_deleteIcon__-gWLm";function J(){var t=(0,s.v9)(_),e=(0,s.v9)(u),n=(0,s.v9)(i),a=(0,s.I0)();return(0,F.jsx)("ul",{className:H,children:0===n.length?(0,F.jsx)("span",{className:E,children:"You have no contacts in the phonebook yet"}):(0,F.jsx)(F.Fragment,{children:t.map((function(t){var n=t.id,s=t.name,r=t.number;return(0,F.jsxs)("li",{className:M,children:[(0,F.jsx)(Z.H27,{size:25,className:K}),s," : ",r,(0,F.jsx)("button",{className:P,onClick:function(){return a((0,o.GK)(n))},name:"delete",value:e,type:"button",children:(0,F.jsx)(q.ZkW,{size:22,className:V})})]},n)}))})})}var O="ContactsPage_contactsWrap__uEBMj";function Q(){var t=(0,s.I0)(),e=(0,s.v9)(m);return(0,a.useEffect)((function(){t((0,o.yF)())}),[t]),(0,F.jsxs)("div",{className:O,children:[(0,F.jsx)(L,{}),(0,F.jsx)(G,{}),e&&(0,F.jsx)("b",{children:e}),(0,F.jsx)(J,{})]})}}}]);
//# sourceMappingURL=57.444e3bbf.chunk.js.map