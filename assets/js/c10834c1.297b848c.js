"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[5641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=i,d=u["".concat(p,".").concat(b)]||u[b]||f[b]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2155:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>p,toc:()=>l,default:()=>f});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={id:"Interfaces.PublishOptions",title:"Interface: PublishOptions",sidebar_label:"PublishOptions",custom_edit_url:null},p={unversionedId:"api/interfaces/Interfaces.PublishOptions",id:"version-v1/api/interfaces/Interfaces.PublishOptions",isDocsHomePage:!1,title:"Interface: PublishOptions",description:"Interfaces.PublishOptions",source:"@site/versioned_docs/version-v1/api/interfaces/Interfaces.PublishOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Interfaces.PublishOptions",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.PublishOptions",editUrl:null,version:"v1",sidebar_label:"PublishOptions",frontMatter:{id:"Interfaces.PublishOptions",title:"Interface: PublishOptions",sidebar_label:"PublishOptions",custom_edit_url:null},sidebar:"version-v1/defaultSidebar",previous:{title:"Interface: GooglePubSubProject",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.GooglePubSubProject"},next:{title:"Interface: RetryConfig",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.RetryConfig"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"attributes",id:"attributes",children:[]},{value:"backoffSettings",id:"backoffsettings",children:[]},{value:"retryCodes",id:"retrycodes",children:[]}]}],c={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../namespaces/Interfaces"},"Interfaces"),".PublishOptions"),(0,a.kt)("p",null,"This is the the actual type for use in the driver"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"Interfaces.RetryConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"RetryConfig"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"PublishOptions"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"attributes"},"attributes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"attributes"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L58"},"src/interface/publishOptions.ts:58")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"backoffsettings"},"backoffSettings"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"backoffSettings"),": ",(0,a.kt)("a",{parentName:"p",href:"Interfaces.BackoffSettings"},(0,a.kt)("inlineCode",{parentName:"a"},"BackoffSettings"))),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Interfaces.RetryConfig"},"RetryConfig"),".",(0,a.kt)("a",{parentName:"p",href:"Interfaces.RetryConfig#backoffsettings"},"backoffSettings")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L43"},"src/interface/publishOptions.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"retrycodes"},"retryCodes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"retryCodes"),": ",(0,a.kt)("a",{parentName:"p",href:"../namespaces/Interfaces#retrycodesallowed"},(0,a.kt)("inlineCode",{parentName:"a"},"RetryCodesAllowed")),"[]"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Interfaces.RetryConfig"},"RetryConfig"),".",(0,a.kt)("a",{parentName:"p",href:"Interfaces.RetryConfig#retrycodes"},"retryCodes")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L42"},"src/interface/publishOptions.ts:42")))}f.isMDXComponent=!0}}]);