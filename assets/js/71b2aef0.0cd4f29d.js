"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[6705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,m=d["".concat(o,".").concat(c)]||d[c]||b[c]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9304:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>o,toc:()=>s,default:()=>b});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],p={id:"Interfaces.pubSubClient",title:"Interface: pubSubClient",sidebar_label:"pubSubClient",custom_edit_url:null},o={unversionedId:"api/interfaces/Interfaces.pubSubClient",id:"version-v1/api/interfaces/Interfaces.pubSubClient",isDocsHomePage:!1,title:"Interface: pubSubClient",description:"Interfaces.pubSubClient",source:"@site/versioned_docs/version-v1/api/interfaces/Interfaces.pubSubClient.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Interfaces.pubSubClient",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.pubSubClient",editUrl:null,version:"v1",sidebar_label:"pubSubClient",frontMatter:{id:"Interfaces.pubSubClient",title:"Interface: pubSubClient",sidebar_label:"pubSubClient",custom_edit_url:null},sidebar:"version-v1/defaultSidebar",previous:{title:"Interface: TopicPublishOptions",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.TopicPublishOptions"}},s=[{value:"Methods",id:"methods",children:[{value:"getAllSubscriptions",id:"getallsubscriptions",children:[]},{value:"publish",id:"publish",children:[]},{value:"subscribe",id:"subscribe",children:[]}]}],u={toc:s};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../namespaces/Interfaces"},"Interfaces"),".pubSubClient"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getallsubscriptions"},"getAllSubscriptions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAllSubscriptions"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AllSubscriptions"),"[]",">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"AllSubscriptions"),"[]",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/pubSubClient.ts#L16"},"src/interface/pubSubClient.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publish"},"publish"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"publish"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"topic"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"../classes/Topic"},(0,i.kt)("inlineCode",{parentName:"a"},"Topic")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"Payload"},(0,i.kt)("inlineCode",{parentName:"a"},"Payload")))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"topic")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/pubSubClient.ts#L11"},"src/interface/pubSubClient.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscribe"},"subscribe"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"subscribe"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"subscriber"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"subscriber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,i.kt)("a",{parentName:"td",href:"../classes/Subscriber"},(0,i.kt)("inlineCode",{parentName:"a"},"Subscriber")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/pubSubClient.ts#L15"},"src/interface/pubSubClient.ts:15")))}b.isMDXComponent=!0}}]);