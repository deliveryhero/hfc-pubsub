"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[80],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):h(h({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return a?r.createElement(m,h(h({ref:t},s),{},{components:a})):r.createElement(m,h({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,h=new Array(i);h[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,h[1]=o;for(var p=2;p<i;p++)h[p]=a[p];return r.createElement.apply(null,h)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1016:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>p,toc:()=>s,default:()=>u});var r=a(3117),n=a(102),i=(a(7294),a(3905)),h=["components"],o={},l="Changelog",p={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"1.10.2",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/hfc-pubsub/changelog",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/docs/changelog.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"TopicPublishOptions",permalink:"/hfc-pubsub/api/interfaces/interfaces.topicpublishoptions"}},s=[{value:"1.10.2",id:"1102",children:[{value:"Patch Changes",id:"patch-changes",children:[]}]},{value:"1.10.1",id:"1101",children:[{value:"Patch Changes",id:"patch-changes-1",children:[]}]},{value:"1.10.0",id:"1100",children:[{value:"Minor Changes",id:"minor-changes",children:[]},{value:"Patch Changes",id:"patch-changes-2",children:[]}]},{value:"1.9.0",id:"190",children:[{value:"Minor Changes",id:"minor-changes-1",children:[]}]},{value:"1.8.1",id:"181",children:[{value:"Patch Changes",id:"patch-changes-3",children:[]}]},{value:"1.8.0",id:"180",children:[{value:"Minor Changes",id:"minor-changes-2",children:[]},{value:"Patch Changes",id:"patch-changes-4",children:[]}]},{value:"1.7.12",id:"1712",children:[{value:"Patch Changes",id:"patch-changes-5",children:[]}]}],c={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,h);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"changelog"},"Changelog"),(0,i.kt)("h2",{id:"1102"},"1.10.2"),(0,i.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update google-cloud/pubsub package version (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/55"},"#55")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ketan-saxena"},"@ketan-saxena"),")")),(0,i.kt)("h2",{id:"1101"},"1.10.1"),(0,i.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Undoes logger changes for list cli (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/48"},"#48")," by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upgrade dependencies (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/51"},"#51")," by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))),(0,i.kt)("h2",{id:"1100"},"1.10.0"),(0,i.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-44"},"PUB-44")," - Added option to add custom logger (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/45"},"#45")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,i.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-44"},"PUB-44")," - Add changesets to manage versioning (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/44"},"#44")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,i.kt)("h2",{id:"190"},"1.9.0"),(0,i.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-47"},"PUB-47")," - Optimized DLQ configuration making PROJECT_NUMBER optional for assigning Publisher, Subscriber roles and allowing default subscription creation as a part of DLQ configuration (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/43"},"#43")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,i.kt)("h2",{id:"181"},"1.8.1"),(0,i.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-46"},"PUB-46")," - Allow multiple entry points without checking for folder (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/42"},"#42")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,i.kt)("h2",{id:"180"},"1.8.0"),(0,i.kt)("h3",{id:"minor-changes-2"},"Minor Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-42"},"PUB-42")," - Add attributes option to publish command in Topic (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/41"},"#41")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,i.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-34"},"PUB-34")," - Update subscriber metadata for existing subscriptions (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/32"},"#32")," by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-43"},"PUB-43")," - Attach subscriber metadata to error object in case unable to start subscription (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/39"},"#39")," by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))),(0,i.kt)("h2",{id:"1712"},"1.7.12"),(0,i.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fix build due to invalid import paths (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/38"},"#38")," by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-31"},"PUB-31")," - Add close method for graceful shutdowns (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/20"},"#20")," by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))))}u.isMDXComponent=!0}}]);