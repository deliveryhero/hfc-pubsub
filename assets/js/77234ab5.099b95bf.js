"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5902:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>d});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],p={id:"options",title:"Other Options"},c=void 0,s={unversionedId:"options",id:"options",isDocsHomePage:!1,title:"Other Options",description:"Enabling gRPC C++ bindings",source:"@site/docs/Options.md",sourceDirName:".",slug:"/options",permalink:"/hfc-pubsub/options",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/docs/Options.md",version:"current",frontMatter:{id:"options",title:"Other Options"},sidebar:"defaultSidebar",previous:{title:"PubSub Drivers",permalink:"/hfc-pubsub/drivers"},next:{title:"Readme",permalink:"/hfc-pubsub/api"}},l=[{value:"Enabling gRPC C++ bindings",id:"enabling-grpc-c-bindings",children:[{value:"<strong>NOTE: DEPRECATED</strong>",id:"note-deprecated",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enabling-grpc-c-bindings"},"Enabling gRPC C++ bindings"),(0,i.kt)("h3",{id:"note-deprecated"},(0,i.kt)("strong",{parentName:"h3"},"NOTE: DEPRECATED")),(0,i.kt)("p",null,"The native ",(0,i.kt)("a",{parentName:"p",href:"https://npmjs.com/grpc"},"grpc")," module has been deprecated and we would be removing this option in the future."),(0,i.kt)("p",null,"For some workflows and environments it might make sense to use the C++ gRPC implementation, instead of the default one. To configure the module to use an alternative grpc transport use the following environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"PUBSUB_USE_GRPC=true\n")))}d.isMDXComponent=!0}}]);