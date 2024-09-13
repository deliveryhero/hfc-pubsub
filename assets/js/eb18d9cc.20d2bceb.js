"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[5402],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>d});var t=n(6540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=t.createContext({}),u=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(a.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=i,f=l["".concat(a,".").concat(d)]||l[d]||b[d]||s;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=l;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<s;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},8194:(e,r,n)=>{n.r(r),n.d(r,{default:()=>b,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var t=n(8168),i=n(8587),s=(n(6540),n(5680)),o=["components"],c={id:"service",title:"Subscription Service",sidebar_position:0},a={unversionedId:"server/service",id:"server/service",isDocsHomePage:!1,title:"Subscription Service",description:"Extend and customize the behavior of the subscription server in the subscription.service file. Initialize a database connection, register subscribers, and define default subscriber options in the subscription service file.",source:"@site/docs/server/Service.md",sourceDirName:"server",slug:"/server/service",permalink:"/hfc-pubsub/server/service",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/server/Service.md",version:"current",sidebarPosition:0,frontMatter:{id:"service",title:"Subscription Service",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Publishing on a Different GCP project",permalink:"/hfc-pubsub/publishing/publish-diff-project"},next:{title:"Passing a Custom Logger",permalink:"/hfc-pubsub/server/custom-logger"}},u=[{value:"Typescript example",id:"typescript-example",children:[]},{value:"Javascript Example",id:"javascript-example",children:[]},{value:"Running the Service",id:"running-the-service",children:[]}],p={toc:u};function b(e){var r=e.components,n=(0,i.A)(e,o);return(0,s.yg)("wrapper",(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Extend and customize the behavior of the subscription server in the ",(0,s.yg)("inlineCode",{parentName:"p"},"subscription.service")," file. Initialize a database connection, register subscribers, and ",(0,s.yg)("strong",{parentName:"p"},"define default subscriber")," options in the subscription service file."),(0,s.yg)("h2",{id:"typescript-example"},"Typescript example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="/pubsub/subscription.service.ts"',title:'"/pubsub/subscription.service.ts"'},"import * as PubSub from '@honestfoodcompany/pubsub';\nimport { SubscriberOptions } from '@honestfoodcompany/pubsub';\n\nexport default class SubscriptionService extends PubSub.SubscriptionService {\n  static subscribers = [\n    /**\n     * if your subscribers don't have the .sub.js suffix\n     * they won't be auto-loaded,  so you can include their default\n     * export in  this array\n     */\n  ];\n\n  static defaultSubscriberOptions: SubscriberOptions = {\n    /**\n     * Define project level default subscriber options here.\n     * These options can be overridden by options defined in subscribers\n     */\n  };\n\n  static async init(): Promise<void> {\n    /**\n     * This function is called when the subscription server starts.\n     * This is a good place to initialize a database connection\n     */\n  }\n}\n")),(0,s.yg)("h2",{id:"javascript-example"},"Javascript Example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="/pubsub/subscription.service.js"',title:'"/pubsub/subscription.service.js"'},"const PubSub = require('@honestfoodcompany/pubsub');\n\nclass SubscriptionService extends PubSub.SubscriptionService {}\n\nSubscriptionService.subscribers = [\n  /**\n   * if your subscribers don't have the .sub.js suffix\n   * they won't be auto-loaded,  so you can include their default\n   * export in  this array\n   */\n];\n\nSubscriptionService.defaultSubscriberOptions = {\n  /**\n   * Define project-level default subscriber options here.\n   * These options can be overridden by options defined in subscribers\n   */\n};\n\nSubscriptionService.init = () => {\n  /**\n   * This function is called when the subscription server starts.\n   * This is a good place to initialize a database connection\n   */\n};\n\nexports.default = SubscriptionService;\n")),(0,s.yg)("h2",{id:"running-the-service"},"Running the Service"),(0,s.yg)("p",null,"To run the service you can use the ",(0,s.yg)("a",{parentName:"p",href:"/hfc-pubsub/guides/cli"},"CLI")," commands:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sh"},"npx subscriptions start\n")))}b.isMDXComponent=!0}}]);