"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=o(n),d=a,m=b["".concat(s,".").concat(d)]||b[d]||c[d]||i;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3540:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>o,toc:()=>u,default:()=>b});var r=n(3117),a=n(102),i=(n(7294),n(3905)),p=["components"],l={id:"interfaces.pubsubclient",title:"Interface: pubSubClient",sidebar_label:"pubSubClient",custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/interfaces.pubsubclient",id:"api/interfaces/interfaces.pubsubclient",isDocsHomePage:!1,title:"Interface: pubSubClient",description:"Interfaces.pubSubClient",source:"@site/docs/api/interfaces/interfaces.pubsubclient.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/interfaces.pubsubclient",permalink:"/hfc-pubsub/api/interfaces/interfaces.pubsubclient",editUrl:null,version:"current",frontMatter:{id:"interfaces.pubsubclient",title:"Interface: pubSubClient",sidebar_label:"pubSubClient",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"PublishOptions",permalink:"/hfc-pubsub/api/interfaces/interfaces.publishoptions"},next:{title:"RetryConfig",permalink:"/hfc-pubsub/api/interfaces/interfaces.retryconfig"}},u=[{value:"Methods",id:"methods",children:[{value:"getAllSubscriptions",id:"getallsubscriptions",children:[]},{value:"publish",id:"publish",children:[]},{value:"subscribe",id:"subscribe",children:[]}]}],c={toc:u};function b(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/namespaces/interfaces"},"Interfaces"),".pubSubClient"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getallsubscriptions"},"getAllSubscriptions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAllSubscriptions"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AllSubscriptions"),"[]",">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AllSubscriptions"),"[]",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/interface/pubSubClient.ts#L16"},"src/interface/pubSubClient.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publish"},"publish"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"publish"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"topic"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/classes/topic"},(0,i.kt)("inlineCode",{parentName:"a"},"Topic")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/interfaces/payload"},(0,i.kt)("inlineCode",{parentName:"a"},"Payload")))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"topic")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/interface/pubSubClient.ts#L11"},"src/interface/pubSubClient.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscribe"},"subscribe"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"subscribe"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"subscriber"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"subscriber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,i.kt)("a",{parentName:"td",href:"/hfc-pubsub/api/classes/subscriber"},(0,i.kt)("inlineCode",{parentName:"a"},"Subscriber")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/interface/pubSubClient.ts#L15"},"src/interface/pubSubClient.ts:15")))}b.isMDXComponent=!0}}]);