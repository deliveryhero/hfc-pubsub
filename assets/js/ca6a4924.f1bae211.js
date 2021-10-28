"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[6873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,b=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2835:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"Interfaces.RetryConfig",title:"Interface: RetryConfig",sidebar_label:"RetryConfig",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/Interfaces.RetryConfig",id:"version-v1/api/interfaces/Interfaces.RetryConfig",isDocsHomePage:!1,title:"Interface: RetryConfig",description:"Interfaces.RetryConfig",source:"@site/versioned_docs/version-v1/api/interfaces/Interfaces.RetryConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Interfaces.RetryConfig",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.RetryConfig",editUrl:null,tags:[],version:"v1",frontMatter:{id:"Interfaces.RetryConfig",title:"Interface: RetryConfig",sidebar_label:"RetryConfig",custom_edit_url:null},sidebar:"version-v1/defaultSidebar",previous:{title:"PublishOptions",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.PublishOptions"},next:{title:"TopicPublishOptions",permalink:"/hfc-pubsub/v1/api/interfaces/Interfaces.TopicPublishOptions"}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"backoffSettings",id:"backoffsettings",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"retryCodes",id:"retrycodes",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],f={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../namespaces/Interfaces"},"Interfaces"),".RetryConfig"),(0,a.kt)("p",null," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/googleapis/nodejs-pubsub/blob/master/samples/publishWithRetrySettings.js"},"https://github.com/googleapis/nodejs-pubsub/blob/master/samples/publishWithRetrySettings.js")),(0,a.kt)("p",null,"// Retry settings control how the publisher handles retryable failures\n// Default values are shown\nconst retrySettings = {\nretryCodes: ","[\n10, // 'ABORTED'\n1, // 'CANCELLED',\n4, // 'DEADLINE_EXCEEDED'\n13, // 'INTERNAL'\n8, // 'RESOURCE_EXHAUSTED'\n14, // 'UNAVAILABLE'\n2, // 'UNKNOWN'\n]",",\nbackoffSettings: {\ninitialRetryDelayMillis: 100,\nretryDelayMultiplier: 1.3,\nmaxRetryDelayMillis: 60000,\ninitialRpcTimeoutMillis: 5000,\nrpcTimeoutMultiplier: 1.0,\nmaxRpcTimeoutMillis: 600000,\ntotalTimeoutMillis: 600000,\n},\n};"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"RetryConfig"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"Interfaces.PublishOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"PublishOptions"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"backoffsettings"},"backoffSettings"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"backoffSettings"),": ",(0,a.kt)("a",{parentName:"p",href:"Interfaces.BackoffSettings"},(0,a.kt)("inlineCode",{parentName:"a"},"BackoffSettings"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L43"},"src/interface/publishOptions.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"retrycodes"},"retryCodes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"retryCodes"),": ",(0,a.kt)("a",{parentName:"p",href:"../namespaces/Interfaces#retrycodesallowed"},(0,a.kt)("inlineCode",{parentName:"a"},"RetryCodesAllowed")),"[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L42"},"src/interface/publishOptions.ts:42")))}u.isMDXComponent=!0}}]);