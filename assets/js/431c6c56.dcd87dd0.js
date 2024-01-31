"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[2915],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=l(n),d=i,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||s;return n?t.createElement(m,o(o({ref:r},p),{},{components:n})):t.createElement(m,o({ref:r},p))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=b;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3801:(e,r,n)=>{n.r(r),n.d(r,{default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(7462),i=n(3366),s=(n(7294),n(3905)),o=["components"],a={id:"error-handling",title:"Internal Error Handling",sidebar_label:"Error Handling",sidebar_position:2},c={unversionedId:"subscribing/error-handling",id:"subscribing/error-handling",isDocsHomePage:!1,title:"Internal Error Handling",description:"To handle any internal error that might occur on pubsub side, the method handleError can be declared either in Subscriber Object or in SubscriptionService.",source:"@site/docs/subscribing/Internal Error Handling.md",sourceDirName:"subscribing",slug:"/subscribing/error-handling",permalink:"/hfc-pubsub/subscribing/error-handling",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/subscribing/Internal Error Handling.md",version:"current",sidebar_label:"Error Handling",sidebarPosition:2,frontMatter:{id:"error-handling",title:"Internal Error Handling",sidebar_label:"Error Handling",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Messages compression",permalink:"/hfc-pubsub/subscribing/Messages_compression"},next:{title:"Adding Labels",permalink:"/hfc-pubsub/subscribing/labels"}},l=[{value:"Subscriber handleError Examples",id:"subscriber-handleerror-examples",children:[{value:"Typescript subscription example",id:"typescript-subscription-example",children:[]},{value:"Javascript subscription example",id:"javascript-subscription-example",children:[]}]},{value:"SubscriptionService handleError Examples",id:"subscriptionservice-handleerror-examples",children:[{value:"Typescript subscription example",id:"typescript-subscription-example-1",children:[]},{value:"Javascript subscription example",id:"javascript-subscription-example-1",children:[]}]}],p={toc:l};function u(e){var r=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To handle any ",(0,s.kt)("strong",{parentName:"p"},"internal")," error that might occur on pubsub side, the method ",(0,s.kt)("inlineCode",{parentName:"p"},"handleError")," can be declared either in Subscriber Object or in SubscriptionService."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If the error handler is provided at ",(0,s.kt)("inlineCode",{parentName:"li"},"Subscriber")," object level then it would override the error handler provided at ",(0,s.kt)("inlineCode",{parentName:"li"},"SubscriptionService")," level.")),(0,s.kt)("h2",{id:"subscriber-handleerror-examples"},"Subscriber handleError Examples"),(0,s.kt)("h3",{id:"typescript-subscription-example"},"Typescript subscription example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/pubsub/subscriptions/simple.topic.name.console-log.sub.ts"',title:'"/pubsub/subscriptions/simple.topic.name.console-log.sub.ts"'},"import { SubscriberObject, Message } from \"@honestfoodcompany/pubsub\";\n\nexport default: SubscriberObject = {\n  topicName: 'simple.topic',\n  subscriptionName: 'simple.topic.console-log.sub',\n  description: 'Will console log messages published on test.topic',\n\n  handleMessage: function(message: Message): void {\n    console.log(this.subscriptionName, 'received message');\n    console.log(message.data.toString());\n    message.ack();\n  },\n\n  handleError: function(error: Error): void {\n    // internal error handling logic for subscriber\n    console.error(error);\n    // Close DB connections/etc here\n    process.exit(1);\n  }\n};\n\n")),(0,s.kt)("h3",{id:"javascript-subscription-example"},"Javascript subscription example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/pubsub/subscriptions/simple.topic.name.sub.js"',title:'"/pubsub/subscriptions/simple.topic.name.sub.js"'},"exports.default = {\n  topicName: 'test.topic',\n  subscriptionName: 'test.topic.sub',\n  description: 'Will console log messages published on test.topic',\n\n  handleMessage: function (message) {\n    console.log(this.subscriptionName, 'received message');\n    console.log(message.data.toString());\n    message.ack();\n  },\n  handleError: function (error) {\n    // internal error handling logic for subscriber\n    console.error(error);\n    // Close DB connections/etc here\n    process.exit(1);\n  },\n};\n")),(0,s.kt)("h2",{id:"subscriptionservice-handleerror-examples"},"SubscriptionService handleError Examples"),(0,s.kt)("p",null,"You can also setup a global error handler that will act as the default for all subscriptions, this though also receives the subscription metadat for which the error happens."),(0,s.kt)("h3",{id:"typescript-subscription-example-1"},"Typescript subscription example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/pubsub/subscription.service.ts"',title:'"/pubsub/subscription.service.ts"'},"import { SubscriptionService, SubscriberOptions, SubscriberMetadata } from '@honestfoodcompany/pubsub';\n\nexport default class SubscriptionService extends PubSub.SubscriptionService {\n  static subscribers = [\n    //...\n  ];\n\n  static defaultSubscriberOptions: SubscriberOptions = {};\n\n  static async init(): Promise<void> {}\n\n  static handleError(error: Error, metadata: SubscriberMetadata): void {\n    // global default error handling logic for all subscribers\n    console.error({err, metadata}, 'Default error handler');\n    // Close DB connections/etc here\n    process.exit(1);\n  }\n}\n")),(0,s.kt)("h3",{id:"javascript-subscription-example-1"},"Javascript subscription example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/pubsub/subscription.service.js"',title:'"/pubsub/subscription.service.js"'},"const PubSub = require('@honestfoodcompany/pubsub');\n\nclass SubscriptionService extends PubSub.SubscriptionService {}\n\nSubscriptionService.subscribers = [];\n\nSubscriptionService.defaultSubscriberOptions = {};\n\nSubscriptionService.init = () => {};\n\nSubscriptionService.handleError = (error, metadata) => {\n  // global default error handling logic for all subscribers\n  console.error({err, metadata}, 'Default error handler');\n  // Close DB connections/etc here\n  process.exit(1);\n};\n\nexports.default = SubscriptionService;\n")))}u.isMDXComponent=!0}}]);