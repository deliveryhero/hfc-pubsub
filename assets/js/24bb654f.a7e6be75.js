"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[8936],{5680:(e,r,i)=>{i.d(r,{xA:()=>c,yg:()=>b});var t=i(6540);function n(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function s(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?s(Object(i),!0).forEach((function(r){n(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function o(e,r){if(null==e)return{};var i,t,n=function(e,r){if(null==e)return{};var i,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],r.indexOf(i)>=0||(n[i]=e[i]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=t.createContext({}),l=function(e){var r=t.useContext(p),i=r;return e&&(i="function"==typeof e?e(r):a(a({},r),e)),i},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var i=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(i),b=n,g=d["".concat(p,".").concat(b)]||d[b]||u[b]||s;return i?t.createElement(g,a(a({ref:r},c),{},{components:i})):t.createElement(g,a({ref:r},c))}));function b(e,r){var i=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=i.length,a=new Array(s);a[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<s;l++)a[l]=i[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4637:(e,r,i)=>{i.r(r),i.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=i(8168),n=i(8587),s=(i(6540),i(5680)),a=["components"],o={id:"SubscriptionService",title:"Class: SubscriptionService",sidebar_label:"SubscriptionService",sidebar_position:0,custom_edit_url:null},p={unversionedId:"api/classes/SubscriptionService",id:"api/classes/SubscriptionService",isDocsHomePage:!1,title:"Class: SubscriptionService",description:"Constructors",source:"@site/docs/api/classes/SubscriptionService.md",sourceDirName:"api/classes",slug:"/api/classes/SubscriptionService",permalink:"/hfc-pubsub/api/classes/SubscriptionService",editUrl:null,version:"current",sidebar_label:"SubscriptionService",sidebarPosition:0,frontMatter:{id:"SubscriptionService",title:"Class: SubscriptionService",sidebar_label:"SubscriptionService",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Class: PubSubService",permalink:"/hfc-pubsub/api/classes/PubSubService"},next:{title:"Class: Topic<P>",permalink:"/hfc-pubsub/api/classes/Topic"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"defaultSubscriberOptions",id:"defaultsubscriberoptions",children:[]},{value:"subscribers",id:"subscribers",children:[]}]},{value:"Methods",id:"methods",children:[{value:"closeAll",id:"closeall",children:[]},{value:"getSubscribers",id:"getsubscribers",children:[]},{value:"handleError",id:"handleerror",children:[]},{value:"init",id:"init",children:[]},{value:"loadSubscriptionService",id:"loadsubscriptionservice",children:[]}]}],c={toc:l};function u(e){var r=e.components,i=(0,n.A)(e,a);return(0,s.yg)("wrapper",(0,t.A)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"constructors"},"Constructors"),(0,s.yg)("h3",{id:"constructor"},"constructor"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("strong",{parentName:"p"},"new SubscriptionService"),"()"),(0,s.yg)("h4",{id:"defined-in"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/service/subscription.ts#L23"},"src/service/subscription.ts:23")),(0,s.yg)("h2",{id:"properties"},"Properties"),(0,s.yg)("h3",{id:"defaultsubscriberoptions"},"defaultSubscriberOptions"),(0,s.yg)("p",null,"\u25aa ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"defaultSubscriberOptions"),": ",(0,s.yg)("a",{parentName:"p",href:"../interfaces/SubscriberOptions"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriberOptions"))),(0,s.yg)("p",null,"All subscriptions will inherit from this default options object"),(0,s.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/service/subscription.ts#L21"},"src/service/subscription.ts:21")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"subscribers"},"subscribers"),(0,s.yg)("p",null,"\u25aa ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"subscribers"),": ",(0,s.yg)("a",{parentName:"p",href:"../interfaces/SubscriberObject"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriberObject")),"<",(0,s.yg)("inlineCode",{parentName:"p"},"any"),">","[] = ",(0,s.yg)("inlineCode",{parentName:"p"},"[]")),(0,s.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/service/subscription.ts#L14"},"src/service/subscription.ts:14")),(0,s.yg)("h2",{id:"methods"},"Methods"),(0,s.yg)("h3",{id:"closeall"},"closeAll"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"closeAll"),"(): ",(0,s.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,s.yg)("p",null,"Call this function from a process exit handler to close all current subscriptions"),(0,s.yg)("h4",{id:"returns"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,s.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/service/subscription.ts#L64"},"src/service/subscription.ts:64")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"getsubscribers"},"getSubscribers"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"getSubscribers"),"(): ",(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.yg)("h4",{id:"returns-1"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Subscribers")),(0,s.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/service/subscription.ts#L68"},"src/service/subscription.ts:68")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"handleerror"},"handleError"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"handleError"),"(",(0,s.yg)("inlineCode",{parentName:"p"},"err"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"metadata"),"): ",(0,s.yg)("inlineCode",{parentName:"p"},"void")),(0,s.yg)("p",null,"If passed, it would serve as the default error handler for all subscriptions.\nApplications should override this with custom error handling: log error, cleanup resources and exit the process.\nDefault logs the error and ",(0,s.yg)("strong",{parentName:"p"},"rethrows")),(0,s.yg)("h4",{id:"parameters"},"Parameters"),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,s.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"err")),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"Error"))),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("inlineCode",{parentName:"td"},"metadata")),(0,s.yg)("td",{parentName:"tr",align:"left"},(0,s.yg)("a",{parentName:"td",href:"../interfaces/SubscriberMetadata"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriberMetadata")))))),(0,s.yg)("h4",{id:"returns-2"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"void")),(0,s.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/service/subscription.ts#L51"},"src/service/subscription.ts:51")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"init"},"init"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"init"),"(): ",(0,s.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,s.yg)("p",null,"Can be used to initialize process level globals (like DB Connections).\nDefault is a no-op"),(0,s.yg)("h4",{id:"returns-3"},"Returns"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,s.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/service/subscription.ts#L42"},"src/service/subscription.ts:42")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"loadsubscriptionservice"},"loadSubscriptionService"),(0,s.yg)("p",null,"\u25b8 ",(0,s.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,s.yg)("strong",{parentName:"p"},"loadSubscriptionService"),"(): typeof ",(0,s.yg)("a",{parentName:"p",href:"SubscriptionService"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriptionService"))),(0,s.yg)("h4",{id:"returns-4"},"Returns"),(0,s.yg)("p",null,"typeof ",(0,s.yg)("a",{parentName:"p",href:"SubscriptionService"},(0,s.yg)("inlineCode",{parentName:"a"},"SubscriptionService"))),(0,s.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/service/subscription.ts#L112"},"src/service/subscription.ts:112")))}u.isMDXComponent=!0}}]);