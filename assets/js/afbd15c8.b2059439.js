"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[9445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294),a=n(9443);const o=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9019:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k,frontMatter:()=>v,metadata:()=>h,toc:()=>y});var i=n(7462),a=n(3366),o=n(7294),r=n(3905),s=n(944),l=n(6010);const c="tabItem_1uMI",p="tabItemActive_2DSg";var u=37,d=39;const m=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,a=e.values,r=e.groupId,m=e.className,g=(0,s.Z)(),b=g.tabGroupChoices,v=g.setTabGroupChoices,h=(0,o.useState)(i),y=h[0],f=h[1],k=o.Children.toArray(e.children),T=[];if(null!=r){var N=b[r];null!=N&&N!==y&&a.some((function(e){return e.value===N}))&&f(N)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),i=a[n].value;f(i),null!=r&&(v(r,i),setTimeout((function(){var e,n,i,a,o,r,s,l;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,o=e.right,r=window,s=r.innerHeight,l=r.innerWidth,n>=0&&o<=l&&a<=s&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case d:var i=T.indexOf(e.target)+1;n=T[i]||T[0];break;case u:var a=T.indexOf(e.target)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},a.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:w,onFocus:x,onClick:x},n)}))),t?(0,o.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};const g=function(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:i},t)};var b=["components"],v={id:"migrating-to-v2",title:"Migrating to v2",sidebar_position:3},h={unversionedId:"guides/migrating-to-v2",id:"guides/migrating-to-v2",isDocsHomePage:!1,title:"Migrating to v2",description:"We simplified and improved the experience of using PubSub Framework (especially for Typescript users) in v2, that meant changing the way we do a few things.",source:"@site/docs/guides/Migrating to v2.mdx",sourceDirName:"guides",slug:"/guides/migrating-to-v2",permalink:"/hfc-pubsub/guides/migrating-to-v2",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/docs/guides/Migrating to v2.mdx",version:"current",sidebarPosition:3,frontMatter:{id:"migrating-to-v2",title:"Migrating to v2",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"PubSub Drivers",permalink:"/hfc-pubsub/guides/drivers"},next:{title:"Testing",permalink:"/hfc-pubsub/guides/testing"}},y=[{value:"Min node version is v12.22.0",id:"min-node-version-is-v12220",children:[]},{value:"Native <code>grpc</code> module support is removed",id:"native-grpc-module-support-is-removed",children:[]},{value:"Throws error on no subscriptions found",id:"throws-error-on-no-subscriptions-found",children:[]},{value:"Publishing",id:"publishing",children:[{value:"Topic Class",id:"topic-class",children:[]}]},{value:"Subscribing",id:"subscribing",children:[]},{value:"Typescript Changes",id:"typescript-changes",children:[{value:"Declare Payload Type with Topic",id:"declare-payload-type-with-topic",children:[]},{value:"Reuse Payload Type in SubscriberObject",id:"reuse-payload-type-in-subscriberobject",children:[]}]}],f={toc:y};function k(e){var t=e.components,n=(0,a.Z)(e,b);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We simplified and improved the experience of using PubSub Framework (especially for Typescript users) in v2, that meant changing the way we do a few things."),(0,r.kt)("p",null,"These are the changes made for 2.0.0 that are breaking or just important to know:"),(0,r.kt)("h2",{id:"min-node-version-is-v12220"},"Min node version is v12.22.0"),(0,r.kt)("p",null,"Minimum supported node version is v12.22.0."),(0,r.kt)("h2",{id:"native-grpc-module-support-is-removed"},"Native ",(0,r.kt)("inlineCode",{parentName:"h2"},"grpc")," module support is removed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBSUBS_USE_GRPC")," option is removed."),(0,r.kt)("h2",{id:"throws-error-on-no-subscriptions-found"},"Throws error on no subscriptions found"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PUBSUB_ROOT_DIR")," if is not found or if the directory doesn't have any subscriptions then service will not start and exit with error."),(0,r.kt)("h2",{id:"publishing"},"Publishing"),(0,r.kt)("h3",{id:"topic-class"},"Topic Class"),(0,r.kt)("h4",{id:"topic-name-and-project-are-now-static-properties"},"Topic ",(0,r.kt)("inlineCode",{parentName:"h4"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"project")," are now static properties:"),(0,r.kt)(m,{groupId:"versions",defaultValue:"v2",values:[{label:"v1 Topic",value:"v1"},{label:"v2 Topic",value:"v2"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v1-topic.ts"',title:'"v1-topic.ts"'},"export default class ExampleTopic extends Topic {\n  // highlight-next-line\n  name = 'example-topic-with-custom-credentials';\n  // highlight-next-line\n  project: GooglePubSubProject = {\n    id: 'custom-project-id',\n    credentials: {\n      client_email: 'client@google-auth.google.com',\n      private_key: 'private_key_goes_here',\n    },\n  };\n}\n"))),(0,r.kt)(g,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v2-topic.ts"',title:'"v2-topic.ts"'},"export default class ExampleTopic extends Topic {\n  // highlight-next-line\n  static readonly topicName = 'example-topic-with-custom-credentials';\n  // highlight-next-line\n  static project: GooglePubSubProject = {\n    id: 'custom-project-id',\n    credentials: {\n      client_email: 'client@google-auth.google.com',\n      private_key: 'private_key_goes_here',\n    },\n  };\n}\n")))),(0,r.kt)("h4",{id:"topic-class-now-accepts-generic-type-arguments"},"Topic class now accepts generic type arguments"),(0,r.kt)("p",null,"Rather than the publish method previously."),(0,r.kt)(m,{groupId:"versions",defaultValue:"v2",values:[{label:"v1 Topic",value:"v1"},{label:"v2 Topic",value:"v2"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v1-topic.ts"',title:'"v1-topic.ts"'},"export interface Payload extends BasePayload {\n  id: number;\n  data: string;\n}\n\n// highlight-next-line\nexport default class SimpleTopic extends Topic {\n  name = 'simple.topic';\n}\n\n// highlight-next-line\nnew SimpleTopic().publish<Payload>({ data: 'test', id: 1 });\n"))),(0,r.kt)(g,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v2-topic.ts"',title:'"v2-topic.ts"'},"export interface Payload extends BasePayload {\n  id: number;\n  data: string;\n}\n\n// highlight-next-line\nexport default class SimpleTopic extends Topic<Payload> {\n  static readonly topicName = 'simple.topic';\n}\n\n// highlight-next-line\nnew SimpleTopic().publish({ data: 'test', id: 2 });\n")))),(0,r.kt)("h4",{id:"retry-config-is-now-under-options-field"},"Retry Config is now under options field"),(0,r.kt)(m,{groupId:"versions",defaultValue:"v2",values:[{label:"v1 Topic",value:"v1"},{label:"v2 Topic",value:"v2"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v1-topic.ts"',title:'"v1-topic.ts"'},"export default class TestRetryTopic extends Topic {\n  name = 'test.topic.with-retry-settings';\n\n  // highlight-next-line\n  retryConfig = {\n    retryCodes: [\n      10 as const, // 'ABORTED'\n      1 as const, // 'CANCELLED',\n      4 as const, // 'DEADLINE_EXCEEDED'\n      13 as const, // 'INTERNAL'\n      8 as const, // 'RESOURCE_EXHAUSTED'\n      14 as const, // 'UNAVAILABLE'\n      2 as const, // 'UNKNOWN'\n    ],\n    backoffSettings: {\n      initialRetryDelayMillis: 100,\n      retryDelayMultiplier: 1.3,\n      maxRetryDelayMillis: 60000,\n      initialRpcTimeoutMillis: 5000,\n      rpcTimeoutMultiplier: 1.0,\n      maxRpcTimeoutMillis: 600000,\n      totalTimeoutMillis: 600000,\n    },\n  };\n}\n"))),(0,r.kt)(g,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v2-topic.ts"',title:'"v2-topic.ts"'},"export default class TestRetryTopic extends Topic<Payload> {\n  static readonly topicName = 'test.topic.with-retry-settings';\n\n  // highlight-next-line\n  options: TopicOptions = {\n    retryConfig: {\n      retryCodes: [\n        10 as const, // 'ABORTED'\n        1 as const, // 'CANCELLED',\n        4 as const, // 'DEADLINE_EXCEEDED'\n        13 as const, // 'INTERNAL'\n        8 as const, // 'RESOURCE_EXHAUSTED'\n        14 as const, // 'UNAVAILABLE'\n        2 as const, // 'UNKNOWN'\n      ],\n      backoffSettings: {\n        initialRetryDelayMillis: 100,\n        retryDelayMultiplier: 1.3,\n        maxRetryDelayMillis: 60000,\n        initialRpcTimeoutMillis: 5000,\n        rpcTimeoutMultiplier: 1.0,\n        maxRpcTimeoutMillis: 600000,\n        totalTimeoutMillis: 600000,\n      },\n    },\n  };\n}\n")))),(0,r.kt)("h2",{id:"subscribing"},"Subscribing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class based subscriptions were already deprecated in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/deliveryhero/hfc-pubsub/releases/tag/v1.10.4"},"v1.10.4")," and have been removed. You can only use SubscriberObject to declare subscriptions now."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SubscriberObject")," accepts generic type argument for ",(0,r.kt)("inlineCode",{parentName:"li"},"Payload"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This type is also picked up by the ",(0,r.kt)("inlineCode",{parentName:"li"},"Message")," param and the ",(0,r.kt)("inlineCode",{parentName:"li"},"toJson")," returns this type"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Message")," wrapper has a ",(0,r.kt)("inlineCode",{parentName:"strong"},"toJson")," utility now"))),(0,r.kt)(m,{groupId:"versions",defaultValue:"v2",values:[{label:"v1 Subscription",value:"v1"},{label:"v2 Subscription",value:"v2"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"v1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v1-subscription.ts"',title:'"v1-subscription.ts"'},"import { Subscriber, Message } from '@honestfoodcompany/pubsub';\n\nexport default class TestSubscriptions extends Subscriber {\n  public static topicName = 'simple.topic';\n  public static subscriptionName = 'simple.topic.test.subscription';\n  public static description = 'Subscribes to test data';\n\n  public async handleMessage(message: Message): Promise<void> {\n    console.log(TestSubscriptions.subscriptionName, 'received message');\n    const payload = JSON.parse(message.data.toString());\n    console.log(payload.data);\n    message.ack();\n  }\n}\n"))),(0,r.kt)(g,{value:"v2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v2-subscription.ts"',title:'"v2-subscription.ts"'},"import { SubscriberObject, Message } from \"@honestfoodcompany/pubsub\";\nimport { Payload } from '../topic/simple.topic.ts';\n\n// highlight-next-line\nexport default: SubscriberObject<Payload> = {\n  topicName: 'simple.topic',\n  subscriptionName: 'simple.topic.console-log.sub',\n  description: 'Will console log messages published on test.topic',\n\n  handleMessage: function(message): void {\n    console.log(this.subscriptionName, 'received message');\n    // highlight-next-line\n    const payload = message.toJson();\n    console.log(payload.data);\n    message.ack();\n  },\n\n  handleError: function(error: Error): void {\n    console.error(error);\n    process.exit(1);\n  }\n};\n\n")))),(0,r.kt)("h2",{id:"typescript-changes"},"Typescript Changes"),(0,r.kt)("p",null,"Since most of the classes/interfaces now accept generics for Payload types, the typescript workflow is considerably better. This is how the you would reuse types across topics/subscriptions:"),(0,r.kt)("h3",{id:"declare-payload-type-with-topic"},"Declare Payload Type with Topic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="simple.topic.ts"',title:'"simple.topic.ts"'},"export interface Payload extends BasePayload {\n  id: number;\n  data: string;\n}\n\n// highlight-next-line\nexport default class SimpleTopic extends Topic<Payload> {\n  static readonly topicName = 'simple.topic';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import SimpleTopic from '../topics/simple.topic.ts';\n\n// this is already typed with Payload\nnew SimpleTopic().publish({\n  data: 'test',\n  id: 3,\n});\n")),(0,r.kt)("h3",{id:"reuse-payload-type-in-subscriberobject"},"Reuse Payload Type in SubscriberObject"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="v2-subscription.ts"',title:'"v2-subscription.ts"'},"import { SubscriberObject, Message } from \"@honestfoodcompany/pubsub\";\nimport { Payload } from '../topic/simple.topic.ts';\n\n// highlight-next-line\nexport default: SubscriberObject<Payload> = {\n  topicName: 'simple.topic',\n  subscriptionName: 'simple.topic.console-log.sub',\n  description: 'Will console log messages published on test.topic',\n\n  handleMessage: function(message): void {\n    console.log(this.subscriptionName, 'received message');\n    // This is already typed as Payload\n    // highlight-next-line\n    const payload = message.toJson();\n    console.log(payload.data);\n    message.ack();\n  },\n\n  handleError: function(error: Error): void {\n    console.error(error);\n    process.exit(1);\n  }\n};\n")))}k.isMDXComponent=!0},6010:(e,t,n)=>{function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);