"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[4487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6804:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>u,default:()=>c});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"drivers",title:"PubSub Drivers",sidebar_position:5},l={unversionedId:"drivers",id:"version-v1/drivers",isDocsHomePage:!1,title:"PubSub Drivers",description:"Google PubSub Driver",source:"@site/versioned_docs/version-v1/Drivers.md",sourceDirName:".",slug:"/drivers",permalink:"/hfc-pubsub/v1/drivers",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/versioned_docs/version-v1/Drivers.md",version:"v1",sidebarPosition:5,frontMatter:{id:"drivers",title:"PubSub Drivers",sidebar_position:5},sidebar:"version-v1/defaultSidebar",previous:{title:"CLI",permalink:"/hfc-pubsub/v1/cli"},next:{title:"Other Options",permalink:"/hfc-pubsub/v1/options"}},u=[{value:"Google PubSub Driver",id:"google-pubsub-driver",children:[]},{value:"Synchronous Driver",id:"synchronous-driver",children:[{value:"Features not supported in Synchronous Driver",id:"features-not-supported-in-synchronous-driver",children:[]}]}],p={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"google-pubsub-driver"},"Google PubSub Driver"),(0,i.kt)("p",null,"This is the default driver. It uses ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/pubsub"},"Google Cloud PubSub")," to send messages."),(0,i.kt)("p",null,"It requires the env vars ",(0,i.kt)("inlineCode",{parentName:"p"},"GOOGLE_APPLICATION_CREDENTIALS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GOOGLE_CLOUD_PUB_SUB_PROJECT_ID")," to function correctly."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," ",(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Make sure the service account is assigned the correct roles"))),(0,i.kt)("p",null,"The role assigned to the service account in the credentials should be ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/pubsub/docs/access-control"},(0,i.kt)("inlineCode",{parentName:"a"},"roles/pubsub.admin"))),(0,i.kt)("p",null,"This is required because we require the below permissions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Permission"),(0,i.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.topics.publish"),(0,i.kt)("td",{parentName:"tr",align:null},"Publish to Topic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.subscriptions.consume"),(0,i.kt)("td",{parentName:"tr",align:null},"Consume from Subscription")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.topics.get"),(0,i.kt)("td",{parentName:"tr",align:null},"Get Topic to create subscription for it")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.topics.attachSubscription"),(0,i.kt)("td",{parentName:"tr",align:null},"Create subscription for a topic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.subscriptions.get"),(0,i.kt)("td",{parentName:"tr",align:null},"Get subscription to start consuming it")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.topics.create"),(0,i.kt)("td",{parentName:"tr",align:null},"Creating Topics Automatically (for publishing, subscribing and DLQs)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.subscriptions.create"),(0,i.kt)("td",{parentName:"tr",align:null},"Creating Subscriptions (for subscribing and DLQs)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resourcemanager.projects.get"),(0,i.kt)("td",{parentName:"tr",align:null},"Get Project Number from Project to bind DLQ policies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.subscriptions.setIamPolicy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cloud.google.com/pubsub/docs/handling-failures#assigning_the_subscriber_role"},"Assigning Subscriber Role for DLQs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pubsub.topics.setIamPolicy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cloud.google.com/pubsub/docs/handling-failures#assigning_the_publisher_role"},"Assigning Publisher Role for DLQs"))))),(0,i.kt)("h2",{id:"synchronous-driver"},"Synchronous Driver"),(0,i.kt)("p",null,"If you would like to bypass Google PubSub and run your subscriptions synchronously (for development purposes) set the following environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"PUBSUB_DRIVER=synchronous\n")),(0,i.kt)("p",null,"This uses an ",(0,i.kt)("inlineCode",{parentName:"p"},"EventEmitter")," based pubsub model, and hence only works inside a single process."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," ",(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Not recommended for production use"))),(0,i.kt)("p",null,"This is useful for writing unit tests, read more in the ",(0,i.kt)("a",{parentName:"p",href:"./Guides/Testing#unit-tests"},"testing guide")),(0,i.kt)("h3",{id:"features-not-supported-in-synchronous-driver"},"Features not supported in Synchronous Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Filtering using attributes"),(0,i.kt)("li",{parentName:"ul"},"Retrying failed messages")))}c.isMDXComponent=!0}}]);