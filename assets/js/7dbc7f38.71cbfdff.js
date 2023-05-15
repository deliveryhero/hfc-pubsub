"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[2327],{3905:(e,s,r)=>{r.d(s,{Zo:()=>l,kt:()=>b});var o=r(7294);function n(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function t(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s&&(o=o.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?t(Object(r),!0).forEach((function(s){n(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function p(e,s){if(null==e)return{};var r,o,n=function(e,s){if(null==e)return{};var r,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],s.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],s.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),c=function(e){var s=o.useContext(a),r=s;return e&&(r="function"==typeof e?e(s):i(i({},s),e)),r},l=function(e){var s=c(e.components);return o.createElement(a.Provider,{value:s},e.children)},u={inlineCode:"code",wrapper:function(e){var s=e.children;return o.createElement(o.Fragment,{},s)}},m=o.forwardRef((function(e,s){var r=e.components,n=e.mdxType,t=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,d=m["".concat(a,".").concat(b)]||m[b]||u[b]||t;return r?o.createElement(d,i(i({ref:s},l),{},{components:r})):o.createElement(d,i({ref:s},l))}));function b(e,s){var r=arguments,n=s&&s.mdxType;if("string"==typeof e||n){var t=r.length,i=new Array(t);i[0]=m;var p={};for(var a in s)hasOwnProperty.call(s,a)&&(p[a]=s[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<t;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7544:(e,s,r)=>{r.r(s),r.d(s,{frontMatter:()=>p,metadata:()=>a,toc:()=>c,default:()=>u});var o=r(7462),n=r(3366),t=(r(7294),r(3905)),i=["components"],p={id:"Messages_compression",title:"Messages compression",sidebar_position:1},a={unversionedId:"subscribing/Messages_compression",id:"subscribing/Messages_compression",isDocsHomePage:!1,title:"Messages compression",description:"Framework supports gzip compression/decompression for messages.",source:"@site/docs/subscribing/Messages Compression.md",sourceDirName:"subscribing",slug:"/subscribing/Messages_compression",permalink:"/hfc-pubsub/subscribing/Messages_compression",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/subscribing/Messages Compression.md",version:"current",sidebarPosition:1,frontMatter:{id:"Messages_compression",title:"Messages compression",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Subscriptions with a Dead-letter Policy",permalink:"/hfc-pubsub/subscribing/dead-letter-policy"},next:{title:"Internal Error Handling",permalink:"/hfc-pubsub/subscribing/error-handling"}},c=[{value:"Compression",id:"compression",children:[]},{value:"Decompression",id:"decompression",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var s=e.components,r=(0,n.Z)(e,i);return(0,t.kt)("wrapper",(0,o.Z)({},l,r,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Framework supports gzip compression/decompression for messages."),(0,t.kt)("p",null,"It uses ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/nodeca/pako"},"zlib port to js")," for gzip and ungzip messages."),(0,t.kt)("h2",{id:"compression"},"Compression"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"../publishing/topics#compression"},"Topic compression option")),(0,t.kt)("h2",{id:"decompression"},"Decompression"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"message.toJSON()")," automatically checks if payload is gzip compressed and decompress it."),(0,t.kt)("p",null,"Also, framework exports ",(0,t.kt)("inlineCode",{parentName:"p"},"isGzipCompressed(data: Buffer)")," function to check if data payload is compressed."),(0,t.kt)("h2",{id:"examples"},"Examples"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/pubsub/subscriptions/compression.topic.example.sub.ts"',title:'"/pubsub/subscriptions/compression.topic.example.sub.ts"'},"import { SubscriberObject, isGzipCompressed } from '@honestfoodcompany/pubsub';\n\ntype Payload = any;\n\nconst subscriber: SubscriberObject<Payload> = {\n  topicName: 'compression.topic',\n  subscriptionName: 'compression.topic.console-log.subscription',\n\n  handleMessage: (message) => {\n    console.log('is compressed', isGzipCompressed(message.data)); // true if payload is compressed\n    console.log(message.toJSON()); // automatically decompress payload if it's compressed\n    message.ack();\n  },\n};\n\nexport default subscriber;\n")))}u.isMDXComponent=!0}}]);