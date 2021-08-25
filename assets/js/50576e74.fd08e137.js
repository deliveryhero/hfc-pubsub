"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=o(r),d=a,b=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(b,p(p({ref:t},c),{},{components:r})):n.createElement(b,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var o=2;o<i;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8450:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>o,toc:()=>c,default:()=>f});var n=r(3117),a=r(102),i=(r(7294),r(3905)),p=["components"],s={id:"interfaces",title:"Namespace: Interfaces",sidebar_label:"Interfaces",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/namespaces/interfaces",id:"api/namespaces/interfaces",isDocsHomePage:!1,title:"Namespace: Interfaces",description:"Interfaces",source:"@site/docs/api/namespaces/interfaces.md",sourceDirName:"api/namespaces",slug:"/api/namespaces/interfaces",permalink:"/hfc-pubsub/api/namespaces/interfaces",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"interfaces",title:"Namespace: Interfaces",sidebar_label:"Interfaces",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Exports",permalink:"/hfc-pubsub/api/modules"},next:{title:"Message",permalink:"/hfc-pubsub/api/classes/message"}},c=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[{value:"RecursivePartial",id:"recursivepartial",children:[]},{value:"RetryCodesAllowed",id:"retrycodesallowed",children:[]}]}],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/api/interfaces/interfaces.backoffsettings"},"BackoffSettings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/api/interfaces/interfaces.googlepubsubproject"},"GooglePubSubProject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/api/interfaces/interfaces.publishoptions"},"PublishOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/api/interfaces/interfaces.retryconfig"},"RetryConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/api/interfaces/interfaces.topicpublishoptions"},"TopicPublishOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/api/interfaces/interfaces.pubsubclient"},"pubSubClient"))),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"recursivepartial"},"RecursivePartial"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"RecursivePartial"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">",": { ","[P in keyof T]","?: RecursivePartial<T","[P]",">","}"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/interface/publishOptions.ts#L2"},"src/interface/publishOptions.ts:2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"retrycodesallowed"},"RetryCodesAllowed"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"RetryCodesAllowed"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"13")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"8")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"14")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"2")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/interface/publishOptions.ts#L6"},"src/interface/publishOptions.ts:6")))}f.isMDXComponent=!0}}]);