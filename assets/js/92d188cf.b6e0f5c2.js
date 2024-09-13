"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[4832],{5680:(e,r,i)=>{i.d(r,{xA:()=>c,yg:()=>b});var n=i(6540);function t(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function s(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?s(Object(i),!0).forEach((function(r){t(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function p(e,r){if(null==e)return{};var i,n,t=function(e,r){if(null==e)return{};var i,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],r.indexOf(i)>=0||(t[i]=e[i]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=n.createContext({}),o=function(e){var r=n.useContext(l),i=r;return e&&(i="function"==typeof e?e(r):a(a({},r),e)),i},c=function(e){var r=o(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var i=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(i),b=t,g=d["".concat(l,".").concat(b)]||d[b]||u[b]||s;return i?n.createElement(g,a(a({ref:r},c),{},{components:i})):n.createElement(g,a({ref:r},c))}));function b(e,r){var i=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=i.length,a=new Array(s);a[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:t,a[1]=p;for(var o=2;o<s;o++)a[o]=i[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8706:(e,r,i)=>{i.r(r),i.d(r,{default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var n=i(8168),t=i(8587),s=(i(6540),i(5680)),a=["components"],p={id:"SubscriptionService",title:"Class: SubscriptionService",sidebar_label:"SubscriptionService",sidebar_position:0,custom_edit_url:null},l={unversionedId:"api/classes/SubscriptionService",id:"version-v1/api/classes/SubscriptionService",isDocsHomePage:!1,title:"Class: SubscriptionService",description:"Constructors",source:"@site/versioned_docs/version-v1/api/classes/SubscriptionService.md",sourceDirName:"api/classes",slug:"/api/classes/SubscriptionService",permalink:"/hfc-pubsub/v1/api/classes/SubscriptionService",editUrl:null,version:"v1",sidebar_label:"SubscriptionService",sidebarPosition:0,frontMatter:{id:"SubscriptionService",title:"Class: SubscriptionService",sidebar_label:"SubscriptionService",sidebar_position:0,custom_edit_url:null},sidebar:"version-v1/defaultSidebar",previous:{title:"Class: Subscriber",permalink:"/hfc-pubsub/v1/api/classes/Subscriber"},next:{title:"Class: Topic",permalink:"/hfc-pubsub/v1/api/classes/Topic"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_subscribers",id:"_subscribers",children:[]},{value:"defaultSubscriberOptions",id:"defaultsubscriberoptions",children:[]},{value:"instance",id:"instance",children:[]},{value:"subscribers",id:"subscribers",children:[]}]},{value:"Methods",id:"methods",children:[{value:"checkExistence",id:"checkexistence",children:[]},{value:"closeAll",id:"closeall",children:[]},{value:"getSubscribers",id:"getsubscribers",children:[]},{value:"handleError",id:"handleerror",children:[]},{value:"init",id:"init",children:[]},{value:"loadSubscribers",id:"loadsubscribers",children:[]},{value:"loadSubscriptionService",id:"loadsubscriptionservice",children:[]},{value:"mergeSubscribers",id:"mergesubscribers",children:[]}]}],c={toc:o};function u(e){var r=e.components,i=(0,t.A)(e,a);return(0,s.yg)("wrapper",(0,n.A)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"constructors"},"Constructors"),(0,s.yg)("h3",{id:"constructor"},"constructor"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("strong",{parentName:"p"},"new SubscriptionService"),"()"),(0,s.yg)("h4",{id:"defined-in"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L26"},"src/service/subscription.ts:26")),(0,s.yg)("h2",{id:"properties"},"Properties"),(0,s.yg)("h3",{id:"_subscribers"},"_","subscribers"),(0,s.yg)("p",null,"\u25aa ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,s.yg)("strong",{parentName:"p"},"_","subscribers"),": ",(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")," = ",(0,s.yg)("inlineCode",{parentName:"p"},"[]")),(0,s.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L20"},"src/service/subscription.ts:20")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"defaultsubscriberoptions"},"defaultSubscriberOptions"),(0,s.yg)("p",null,"\u25aa ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"defaultSubscriberOptions"),": ",(0,s.yg)("a",{parentName:"p",href:"../interfaces/SubscriberOptions"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriberOptions"))),(0,s.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L22"},"src/service/subscription.ts:22")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"instance"},"instance"),(0,s.yg)("p",null,"\u25aa ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"instance"),": ",(0,s.yg)("a",{parentName:"p",href:"SubscriptionService"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriptionService"))),(0,s.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L24"},"src/service/subscription.ts:24")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"subscribers"},"subscribers"),(0,s.yg)("p",null,"\u25aa ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"subscribers"),": (typeof ",(0,s.yg)("a",{parentName:"p",href:"Subscriber"},(0,s.yg)("inlineCode",{parentName:"a"},"Subscriber"))," ","|"," typeof ",(0,s.yg)("inlineCode",{parentName:"p"},"default")," ","|"," ",(0,s.yg)("inlineCode",{parentName:"p"},"SubscriberObject"),")[] = ",(0,s.yg)("inlineCode",{parentName:"p"},"[]")),(0,s.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L15"},"src/service/subscription.ts:15")),(0,s.yg)("h2",{id:"methods"},"Methods"),(0,s.yg)("h3",{id:"checkexistence"},"checkExistence"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Protected")," ",(0,s.yg)("strong",{parentName:"p"},"checkExistence"),"(",(0,s.yg)("inlineCode",{parentName:"p"},"object"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"property"),"): ",(0,s.yg)("inlineCode",{parentName:"p"},"void")),(0,s.yg)("h4",{id:"parameters"},"Parameters"),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,s.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"object")),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"any"))),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"property")),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"string"))))),(0,s.yg)("h4",{id:"returns"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"void")),(0,s.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L30"},"src/service/subscription.ts:30")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"closeall"},"closeAll"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"closeAll"),"(): ",(0,s.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,s.yg)("p",null,"Call this function from a process exit handler to close all current subscriptions"),(0,s.yg)("h4",{id:"returns-1"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,s.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L59"},"src/service/subscription.ts:59")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"getsubscribers"},"getSubscribers"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"getSubscribers"),"(): ",(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.yg)("h4",{id:"returns-2"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L63"},"src/service/subscription.ts:63")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"handleerror"},"handleError"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"handleError"),"(",(0,s.yg)("inlineCode",{parentName:"p"},"error"),"): ",(0,s.yg)("inlineCode",{parentName:"p"},"void")),(0,s.yg)("p",null,"If passed, it would serve as the default error handler at SubscriptionService level\nApplications should override this with custom error handling"),(0,s.yg)("h4",{id:"parameters-1"},"Parameters"),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,s.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"error")),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"Error"))))),(0,s.yg)("h4",{id:"returns-3"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"void")),(0,s.yg)("h4",{id:"defined-in-8"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L49"},"src/service/subscription.ts:49")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"init"},"init"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"init"),"(): ",(0,s.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,s.yg)("h4",{id:"returns-4"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,s.yg)("h4",{id:"defined-in-9"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L41"},"src/service/subscription.ts:41")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"loadsubscribers"},"loadSubscribers"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,s.yg)("strong",{parentName:"p"},"loadSubscribers"),"(): ",(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.yg)("h4",{id:"returns-5"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.yg)("h4",{id:"defined-in-10"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L72"},"src/service/subscription.ts:72")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"loadsubscriptionservice"},"loadSubscriptionService"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"loadSubscriptionService"),"(): typeof ",(0,s.yg)("a",{parentName:"p",href:"SubscriptionService"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriptionService"))),(0,s.yg)("h4",{id:"returns-6"},"Returns"),(0,s.yg)("p",null,"typeof ",(0,s.yg)("a",{parentName:"p",href:"SubscriptionService"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriptionService"))),(0,s.yg)("h4",{id:"defined-in-11"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L112"},"src/service/subscription.ts:112")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"mergesubscribers"},"mergeSubscribers"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,s.yg)("strong",{parentName:"p"},"mergeSubscribers"),"(",(0,s.yg)("inlineCode",{parentName:"p"},"subscribersFromService"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"subscribersFromDirectory"),"): ",(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.yg)("h4",{id:"parameters-2"},"Parameters"),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,s.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"subscribersFromService")),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"Subscribers"))),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"subscribersFromDirectory")),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"Subscribers"))))),(0,s.yg)("h4",{id:"returns-7"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.yg)("h4",{id:"defined-in-12"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L95"},"src/service/subscription.ts:95")))}u.isMDXComponent=!0}}]);