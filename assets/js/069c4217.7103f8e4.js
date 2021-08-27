"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[6085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(b,p(p({ref:t},l),{},{components:n})):r.createElement(b,p({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2761:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>f});var r=n(3117),i=n(102),a=(n(7294),n(3905)),p=["components"],o={id:"interfaces.topicpublishoptions",title:"Interface: TopicPublishOptions",sidebar_label:"TopicPublishOptions",custom_edit_url:null},s=void 0,c={unversionedId:"api/interfaces/interfaces.topicpublishoptions",id:"api/interfaces/interfaces.topicpublishoptions",isDocsHomePage:!1,title:"Interface: TopicPublishOptions",description:"Interfaces.TopicPublishOptions",source:"@site/docs/api/interfaces/interfaces.topicpublishoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/interfaces.topicpublishoptions",permalink:"/hfc-pubsub/api/interfaces/interfaces.topicpublishoptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"interfaces.topicpublishoptions",title:"Interface: TopicPublishOptions",sidebar_label:"TopicPublishOptions",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"RetryConfig",permalink:"/hfc-pubsub/api/interfaces/interfaces.retryconfig"},next:{title:"Changelog",permalink:"/hfc-pubsub/changelog"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"attributes",id:"attributes",children:[]},{value:"backoffSettings",id:"backoffsettings",children:[]},{value:"retryCodes",id:"retrycodes",children:[]}]}],u={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/namespaces/interfaces"},"Interfaces"),".TopicPublishOptions"),(0,a.kt)("p",null,"This is the user facing type where things are optional\nand fields are overrides to base config in Topic"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/namespaces/interfaces#recursivepartial"},(0,a.kt)("inlineCode",{parentName:"a"},"RecursivePartial")),"<",(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/interfaces/interfaces.retryconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"RetryConfig")),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TopicPublishOptions"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"attributes"},"attributes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"attributes"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/cd887e9/src/interface/publishOptions.ts#L51"},"src/interface/publishOptions.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"backoffsettings"},"backoffSettings"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"backoffSettings"),": ",(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/namespaces/interfaces#recursivepartial"},(0,a.kt)("inlineCode",{parentName:"a"},"RecursivePartial")),"<",(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/interfaces/interfaces.backoffsettings"},(0,a.kt)("inlineCode",{parentName:"a"},"BackoffSettings")),">"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"RecursivePartial.backoffSettings"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/cd887e9/src/interface/publishOptions.ts#L43"},"src/interface/publishOptions.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"retrycodes"},"retryCodes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"retryCodes"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"13")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"8")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"14")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),")[]"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"RecursivePartial.retryCodes"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/cd887e9/src/interface/publishOptions.ts#L42"},"src/interface/publishOptions.ts:42")))}f.isMDXComponent=!0}}]);