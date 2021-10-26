"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[7597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=c(r),b=a,f=d["".concat(p,".").concat(b)]||d[b]||u[b]||i;return r?n.createElement(f,l(l({ref:t},o),{},{components:r})):n.createElement(f,l({ref:t},o))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7926:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>o,default:()=>d});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],s={id:"index",title:"@honestfoodcompany/pubsub",slug:"/api/",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},p=void 0,c={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"@honestfoodcompany/pubsub",description:"Namespaces",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/hfc-pubsub/api/",editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"index",title:"@honestfoodcompany/pubsub",slug:"/api/",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Changelog",permalink:"/hfc-pubsub/changelog"},next:{title:"Interfaces",permalink:"/hfc-pubsub/api/namespaces/Interfaces"}},o=[{value:"Namespaces",id:"namespaces",children:[],level:2},{value:"Classes",id:"classes",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2},{value:"References",id:"references",children:[{value:"SubscriberV2",id:"subscriberv2",children:[],level:3}],level:2},{value:"Type aliases",id:"type-aliases",children:[{value:"SubscriberTuple",id:"subscribertuple",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"setLogger",id:"setlogger",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:o};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"namespaces/Interfaces"},"Interfaces"))),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Message"},"Message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/PubSubService"},"PubSubService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Subscriber"},"Subscriber")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/SubscriptionService"},"SubscriptionService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Topic"},"Topic"))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/Payload"},"Payload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/SubscriberObject"},"SubscriberObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/SubscriberOptions"},"SubscriberOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/TopicOptions"},"TopicOptions"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("h3",{id:"subscriberv2"},"SubscriberV2"),(0,i.kt)("p",null,"Renames and re-exports ",(0,i.kt)("a",{parentName:"p",href:"classes/Subscriber"},"Subscriber")),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"subscribertuple"},"SubscriberTuple"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SubscriberTuple"),": [typeof ",(0,i.kt)("a",{parentName:"p",href:"classes/Subscriber"},(0,i.kt)("inlineCode",{parentName:"a"},"Subscriber")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriberMetadata"),"]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5004211/src/subscriber/index.ts#L9"},"src/subscriber/index.ts:9")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"setlogger"},"setLogger"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"setLogger"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"logger"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"logger")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"LoggerOptions"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/5004211/src/service/logger.ts#L19"},"src/service/logger.ts:19")))}d.isMDXComponent=!0}}]);