"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[3459],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=c(r),y=i,d=f["".concat(s,".").concat(y)]||f[y]||u[y]||a;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1090:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(8168),i=r(8587),a=(r(6540),r(5680)),p=["components"],o={id:"Interfaces.TopicPublishOptions",title:"Interface: TopicPublishOptions",sidebar_label:"TopicPublishOptions",custom_edit_url:null},s={unversionedId:"api/interfaces/Interfaces.TopicPublishOptions",id:"version-v1/api/interfaces/Interfaces.TopicPublishOptions",isDocsHomePage:!1,title:"Interface: TopicPublishOptions",description:"Interfaces.TopicPublishOptions",source:"@site/versioned_docs/version-v1/api/interfaces/Interfaces.TopicPublishOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Interfaces.TopicPublishOptions",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.TopicPublishOptions",editUrl:null,version:"v1",sidebar_label:"TopicPublishOptions",frontMatter:{id:"Interfaces.TopicPublishOptions",title:"Interface: TopicPublishOptions",sidebar_label:"TopicPublishOptions",custom_edit_url:null},sidebar:"version-v1/defaultSidebar",previous:{title:"Interface: RetryConfig",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.RetryConfig"},next:{title:"Interface: pubSubClient",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.pubSubClient"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"attributes",id:"attributes",children:[]},{value:"backoffSettings",id:"backoffsettings",children:[]},{value:"retryCodes",id:"retrycodes",children:[]}]}],l={toc:c};function u(e){var t=e.components,r=(0,i.A)(e,p);return(0,a.yg)("wrapper",(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"../namespaces/Interfaces"},"Interfaces"),".TopicPublishOptions"),(0,a.yg)("p",null,"This is the user facing type where things are optional\nand fields are overrides to base config in Topic"),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"../namespaces/Interfaces#recursivepartial"},(0,a.yg)("inlineCode",{parentName:"a"},"RecursivePartial")),"<",(0,a.yg)("a",{parentName:"p",href:"Interfaces.RetryConfig"},(0,a.yg)("inlineCode",{parentName:"a"},"RetryConfig")),">"),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"TopicPublishOptions"))))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"attributes"},"attributes"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"attributes"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Attributes")),(0,a.yg)("h4",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L51"},"src/interface/publishOptions.ts:51")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"backoffsettings"},"backoffSettings"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"backoffSettings"),": ",(0,a.yg)("a",{parentName:"p",href:"../namespaces/Interfaces#recursivepartial"},(0,a.yg)("inlineCode",{parentName:"a"},"RecursivePartial")),"<",(0,a.yg)("a",{parentName:"p",href:"Interfaces.BackoffSettings"},(0,a.yg)("inlineCode",{parentName:"a"},"BackoffSettings")),">"),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,"RecursivePartial.backoffSettings"),(0,a.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L43"},"src/interface/publishOptions.ts:43")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"retrycodes"},"retryCodes"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"retryCodes"),": (",(0,a.yg)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"../namespaces/Interfaces#recursivepartial"},(0,a.yg)("inlineCode",{parentName:"a"},"RecursivePartial")),"<",(0,a.yg)("a",{parentName:"p",href:"../namespaces/Interfaces#retrycodesallowed"},(0,a.yg)("inlineCode",{parentName:"a"},"RetryCodesAllowed")),">",")[]"),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,"RecursivePartial.retryCodes"),(0,a.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L42"},"src/interface/publishOptions.ts:42")))}u.isMDXComponent=!0}}]);