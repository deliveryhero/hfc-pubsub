"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=u(n),c=i,k=b["".concat(l,".").concat(c)]||b[c]||o[c]||a;return n?r.createElement(k,p(p({ref:t},d),{},{components:n})):r.createElement(k,p({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9521:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>d,default:()=>b});var r=n(3117),i=n(102),a=(n(7294),n(3905)),p=["components"],s={id:"pubsubservice",title:"Class: PubSubService",sidebar_label:"PubSubService",sidebar_position:0,custom_edit_url:null},l=void 0,u={unversionedId:"api/classes/pubsubservice",id:"api/classes/pubsubservice",isDocsHomePage:!1,title:"Class: PubSubService",description:"Constructors",source:"@site/docs/api/classes/pubsubservice.md",sourceDirName:"api/classes",slug:"/api/classes/pubsubservice",permalink:"/hfc-pubsub/api/classes/pubsubservice",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"pubsubservice",title:"Class: PubSubService",sidebar_label:"PubSubService",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Message",permalink:"/hfc-pubsub/api/classes/message"},next:{title:"Subscriber",permalink:"/hfc-pubsub/api/classes/subscriber"}},d=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"client",id:"client",children:[]},{value:"driver",id:"driver",children:[]},{value:"instance",id:"instance",children:[]},{value:"status",id:"status",children:[]}]},{value:"Methods",id:"methods",children:[{value:"bind",id:"bind",children:[]},{value:"closeAll",id:"closeall",children:[]},{value:"getAllSubscriptions",id:"getallsubscriptions",children:[]},{value:"getClient",id:"getclient",children:[]},{value:"getSubscribers",id:"getsubscribers",children:[]},{value:"initClient",id:"initclient",children:[]},{value:"initDriver",id:"initdriver",children:[]},{value:"publish",id:"publish",children:[]},{value:"shouldStartSynchronousSubscriptions",id:"shouldstartsynchronoussubscriptions",children:[]},{value:"startSubscriptions",id:"startsubscriptions",children:[]},{value:"subscribe",id:"subscribe",children:[]},{value:"syncDriverIsEnabled",id:"syncdriverisenabled",children:[]},{value:"validate",id:"validate",children:[]},{value:"getInstance",id:"getinstance",children:[]}]}],o={toc:d};function b(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new PubSubService"),"()"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L14"},"src/service/pubsub.ts:14")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"client"},"client"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"client"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"PubSubClientV2")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L11"},"src/service/pubsub.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"driver"},"driver"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"driver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"synchronous"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"google"')),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L13"},"src/service/pubsub.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"instance"},"instance"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"instance"),": ",(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/pubsubservice"},(0,a.kt)("inlineCode",{parentName:"a"},"PubSubService"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L12"},"src/service/pubsub.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"status"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"ready"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"pending"')," = ",(0,a.kt)("inlineCode",{parentName:"p"},"'pending'")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L14"},"src/service/pubsub.ts:14")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"bind"},"bind"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"bind"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"instance"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"instance")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/classes/pubsubservice"},(0,a.kt)("inlineCode",{parentName:"a"},"PubSubService")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L22"},"src/service/pubsub.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"closeall"},"closeAll"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"closeAll"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L83"},"src/service/pubsub.ts:83")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getallsubscriptions"},"getAllSubscriptions"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getAllSubscriptions"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"AllSubscriptions"),"[]",">"),(0,a.kt)("p",null,"Retrieves a list of subscribers"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"AllSubscriptions"),"[]",">"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L147"},"src/service/pubsub.ts:147")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getclient"},"getClient"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"getClient"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"PubSubClientV2")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PubSubClientV2")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L75"},"src/service/pubsub.ts:75")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getsubscribers"},"getSubscribers"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSubscribers"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscribers")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Subscribers")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L79"},"src/service/pubsub.ts:79")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initclient"},"initClient"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initClient"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L39"},"src/service/pubsub.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initdriver"},"initDriver"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"initDriver"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L27"},"src/service/pubsub.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"publish"},"publish"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"publish"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"P"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"topic"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("p",null,"Publishes new orders to PubSub."),(0,a.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/classes/topic"},(0,a.kt)("inlineCode",{parentName:"a"},"Topic")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"P")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/interfaces/payload"},(0,a.kt)("inlineCode",{parentName:"a"},"Payload")))))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"topic")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"P"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/interfaces/interfaces.publishoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"PublishOptions")))))),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L57"},"src/service/pubsub.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"shouldstartsynchronoussubscriptions"},"shouldStartSynchronousSubscriptions"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"shouldStartSynchronousSubscriptions"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L69"},"src/service/pubsub.ts:69")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"startsubscriptions"},"startSubscriptions"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"startSubscriptions"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L90"},"src/service/pubsub.ts:90")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"subscribe"},"subscribe"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"subscribe"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"subscription"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Subscribes to any given topic"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"subscription")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"SubscriberTuple"))))),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L140"},"src/service/pubsub.ts:140")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"syncdriverisenabled"},"syncDriverIsEnabled"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"syncDriverIsEnabled"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-11"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L35"},"src/service/pubsub.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"validate"},"validate"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"validate"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"P"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"topic"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Validates Topic and Message according to validation rules set in Topic class"),(0,a.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/classes/topic"},(0,a.kt)("inlineCode",{parentName:"a"},"Topic")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"P")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/interfaces/payload"},(0,a.kt)("inlineCode",{parentName:"a"},"Payload")))))),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"topic")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Topic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"P")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Message")))),(0,a.kt)("h4",{id:"returns-12"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L129"},"src/service/pubsub.ts:129")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getinstance"},"getInstance"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"getInstance"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/pubsubservice"},(0,a.kt)("inlineCode",{parentName:"a"},"PubSubService"))),(0,a.kt)("h4",{id:"returns-13"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/classes/pubsubservice"},(0,a.kt)("inlineCode",{parentName:"a"},"PubSubService"))),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/9b323ef/src/service/pubsub.ts#L47"},"src/service/pubsub.ts:47")))}b.isMDXComponent=!0}}]);