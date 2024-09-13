"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[9426],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>f});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),g=c(t),f=o,b=g["".concat(u,".").concat(f)]||g[f]||p[f]||s;return t?n.createElement(b,i(i({ref:r},l),{},{components:t})):n.createElement(b,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=g;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},633:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=t(8168),o=t(8587),s=(t(6540),t(5680)),i=["components"],a={id:"custom-logger",title:"Passing a Custom Logger",sidebar_label:"Custom Logger",sidebar_position:1},u={unversionedId:"server/custom-logger",id:"version-v1/server/custom-logger",isDocsHomePage:!1,title:"Passing a Custom Logger",description:"In the main SubscriptionService before defining subscription class you can update the logger that is being used by the package for logging. It's an optional definition and by default it uses console.* for logging .info, .warn and .error these 3 function keys are a must have for the logger you pass.",source:"@site/versioned_docs/version-v1/server/Custom Logger.md",sourceDirName:"server",slug:"/server/custom-logger",permalink:"/hfc-pubsub/v1/server/custom-logger",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/versioned_docs/version-v1/server/Custom Logger.md",version:"v1",sidebar_label:"Custom Logger",sidebarPosition:1,frontMatter:{id:"custom-logger",title:"Passing a Custom Logger",sidebar_label:"Custom Logger",sidebar_position:1},sidebar:"version-v1/defaultSidebar",previous:{title:"Subscription Service",permalink:"/hfc-pubsub/v1/server/service"},next:{title:"Connecting to a Database",permalink:"/hfc-pubsub/v1/server/connect-database"}},c=[],l={toc:c};function p(e){var r=e.components,t=(0,o.A)(e,i);return(0,s.yg)("wrapper",(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"In the main SubscriptionService before defining subscription class you can update the logger that is being used by the package for logging. It's an optional definition and by default it uses ",(0,s.yg)("inlineCode",{parentName:"p"},"console.*")," for logging ",(0,s.yg)("inlineCode",{parentName:"p"},".info"),", ",(0,s.yg)("inlineCode",{parentName:"p"},".warn")," and ",(0,s.yg)("inlineCode",{parentName:"p"},".error")," these 3 function keys are a must have for the logger you pass."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="/pubsub/subscription.service.ts"',title:'"/pubsub/subscription.service.ts"'},"import * as PubSub from '@honestfoodcompany/pubsub';\n\n/**\n * This function call is optional, you can pass an instance of Pino, Winston logger\n * By default it uses default console.* for logging\n * The logger you pass must support .error, .info and .warn methods for it to work\n */\nPubSub.setLogger(console);\n")),(0,s.yg)("p",null,"You can also call setLogger from some other file like a global file, just make sure it gets imported somehow into the ",(0,s.yg)("inlineCode",{parentName:"p"},"subscription.service"),"."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js"},"const { setLogger } = require('@honestfoodcompany/pubsub');\nsetLogger(console);\n")))}p.isMDXComponent=!0}}]);