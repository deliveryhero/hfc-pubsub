"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[9049],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return t?r.createElement(b,i(i({ref:n},l),{},{components:t})):r.createElement(b,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3818:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>u,toc:()=>l,default:()=>d});var r=t(3117),o=t(102),s=(t(7294),t(3905)),i=["components"],a={id:"graceful-shutdown",title:"Graceful Shutdown",sidebar_position:3},c=void 0,u={unversionedId:"server/graceful-shutdown",id:"server/graceful-shutdown",isDocsHomePage:!1,title:"Graceful Shutdown",description:"When gracefully shutting down a process, it is a good idea to first close all open subscriptions and DB connections. For this reason we have a static closeAll method in the SubscriptionService that can close all connections before shutting down. An example using it with process signal handlers:",source:"@site/docs/server/Graceful Shutdown.md",sourceDirName:"server",slug:"/server/graceful-shutdown",permalink:"/hfc-pubsub/server/graceful-shutdown",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/docs/server/Graceful Shutdown.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"graceful-shutdown",title:"Graceful Shutdown",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Connect Database",permalink:"/hfc-pubsub/server/connect-database"},next:{title:"CLI",permalink:"/hfc-pubsub/cli"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When gracefully shutting down a process, it is a good idea to first close all open subscriptions and DB connections. For this reason we have a static ",(0,s.kt)("inlineCode",{parentName:"p"},"closeAll")," method in the ",(0,s.kt)("inlineCode",{parentName:"p"},"SubscriptionService")," that can close all connections before shutting down. An example using it with process signal handlers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{28-41} title="/pubsub/subscription.service.ts"',"{28-41}":!0,title:'"/pubsub/subscription.service.ts"'},"import * as PubSub from '@honestfoodcompany/pubsub';\nimport mongoose from 'mongoose';\nimport { SubscriberOptions } from '@honestfoodcompany/pubsub';\n\nexport default class SubscriptionService extends PubSub.SubscriptionService {\n  /**\n   * This function is called when the subscription server starts.\n   */\n  static async init(): Promise<void> {\n    /**\n     * This is a good place to initialize a database connection\n     */\n    await mongoose.connect();\n  }\n}\n\n/**\n * Example setting up graceful shutdown\n */\nprocess.on('SIGTERM', () => {\n  // First close all subscriptions\n  SubscriptionService.closeAll()\n    .then(() => {\n      // Then the databse so no new handlers are triggered\n      mongoose.disconnect(() => {\n        process.exit(0);\n      });\n    })\n    .catch((err) => {\n      console.error(err, 'Could not close subscriptions');\n      process.exit(1); // Exit with error\n    });\n});\n")))}d.isMDXComponent=!0}}]);