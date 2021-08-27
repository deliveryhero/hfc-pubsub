"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[9812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,m=b["".concat(c,".").concat(d)]||b[d]||l[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4213:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>b});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={id:"connect-database",title:"Connecting to a Database",sidebar_label:"Connect Database",sidebar_position:2},c=void 0,u={unversionedId:"server/connect-database",id:"server/connect-database",isDocsHomePage:!1,title:"Connecting to a Database",description:"It is recommended to initialize a database connection in the subscription.service file in your PUBSUBROOTDIR. Insert your database connection logic in the init method.",source:"@site/docs/server/Connect Database.md",sourceDirName:"server",slug:"/server/connect-database",permalink:"/hfc-pubsub/server/connect-database",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/docs/server/Connect Database.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"connect-database",title:"Connecting to a Database",sidebar_label:"Connect Database",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Custom Logger",permalink:"/hfc-pubsub/server/custom-logger"},next:{title:"Graceful Shutdown",permalink:"/hfc-pubsub/server/graceful-shutdown"}},p=[],l={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is recommended to initialize a database connection in the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscription.service")," file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PUBSUB_ROOT_DIR"),". Insert your database connection logic in the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/pubsub/subscription.service.ts"',title:'"/pubsub/subscription.service.ts"'},"import * as PubSub from '@honestfoodcompany/pubsub';\nimport mongoose from 'mongoose';\nimport { SubscriberOptions } from '@honestfoodcompany/pubsub';\n\nexport default class SubscriptionService extends PubSub.SubscriptionService {\n\n  /**\n   * This function is called when the subscription server starts.\n   */\n  static async init(): Promise<void> {\n    /**\n     * This is a good place to initialize a database connection\n     */\n    await mongoose.connect();\n  }\n}\n\n")))}b.isMDXComponent=!0}}]);