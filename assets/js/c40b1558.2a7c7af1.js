"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[3585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7989:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"Payload",title:"Interface: Payload",sidebar_label:"Payload",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/Payload",id:"version-v1/api/interfaces/Payload",isDocsHomePage:!1,title:"Interface: Payload",description:"extend this interface to define your own payload",source:"@site/versioned_docs/version-v1/api/interfaces/Payload.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Payload",permalink:"/hfc-pubsub/v1/api/interfaces/Payload",editUrl:null,tags:[],version:"v1",sidebarPosition:0,frontMatter:{id:"Payload",title:"Interface: Payload",sidebar_label:"Payload",sidebar_position:0,custom_edit_url:null},sidebar:"version-v1/defaultSidebar",previous:{title:"Topic",permalink:"/hfc-pubsub/v1/api/classes/Topic"},next:{title:"SubscriberOptions",permalink:"/hfc-pubsub/v1/api/interfaces/SubscriberOptions"}},s=[{value:"Properties",id:"properties",children:[{value:"_timestamp",id:"_timestamp",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"extend this interface to define your own payload\ne.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"    interface YourTopicPayload extends Payload {\n       id: number;\n       action: string;\n    }\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_timestamp"},"_","timestamp"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"_","timestamp"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L21"},"src/topic/index.ts:21")))}d.isMDXComponent=!0}}]);