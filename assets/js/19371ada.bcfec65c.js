"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[9114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>a,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},a=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,a=p(e,["components","mdxType","originalType","parentName"]),b=l(r),f=i,d=b["".concat(c,".").concat(f)]||b[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},a),{},{components:r})):n.createElement(d,s({ref:t},a))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8262:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,metadata:()=>c,toc:()=>l,default:()=>u});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),s=["components"],p={id:"publish-diff-project",title:"Publishing on a Different GCP project",sidebar_label:"Different GCP project",sidebar_position:3},c={unversionedId:"publishing/publish-diff-project",id:"version-v1/publishing/publish-diff-project",isDocsHomePage:!1,title:"Publishing on a Different GCP project",description:'`ts title="/pubsub/topics/example-topic-with-customCredentials.ts"',source:"@site/versioned_docs/version-v1/publishing/Publish Diff Project.md",sourceDirName:"publishing",slug:"/publishing/publish-diff-project",permalink:"/hfc-pubsub/v1/publishing/publish-diff-project",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/versioned_docs/version-v1/publishing/Publish Diff Project.md",version:"v1",sidebar_label:"Different GCP project",sidebarPosition:3,frontMatter:{id:"publish-diff-project",title:"Publishing on a Different GCP project",sidebar_label:"Different GCP project",sidebar_position:3},sidebar:"version-v1/defaultSidebar",previous:{title:"Publishing with Attributes",permalink:"/hfc-pubsub/v1/publishing/attributes"},next:{title:"Subscription Service",permalink:"/hfc-pubsub/v1/server/service"}},l=[],a={toc:l};function u(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/pubsub/topics/example-topic-with-customCredentials.ts"',title:'"/pubsub/topics/example-topic-with-customCredentials.ts"'},"export default class ExampleTopic extends Topic {\n  public readonly name = 'example-topic-with-customCredentials';\n  public project: GooglePubSubProject = {\n    id: 'custom-project-id',\n    credentials: {\n      // eslint-disable-next-line\n      client_email: 'client@google-auth.google.com',\n      // eslint-disable-next-line\n      private_key: 'private_key_goes_here'\n    },\n  };\n}\n")))}u.isMDXComponent=!0}}]);