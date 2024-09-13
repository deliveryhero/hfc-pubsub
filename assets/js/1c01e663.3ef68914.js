"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[3134],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5157:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(8168),a=r(8587),i=(r(6540),r(5680)),o=["components"],p={id:"Payload",title:"Interface: Payload",sidebar_label:"Payload",sidebar_position:0,custom_edit_url:null},l={unversionedId:"api/interfaces/Payload",id:"api/interfaces/Payload",isDocsHomePage:!1,title:"Interface: Payload",description:"extend this interface to define your own payload",source:"@site/docs/api/interfaces/Payload.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Payload",permalink:"/hfc-pubsub/api/interfaces/Payload",editUrl:null,version:"current",sidebar_label:"Payload",sidebarPosition:0,frontMatter:{id:"Payload",title:"Interface: Payload",sidebar_label:"Payload",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Class: Topic<P>",permalink:"/hfc-pubsub/api/classes/Topic"},next:{title:"Interface: SubscriberMetadata",permalink:"/hfc-pubsub/api/interfaces/SubscriberMetadata"}},c=[{value:"Properties",id:"properties",children:[{value:"_timestamp",id:"_timestamp",children:[]}]}],s={toc:c};function u(e){var t=e.components,r=(0,a.A)(e,o);return(0,i.yg)("wrapper",(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"extend this interface to define your own payload\ne.g."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"    interface YourTopicPayload extends Payload {\n       id: number;\n       action: string;\n    }\n")),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"_timestamp"},"_","timestamp"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"_","timestamp"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("h4",{id:"defined-in"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/261abc8/src/topic/index.ts#L22"},"src/topic/index.ts:22")))}u.isMDXComponent=!0}}]);