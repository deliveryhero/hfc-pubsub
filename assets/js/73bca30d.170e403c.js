"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(r),d=i,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||s;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7692:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>b});var n=r(3117),i=r(102),s=(r(7294),r(3905)),a=["components"],o={id:"subscriber",title:"Class: Subscriber",sidebar_label:"Subscriber",sidebar_position:0,custom_edit_url:null},c=void 0,p={unversionedId:"api/classes/subscriber",id:"api/classes/subscriber",isDocsHomePage:!1,title:"Class: Subscriber",description:"Constructors",source:"@site/docs/api/classes/subscriber.md",sourceDirName:"api/classes",slug:"/api/classes/subscriber",permalink:"/hfc-pubsub/api/classes/subscriber",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"subscriber",title:"Class: Subscriber",sidebar_label:"Subscriber",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"PubSubService",permalink:"/hfc-pubsub/api/classes/pubsubservice"},next:{title:"SubscriptionService",permalink:"/hfc-pubsub/api/classes/subscriptionservice"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"ackDeadlineSeconds",id:"ackdeadlineseconds",children:[]},{value:"description",id:"description",children:[]},{value:"maxMessages",id:"maxmessages",children:[]},{value:"subscriptionName",id:"subscriptionname",children:[]},{value:"topicName",id:"topicname",children:[]}]},{value:"Methods",id:"methods",children:[{value:"handleMessage",id:"handlemessage",children:[]},{value:"init",id:"init",children:[]}]}],u={toc:l};function b(e){var t=e.components,r=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new Subscriber"),"()"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriber.ts#L29"},"src/subscriber/subscriber.ts:29")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"ackdeadlineseconds"},"ackDeadlineSeconds"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"ackDeadlineSeconds"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,s.kt)("inlineCode",{parentName:"p"},"10")),(0,s.kt)("p",null,"Acknowledge deadline in seconds. If left\nunset the initial value will be 10 seconds, but it will evolve into the\n99th percentile time it takes to acknowledge a message"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.options.ackDeadlineSeconds"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriber.ts#L29"},"src/subscriber/subscriber.ts:29")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"description"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.description"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriber.ts#L16"},"src/subscriber/subscriber.ts:16")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"maxmessages"},"maxMessages"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"maxMessages"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,s.kt)("inlineCode",{parentName:"p"},"1")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.options.flowControl.maxMessages"),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriber.ts#L21"},"src/subscriber/subscriber.ts:21")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"subscriptionname"},"subscriptionName"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"subscriptionName"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.subscriptionName"),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriber.ts#L11"},"src/subscriber/subscriber.ts:11")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"topicname"},"topicName"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"topicName"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.topicName"),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriber.ts#L6"},"src/subscriber/subscriber.ts:6")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"handlemessage"},"handleMessage"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"handleMessage"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"_message"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"_message")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/classes/message"},(0,s.kt)("inlineCode",{parentName:"a"},"Message")))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriber.ts#L40"},"src/subscriber/subscriber.ts:40")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"init"},"init"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"init"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriber.ts#L36"},"src/subscriber/subscriber.ts:36")))}b.isMDXComponent=!0}}]);