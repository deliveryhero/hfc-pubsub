"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[2206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},o=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,k=b["".concat(c,".").concat(d)]||b[d]||u[d]||s;return r?i.createElement(k,a(a({ref:t},o),{},{components:r})):i.createElement(k,a({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<s;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7503:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>o,default:()=>b});var i=r(3117),n=r(102),s=(r(7294),r(3905)),a=["components"],p={id:"subscriptionservice",title:"Class: SubscriptionService",sidebar_label:"SubscriptionService",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"api/classes/subscriptionservice",id:"api/classes/subscriptionservice",isDocsHomePage:!1,title:"Class: SubscriptionService",description:"Constructors",source:"@site/docs/api/classes/subscriptionservice.md",sourceDirName:"api/classes",slug:"/api/classes/subscriptionservice",permalink:"/hfc-pubsub/api/classes/subscriptionservice",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"subscriptionservice",title:"Class: SubscriptionService",sidebar_label:"SubscriptionService",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Subscriber",permalink:"/hfc-pubsub/api/classes/subscriber"},next:{title:"Topic",permalink:"/hfc-pubsub/api/classes/topic"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_subscribers",id:"_subscribers",children:[]},{value:"defaultSubscriberOptions",id:"defaultsubscriberoptions",children:[]},{value:"instance",id:"instance",children:[]},{value:"subscribers",id:"subscribers",children:[]}]},{value:"Methods",id:"methods",children:[{value:"checkExistence",id:"checkexistence",children:[]},{value:"closeAll",id:"closeall",children:[]},{value:"getSubscribers",id:"getsubscribers",children:[]},{value:"init",id:"init",children:[]},{value:"loadSubscribers",id:"loadsubscribers",children:[]},{value:"loadSubscriptionService",id:"loadsubscriptionservice",children:[]},{value:"mergeSubscribers",id:"mergesubscribers",children:[]}]}],u={toc:o};function b(e){var t=e.components,r=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new SubscriptionService"),"()"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L24"},"src/service/subscription.ts:24")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"_subscribers"},"_","subscribers"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,s.kt)("strong",{parentName:"p"},"_","subscribers"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Subscribers")," = ",(0,s.kt)("inlineCode",{parentName:"p"},"[]")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L20"},"src/service/subscription.ts:20")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"defaultsubscriberoptions"},"defaultSubscriberOptions"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"defaultSubscriberOptions"),": ",(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/interfaces/subscriberoptions"},(0,s.kt)("inlineCode",{parentName:"a"},"SubscriberOptions"))),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L22"},"src/service/subscription.ts:22")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"instance"},"instance"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"instance"),": ",(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/subscriptionservice"},(0,s.kt)("inlineCode",{parentName:"a"},"SubscriptionService"))),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L24"},"src/service/subscription.ts:24")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"subscribers"},"subscribers"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"subscribers"),": (typeof ",(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/subscriber"},(0,s.kt)("inlineCode",{parentName:"a"},"Subscriber"))," ","|"," typeof ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," ","|"," ",(0,s.kt)("inlineCode",{parentName:"p"},"SubscriberObject"),")[] = ",(0,s.kt)("inlineCode",{parentName:"p"},"[]")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L15"},"src/service/subscription.ts:15")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"checkexistence"},"checkExistence"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.kt)("strong",{parentName:"p"},"checkExistence"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"property"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"object")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"property")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L30"},"src/service/subscription.ts:30")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"closeall"},"closeAll"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"closeAll"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("p",null,"Call this function from a process exit handler to close all current subscriptions"),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L48"},"src/service/subscription.ts:48")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getsubscribers"},"getSubscribers"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"getSubscribers"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L52"},"src/service/subscription.ts:52")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"init"},"init"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"init"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L41"},"src/service/subscription.ts:41")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"loadsubscribers"},"loadSubscribers"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,s.kt)("strong",{parentName:"p"},"loadSubscribers"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L61"},"src/service/subscription.ts:61")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"loadsubscriptionservice"},"loadSubscriptionService"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"loadSubscriptionService"),"(): typeof ",(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/subscriptionservice"},(0,s.kt)("inlineCode",{parentName:"a"},"SubscriptionService"))),(0,s.kt)("h4",{id:"returns-5"},"Returns"),(0,s.kt)("p",null,"typeof ",(0,s.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/subscriptionservice"},(0,s.kt)("inlineCode",{parentName:"a"},"SubscriptionService"))),(0,s.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L101"},"src/service/subscription.ts:101")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"mergesubscribers"},"mergeSubscribers"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,s.kt)("strong",{parentName:"p"},"mergeSubscribers"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"subscribersFromService"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"subscribersFromDirectory"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"subscribersFromService")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Subscribers"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"subscribersFromDirectory")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Subscribers"))))),(0,s.kt)("h4",{id:"returns-6"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/1dbaeb2/src/service/subscription.ts#L84"},"src/service/subscription.ts:84")))}b.isMDXComponent=!0}}]);