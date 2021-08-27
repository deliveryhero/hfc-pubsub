"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[913],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=o(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||s;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9122:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>o,toc:()=>d,default:()=>u});var n=a(3117),r=a(102),s=(a(7294),a(3905)),i=["components"],l={id:"message",title:"Class: Message",sidebar_label:"Message",sidebar_position:0,custom_edit_url:null},p=void 0,o={unversionedId:"api/classes/message",id:"api/classes/message",isDocsHomePage:!1,title:"Class: Message",description:"Constructors",source:"@site/docs/api/classes/message.md",sourceDirName:"api/classes",slug:"/api/classes/message",permalink:"/hfc-pubsub/api/classes/message",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"message",title:"Class: Message",sidebar_label:"Message",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Interfaces",permalink:"/hfc-pubsub/api/namespaces/interfaces"},next:{title:"PubSubService",permalink:"/hfc-pubsub/api/classes/pubsubservice"}},d=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"data",id:"data",children:[]},{value:"gCloudMessage",id:"gcloudmessage",children:[]}]},{value:"Methods",id:"methods",children:[{value:"ack",id:"ack",children:[]},{value:"modAck",id:"modack",children:[]},{value:"nack",id:"nack",children:[]},{value:"from",id:"from",children:[]},{value:"fromGCloud",id:"fromgcloud",children:[]}]}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new Message"),"()"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"data"},"data"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"data"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5cd552f/src/message/index.ts#L4"},"src/message/index.ts:4")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"gcloudmessage"},"gCloudMessage"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"gCloudMessage"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Message")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5cd552f/src/message/index.ts#L5"},"src/message/index.ts:5")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"ack"},"ack"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"ack"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5cd552f/src/message/index.ts#L29"},"src/message/index.ts:29")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"modack"},"modAck"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"modAck"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"deadline"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"deadline")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"))))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5cd552f/src/message/index.ts#L35"},"src/message/index.ts:35")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"nack"},"nack"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"nack"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5cd552f/src/message/index.ts#L41"},"src/message/index.ts:41")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"from"},"from"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"from"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/message"},(0,s.kt)("inlineCode",{parentName:"a"},"Message"))),(0,s.kt)("p",null,"Builds a new message object in the synchronous driver.\nUsed by the eventBus."),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"message")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"any")),(0,s.kt)("td",{parentName:"tr",align:"left"},"any message that can be buffered")))),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/message"},(0,s.kt)("inlineCode",{parentName:"a"},"Message"))),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5cd552f/src/message/index.ts#L12"},"src/message/index.ts:12")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"fromgcloud"},"fromGCloud"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"fromGCloud"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/message"},(0,s.kt)("inlineCode",{parentName:"a"},"Message"))),(0,s.kt)("p",null,"Builds a message for Google Cloud Driver"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"message")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Message")),(0,s.kt)("td",{parentName:"tr",align:"left"},"A valid Google Cloud message")))),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/message"},(0,s.kt)("inlineCode",{parentName:"a"},"Message"))),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5cd552f/src/message/index.ts#L22"},"src/message/index.ts:22")))}u.isMDXComponent=!0}}]);