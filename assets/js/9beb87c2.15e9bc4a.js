"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[80],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(7294);function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,h=function(e,t){if(null==e)return{};var a,r,h={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(h[a]=e[a]);return h}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(h[a]=e[a])}return h}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,h=e.mdxType,n=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(a),m=h,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||n;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,h=t&&t.mdxType;if("string"==typeof e||h){var n=a.length,i=new Array(n);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:h,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7156:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>p,metadata:()=>l,toc:()=>o,default:()=>c});var r=a(7462),h=a(3366),n=(a(7294),a(3905)),i=["components"],p={},l={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"2.1.2",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/hfc-pubsub/changelog",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/changelog.md",version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Interface: TopicOptions",permalink:"/hfc-pubsub/api/interfaces/TopicOptions"}},o=[{value:"2.1.2",id:"212",children:[{value:"Patch Changes",id:"patch-changes",children:[]}]},{value:"2.1.1",id:"211",children:[{value:"Patch Changes",id:"patch-changes-1",children:[]}]},{value:"2.1.0",id:"210",children:[{value:"Minor Changes",id:"minor-changes",children:[]}]},{value:"2.0.1",id:"201",children:[{value:"Patch Changes",id:"patch-changes-2",children:[]}]},{value:"2.0.0",id:"200",children:[{value:"\u26a0\ufe0f Major Changes \u26a0\ufe0f",id:"\ufe0f-major-changes-\ufe0f",children:[]},{value:"Minor Changes",id:"minor-changes-1",children:[]},{value:"Patch Changes",id:"patch-changes-3",children:[]}]},{value:"1.11.0",id:"1110",children:[{value:"Minor Changes",id:"minor-changes-2",children:[]},{value:"Patch Changes",id:"patch-changes-4",children:[]}]},{value:"1.10.4",id:"1104",children:[{value:"Patch Changes",id:"patch-changes-5",children:[]}]},{value:"1.10.3",id:"1103",children:[{value:"Patch Changes",id:"patch-changes-6",children:[]}]},{value:"1.10.2",id:"1102",children:[{value:"Patch Changes",id:"patch-changes-7",children:[]}]},{value:"1.10.1",id:"1101",children:[{value:"Patch Changes",id:"patch-changes-8",children:[]}]},{value:"1.10.0",id:"1100",children:[{value:"Minor Changes",id:"minor-changes-3",children:[]},{value:"Patch Changes",id:"patch-changes-9",children:[]}]},{value:"1.9.0",id:"190",children:[{value:"Minor Changes",id:"minor-changes-4",children:[]}]},{value:"1.8.1",id:"181",children:[{value:"Patch Changes",id:"patch-changes-10",children:[]}]},{value:"1.8.0",id:"180",children:[{value:"Minor Changes",id:"minor-changes-5",children:[]},{value:"Patch Changes",id:"patch-changes-11",children:[]}]},{value:"1.7.12",id:"1712",children:[{value:"Patch Changes",id:"patch-changes-12",children:[]}]}],s={toc:o};function c(e){var t=e.components,a=(0,h.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"212"},"2.1.2"),(0,n.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-88"},"PUB-88")," - Pin dependencies to specific versions (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/92"},"#92")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("h2",{id:"211"},"2.1.1"),(0,n.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prefer GOOGLE_CLOUD_LABELS over PUBSUB_LABELS env var (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/90"},"#90")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("h2",{id:"210"},"2.1.0"),(0,n.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-84"},"PUB-84")," - Add support for labels to subscirptions (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/88"},"#88")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("h2",{id:"201"},"2.0.1"),(0,n.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-72"},"PUB-72")," - Divide subscriptions among multiple clients (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/86"},"#86")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("h2",{id:"200"},"2.0.0"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://deliveryhero.github.io/hfc-pubsub/guides/migrating-to-v2"},"Migration Guide")),(0,n.kt)("h3",{id:"\ufe0f-major-changes-\ufe0f"},"\u26a0\ufe0f Major Changes \u26a0\ufe0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-68"},"PUB-68")," - Set min supported node version as 12.22 (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/72"},"#72")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-52"},"PUB-52")," - Remove ",(0,n.kt)("inlineCode",{parentName:"p"},"grpc")," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/57"},"#57")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-48"},"PUB-48")," - Topic class now uses static properties and generics (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/81"},"#81")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-77"},"PUB-77")," - Misc Changes (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/84"},"#84")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Change project-id env var to ",(0,n.kt)("inlineCode",{parentName:"li"},"GOOGLE_CLOUD_PROJECT")),(0,n.kt)("li",{parentName:"ul"},"Removed export of private methods"),(0,n.kt)("li",{parentName:"ul"},"Refactor internals"),(0,n.kt)("li",{parentName:"ul"},"Change ",(0,n.kt)("inlineCode",{parentName:"li"},"ackDeadlineSeconds")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"ackDeadline")),(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"metadata")," to default error handler"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-65"},"PUB-65")," - Remove deprecated code (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/66"},"#66")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))),(0,n.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-73"},"PUB-73")," - Add/improve helpers and TS usage(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/79"},"#79")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Allows to make ",(0,n.kt)("inlineCode",{parentName:"li"},"_timestamp")," optional"),(0,n.kt)("li",{parentName:"ol"},"Removes double validation of topic names."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"publishJSON")," instead of buffering the payload."),(0,n.kt)("li",{parentName:"ol"},"Adds ",(0,n.kt)("inlineCode",{parentName:"li"},".toJSON")," method to get parsed message/"),(0,n.kt)("li",{parentName:"ol"},"Remove getters (like getProjects, getName, getClient) and just use ",(0,n.kt)("inlineCode",{parentName:"li"},"this.projects"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"this.name"),", etc directly."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-69"},"PUB-69")," - Changed init position for ",(0,n.kt)("inlineCode",{parentName:"p"},"SubscriptionService.instance")," (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/77"},"#77")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")"))),(0,n.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-75"},"PUB-75")," - Using yarn instead of npm (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/83"},"#83")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-69"},"PUB-69")," - Throws error in case no subs found or wrong ",(0,n.kt)("inlineCode",{parentName:"p"},"PUBSUB_ROOT_DIR")," env defined (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/76"},"#76")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Full Changelog: ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/deliveryhero/hfc-pubsub/compare/v1.11.0...v2.0.0"},"v1.11.0...v2.0.0"))),(0,n.kt)("h2",{id:"1110"},"1.11.0"),(0,n.kt)("h3",{id:"minor-changes-2"},"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Adds optional health check server to tell if all subs are open or not (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/73"},"#73")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-71"},"PUB-71")," - Add Subscription level handleError method (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/75"},"#75")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ketan-saxena"},"@ketan-saxena"),")"))),(0,n.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-64"},"PUB-64")," - Update dependencies (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/78"},"#78")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("h2",{id:"1104"},"1.10.4"),(0,n.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-60"},"PUB-60")," - Deprecate v1,v2 style Subscriber classes (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/64"},"#64")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-66"},"PUB-66")," - Fix close method creating new subscription instance rather than closing existing one (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/63"},"#63")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))),(0,n.kt)("h2",{id:"1103"},"1.10.3"),(0,n.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-52"},"PUB-52")," - Deprecate native grpc usage (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/58"},"#58")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Allows setting up env variables through CLI args (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/61"},"#61")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-50"},"PUB-50")," - Update documentation (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/60"},"#60")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))),(0,n.kt)("h2",{id:"1102"},"1.10.2"),(0,n.kt)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update google-cloud/pubsub package version (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/55"},"#55")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ketan-saxena"},"@ketan-saxena"),")")),(0,n.kt)("h2",{id:"1101"},"1.10.1"),(0,n.kt)("h3",{id:"patch-changes-8"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Undoes logger changes for list cli (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/48"},"#48")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Upgrade dependencies (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/51"},"#51")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))),(0,n.kt)("h2",{id:"1100"},"1.10.0"),(0,n.kt)("h3",{id:"minor-changes-3"},"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-44"},"PUB-44")," - Added option to add custom logger (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/45"},"#45")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,n.kt)("h3",{id:"patch-changes-9"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-44"},"PUB-44")," - Add changesets to manage versioning (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/44"},"#44")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("h2",{id:"190"},"1.9.0"),(0,n.kt)("h3",{id:"minor-changes-4"},"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-47"},"PUB-47")," - Optimized DLQ configuration making PROJECT_NUMBER optional for assigning Publisher, Subscriber roles and allowing default subscription creation as a part of DLQ configuration (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/43"},"#43")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,n.kt)("h2",{id:"181"},"1.8.1"),(0,n.kt)("h3",{id:"patch-changes-10"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-46"},"PUB-46")," - Allow multiple entry points without checking for folder (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/42"},"#42")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("h2",{id:"180"},"1.8.0"),(0,n.kt)("h3",{id:"minor-changes-5"},"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://honesttech.atlassian.net/browse/PUB-42"},"PUB-42")," - Add attributes option to publish command in Topic (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/pull/41"},"#41")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("h3",{id:"patch-changes-11"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-34"},"PUB-34")," - Update subscriber metadata for existing subscriptions (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/32"},"#32")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ishan123456789"},"@ishan123456789"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-43"},"PUB-43")," - Attach subscriber metadata to error object in case unable to start subscription (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/39"},"#39")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))),(0,n.kt)("h2",{id:"1712"},"1.7.12"),(0,n.kt)("h3",{id:"patch-changes-12"},"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix build due to invalid import paths (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/38"},"#38")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://honesttech.atlassian.net/browse/PUB-31"},"PUB-31")," - Add close method for graceful shutdowns (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/pull/20"},"#20")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri"},"@rohit-gohri"),")"))))}c.isMDXComponent=!0}}]);