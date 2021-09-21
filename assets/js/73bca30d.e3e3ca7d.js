"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[3785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=i,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1768:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>l,toc:()=>c,default:()=>d});var n=r(3117),i=r(102),s=(r(7294),r(3905)),a=["components"],p={id:"subscriber",title:"Class: Subscriber",sidebar_label:"Subscriber",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/classes/subscriber",id:"api/classes/subscriber",isDocsHomePage:!1,title:"Class: Subscriber",description:"deprecated",source:"@site/docs/api/classes/subscriber.md",sourceDirName:"api/classes",slug:"/api/classes/subscriber",permalink:"/hfc-pubsub/api/classes/subscriber",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"subscriber",title:"Class: Subscriber",sidebar_label:"Subscriber",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"PubSubService",permalink:"/hfc-pubsub/api/classes/pubsubservice"},next:{title:"SubscriptionService",permalink:"/hfc-pubsub/api/classes/subscriptionservice"}},c=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"ackDeadlineSeconds",id:"ackdeadlineseconds",children:[]},{value:"description",id:"description",children:[]},{value:"maxMessages",id:"maxmessages",children:[]},{value:"subscriptionName",id:"subscriptionname",children:[]},{value:"topicName",id:"topicname",children:[]}]},{value:"Methods",id:"methods",children:[{value:"handleMessage",id:"handlemessage",children:[]},{value:"init",id:"init",children:[]}]}],b={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new Subscriber"),"()"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/b31030b/src/subscriber/subscriber.ts#L33"},"src/subscriber/subscriber.ts:33")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"ackdeadlineseconds"},"ackDeadlineSeconds"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"ackDeadlineSeconds"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,s.kt)("inlineCode",{parentName:"p"},"10")),(0,s.kt)("p",null,"Acknowledge deadline in seconds. If left\nunset the initial value will be 10 seconds, but it will evolve into the\n99th percentile time it takes to acknowledge a message"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.options.ackDeadlineSeconds"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/b31030b/src/subscriber/subscriber.ts#L33"},"src/subscriber/subscriber.ts:33")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"description"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.description"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/b31030b/src/subscriber/subscriber.ts#L20"},"src/subscriber/subscriber.ts:20")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"maxmessages"},"maxMessages"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"maxMessages"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,s.kt)("inlineCode",{parentName:"p"},"1")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.options.flowControl.maxMessages"),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/b31030b/src/subscriber/subscriber.ts#L25"},"src/subscriber/subscriber.ts:25")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"subscriptionname"},"subscriptionName"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"subscriptionName"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.subscriptionName"),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/b31030b/src/subscriber/subscriber.ts#L15"},"src/subscriber/subscriber.ts:15")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"topicname"},"topicName"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"topicName"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))," in favor of SubscriberV2.metadata.topicName"),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/b31030b/src/subscriber/subscriber.ts#L10"},"src/subscriber/subscriber.ts:10")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"handlemessage"},"handleMessage"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"handleMessage"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"_message"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"_message")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/classes/message"},(0,s.kt)("inlineCode",{parentName:"a"},"Message")))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/b31030b/src/subscriber/subscriber.ts#L53"},"src/subscriber/subscriber.ts:53")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"init"},"init"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"init"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"deprecated"))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/b31030b/src/subscriber/subscriber.ts#L46"},"src/subscriber/subscriber.ts:46")))}d.isMDXComponent=!0}}]);