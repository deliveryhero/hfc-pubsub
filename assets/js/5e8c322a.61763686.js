"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[7597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=a,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3372:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>p,default:()=>u});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"index",title:"@honestfoodcompany/pubsub",slug:"/api/",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},s={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"@honestfoodcompany/pubsub",description:"Classes",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/hfc-pubsub/api/",editUrl:null,version:"current",sidebar_label:"Exports",sidebarPosition:.5,frontMatter:{id:"index",title:"@honestfoodcompany/pubsub",slug:"/api/",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Other Options",permalink:"/hfc-pubsub/options"},next:{title:"Class: Message<T>",permalink:"/hfc-pubsub/api/classes/Message"}},p=[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[{value:"setLogger",id:"setlogger",children:[]}]}],c={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Message"},"Message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/PubSubService"},"PubSubService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/SubscriptionService"},"SubscriptionService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Topic"},"Topic"))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/Payload"},"Payload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/SubscriberMetadata"},"SubscriberMetadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/SubscriberObject"},"SubscriberObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/SubscriberOptions"},"SubscriberOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"interfaces/TopicOptions"},"TopicOptions"))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"setlogger"},"setLogger"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"setLogger"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"logger"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"logger")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"LoggerOptions"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/d46a823/src/service/logger.ts#L19"},"src/service/logger.ts:19")))}u.isMDXComponent=!0}}]);