"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,m=u["".concat(p,".").concat(b)]||u[b]||c[b]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5147:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>u});var r=n(3117),i=n(102),a=(n(7294),n(3905)),l=["components"],o={id:"subscriberoptions",title:"Interface: SubscriberOptions",sidebar_label:"SubscriberOptions",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"api/interfaces/subscriberoptions",id:"api/interfaces/subscriberoptions",isDocsHomePage:!1,title:"Interface: SubscriberOptions",description:"Hierarchy",source:"@site/docs/api/interfaces/subscriberoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/subscriberoptions",permalink:"/hfc-pubsub/api/interfaces/subscriberoptions",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"subscriberoptions",title:"Interface: SubscriberOptions",sidebar_label:"SubscriberOptions",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Payload",permalink:"/hfc-pubsub/api/interfaces/payload"},next:{title:"BackoffSettings",permalink:"/hfc-pubsub/api/interfaces/interfaces.backoffsettings"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"ackDeadline",id:"ackdeadline",children:[]},{value:"ackDeadlineSeconds",id:"ackdeadlineseconds",children:[]},{value:"batching",id:"batching",children:[]},{value:"deadLetterPolicy",id:"deadletterpolicy",children:[]},{value:"enableMessageOrdering",id:"enablemessageordering",children:[]},{value:"enableOpenTelemetryTracing",id:"enableopentelemetrytracing",children:[]},{value:"filter",id:"filter",children:[]},{value:"flowControl",id:"flowcontrol",children:[]},{value:"project",id:"project",children:[]},{value:"retryPolicy",id:"retrypolicy",children:[]},{value:"streamingOptions",id:"streamingoptions",children:[]},{value:"useLegacyFlowControl",id:"uselegacyflowcontrol",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GoogleCloudSubscriberOptions")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"SubscriberOptions"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"ackdeadline"},"ackDeadline"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ackDeadline"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"GoogleCloudSubscriberOptions.ackDeadline"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:105"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ackdeadlineseconds"},"ackDeadlineSeconds"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ackDeadlineSeconds"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriberV2.ts#L142"},"src/subscriber/subscriberV2.ts:142")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"batching"},"batching"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"batching"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchOptions")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"GoogleCloudSubscriberOptions.batching"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:106"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"deadletterpolicy"},"deadLetterPolicy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"deadLetterPolicy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"createDefaultSubscription?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"deadLetterTopic")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"maxDeliveryAttempts")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriberV2.ts#L144"},"src/subscriber/subscriberV2.ts:144")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enablemessageordering"},"enableMessageOrdering"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"enableMessageOrdering"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"  If true, messages published with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"ordering_key")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"PubsubMessage"),"\nwill be delivered to the subscribers in the order in which they\nare received by the Pub/Sub system. Otherwise, they may be delivered in\nany order."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriberV2.ts#L175"},"src/subscriber/subscriberV2.ts:175")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enableopentelemetrytracing"},"enableOpenTelemetryTracing"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"enableOpenTelemetryTracing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"GoogleCloudSubscriberOptions.enableOpenTelemetryTracing"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,"node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:110"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filter"},"filter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"filter"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"  An expression written in the Pub/Sub ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/pubsub/docs/filtering"},"filter\nlanguage"),". If non-empty,\nthen only ",(0,a.kt)("inlineCode",{parentName:"p"},"PubsubMessage"),"s whose ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes")," field matches the filter are\ndelivered on this subscription. If empty, then no messages are filtered\nout."),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriberV2.ts#L167"},"src/subscriber/subscriberV2.ts:167")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"flowcontrol"},"flowControl"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"flowControl"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowControlOptions")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,"GoogleCloudSubscriberOptions.flowControl"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,"node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:107"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"project"},"project"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"project"),": ",(0,a.kt)("a",{parentName:"p",href:"/hfc-pubsub/api/interfaces/interfaces.googlepubsubproject"},(0,a.kt)("inlineCode",{parentName:"a"},"GooglePubSubProject"))),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriberV2.ts#L143"},"src/subscriber/subscriberV2.ts:143")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"retrypolicy"},"retryPolicy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"retryPolicy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"maximumBackoff")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"maximumBackoff.nanos?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"maximumBackoff.seconds")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"minimumBackoff")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"minimumBackoff.nanos?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"minimumBackoff.seconds")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/deliveryhero/hfc-pubsub/blob/357e9c7/src/subscriber/subscriberV2.ts#L149"},"src/subscriber/subscriberV2.ts:149")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"streamingoptions"},"streamingOptions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"streamingOptions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageStreamOptions")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,"GoogleCloudSubscriberOptions.streamingOptions"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,"node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:109"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"uselegacyflowcontrol"},"useLegacyFlowControl"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"useLegacyFlowControl"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,"GoogleCloudSubscriberOptions.useLegacyFlowControl"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,"node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:108"))}u.isMDXComponent=!0}}]);