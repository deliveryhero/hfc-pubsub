"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[7597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3372:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],p={id:"index",title:"@honestfoodcompany/pubsub",slug:"/api/",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},s={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"@honestfoodcompany/pubsub",description:"Classes",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/hfc-pubsub/api/",editUrl:null,version:"current",sidebar_label:"Exports",sidebarPosition:.5,frontMatter:{id:"index",title:"@honestfoodcompany/pubsub",slug:"/api/",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Other Options",permalink:"/hfc-pubsub/options"},next:{title:"Class: Message<T>",permalink:"/hfc-pubsub/api/classes/Message"}},o=[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[{value:"isGzipCompressed",id:"isgzipcompressed",children:[]},{value:"setLogger",id:"setlogger",children:[]}]}],u={toc:o};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Message"},"Message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/PubSubService"},"PubSubService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/SubscriptionService"},"SubscriptionService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Topic"},"Topic"))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/Payload"},"Payload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/SubscriberMetadata"},"SubscriberMetadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/SubscriberObject"},"SubscriberObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/SubscriberOptions"},"SubscriberOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/TopicOptions"},"TopicOptions"))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"isgzipcompressed"},"isGzipCompressed"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"isGzipCompressed"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"buf"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"gzip files contain a 10-byte header, containing a:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"magic number (1f 8b)"),(0,i.kt)("li",{parentName:"ul"},"the compression method (08 for DEFLATE)"),(0,i.kt)("li",{parentName:"ul"},"1-byte of header flags, a 4-byte timestamp, compression flags and the operating system ID.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Gzip#File_format"},"https://en.wikipedia.org/wiki/Gzip#File_format")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"buf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/f49f257/src/message/gzip.ts#L9"},"src/message/gzip.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setlogger"},"setLogger"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"setLogger"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"logger"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"logger")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"LoggerOptions"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/f49f257/src/service/logger.ts#L16"},"src/service/logger.ts:16")))}c.isMDXComponent=!0}}]);