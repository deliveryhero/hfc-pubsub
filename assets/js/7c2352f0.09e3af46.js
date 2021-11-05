"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[5141],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(t),d=i,g=l["".concat(c,".").concat(d)]||l[d]||b[d]||s;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=l;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},2393:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,metadata:()=>c,toc:()=>u,default:()=>b});var n=t(7462),i=t(3366),s=(t(7294),t(3905)),o=["components"],a={id:"message-ordering",title:"Subscription with Message Ordering",sidebar_label:"Message Ordering",sidebar_position:3},c={unversionedId:"subscribing/message-ordering",id:"version-v1/subscribing/message-ordering",isDocsHomePage:!1,title:"Subscription with Message Ordering",description:"Messages published with the same ordering_key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.",source:"@site/versioned_docs/version-v1/subscribing/Message Ordering.md",sourceDirName:"subscribing",slug:"/subscribing/message-ordering",permalink:"/hfc-pubsub/v1/subscribing/message-ordering",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/versioned_docs/version-v1/subscribing/Message Ordering.md",version:"v1",sidebar_label:"Message Ordering",sidebarPosition:3,frontMatter:{id:"message-ordering",title:"Subscription with Message Ordering",sidebar_label:"Message Ordering",sidebar_position:3},sidebar:"version-v1/defaultSidebar",previous:{title:"Subscriptions with Retry Policy",permalink:"/hfc-pubsub/v1/subscribing/retry-policy"},next:{title:"Topics",permalink:"/hfc-pubsub/v1/publishing/topics"}},u=[],p={toc:u};function b(e){var r=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Messages published with the same ",(0,s.kt)("inlineCode",{parentName:"p"},"ordering_key")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"PubsubMessage")," will be delivered to the subscribers in the order in which they are received by the Pub/Sub system."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/pubsub/subscriptions/simple.topic.name.subscription.sub.js',title:'"/pubsub/subscriptions/simple.topic.name.subscription.sub.js'},"exports.default = {\n  topicName: 'test.topic',\n  subscriptionName: 'test.topic.sub',\n  description: 'Will console log messages published on test.topic',\n  options: {\n    enableMessageOrdering: true,\n  },\n  handleMessage: function (message) {\n    console.log(`received a message on ${this.subscriptionName}`);\n    console.log(message.data.toString());\n  },\n};\n")))}b.isMDXComponent=!0}}]);