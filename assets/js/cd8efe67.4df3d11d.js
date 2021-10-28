"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2717:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"installation",title:"Installation",slug:"/getting-started/installation",sidebar_position:1},s=void 0,p={unversionedId:"getting-started/installation",id:"version-v1/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Requirements",source:"@site/versioned_docs/version-v1/getting-started/Installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/hfc-pubsub/v1/getting-started/installation",editUrl:"https://github.com/deliveryhero/hfc-pubsub/edit/main/versioned_docs/version-v1/getting-started/Installation.md",tags:[],version:"v1",sidebarPosition:1,frontMatter:{id:"installation",title:"Installation",slug:"/getting-started/installation",sidebar_position:1},sidebar:"version-v1/defaultSidebar",previous:{title:"Introduction",permalink:"/hfc-pubsub/v1/"},next:{title:"Subscriptions",permalink:"/hfc-pubsub/v1/subscribing/subscriptions"}},u=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Install",id:"install",children:[{value:"From NPM",id:"from-npm",children:[],level:3},{value:"From Github Package Repository",id:"from-github-package-repository",children:[],level:3}],level:2},{value:"Project structure",id:"project-structure",children:[],level:2},{value:"Required Environment Variables",id:"required-environment-variables",children:[],level:2},{value:"What next?",id:"what-next",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 12.13.0 or above (which can be checked by running node -v). You can use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("h3",{id:"from-npm"},"From NPM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@honestfoodcompany/pubsub"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@honestfoodcompany/pubsub",alt:"npm"}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i --save @honestfoodcompany/pubsub\n")),(0,i.kt)("h3",{id:"from-github-package-repository"},"From Github Package Repository"),(0,i.kt)("p",null,"We also publish to Github Package Repository as ",(0,i.kt)("inlineCode",{parentName:"p"},"@deliveryhero/pubsub"),". To install from there, first add this to your ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@deliveryhero:registry="https://npm.pkg.github.com/"\n')),(0,i.kt)("p",null,"And then install the package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i --save @deliveryhero/pubsub\n")),(0,i.kt)("h2",{id:"project-structure"},"Project structure"),(0,i.kt)("p",null,"The framework expects that you've created a pubsub directory in your project with the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 .env                <-- this should be in your project root directory and will be autoloaded\n\u251c\u2500\u2500 pubsub/             <-- this can be anywhere and named enything (defined in .env as PUBSUB_ROOT_DIR)\n\u2502   \u251c\u2500\u2500 subscriptions/  <-- any files ending with a `.sub.js` ext will be autoloaded from here\n\u2502   \u251c\u2500\u2500 topics/\n\u2502   \u2514\u2500\u2500 subscription.service.js <-- this is the entrypoint for the service\n\u2514\u2500\u2500 package.json\n")),(0,i.kt)("h2",{id:"required-environment-variables"},"Required Environment Variables"),(0,i.kt)("p",null,"The framework expects the following environment variables. They can be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file or passed through CLI args."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".env"',title:'".env"'},"PUBSUB_ROOT_DIR=/path/to/your/pubsub/directory # this can be a relative path to process cwd\nGOOGLE_APPLICATION_CREDENTIALS=/path/to/gcp-project-83d5537a8388-key.json\nGOOGLE_CLOUD_PUB_SUB_PROJECT_ID=gcp-project-id\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CLI Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Env Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"root-dir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PUBSUB_ROOT_DIR")),(0,i.kt)("td",{parentName:"tr",align:null},"must be the path to your project's pubsub directory. This module only works with .js files, so if you are writing your code in typescript, you must set this variable to the pubsub directory in your project's build directory.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"google-application-credentials")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GOOGLE_APPLICATION_CREDENTIALS")),(0,i.kt)("td",{parentName:"tr",align:null},"see ",(0,i.kt)("a",{parentName:"td",href:"https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account"},"https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account")," to generate this")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"project-id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GOOGLE_CLOUD_PUB_SUB_PROJECT_ID")),(0,i.kt)("td",{parentName:"tr",align:null},"name of the project in Google Cloud Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"server-port")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PUBSUB_SERVER_PORT")),(0,i.kt)("td",{parentName:"tr",align:null},"PORT at which the pubsub should run the server at")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"health-server")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PUBSUB_HEALTH_SERVER")),(0,i.kt)("td",{parentName:"tr",align:null},"If value assigned is true this would run a server showing health state and return 500 if not healthy")))),(0,i.kt)("p",null,"|"),(0,i.kt)("h2",{id:"what-next"},"What next?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Once the directory structure has been defined and environment variables set"),(0,i.kt)("li",{parentName:"ol"},"Then you can create ",(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/v1/subscribing/subscriptions"},"subscriptions")," and ",(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/v1/publishing/topics"},"topics")),(0,i.kt)("li",{parentName:"ol"},"Initialize your database connection, define project-level subscription defaults, and register subscriptions in the ",(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/v1/server/service"},"Subscription Service"),"."),(0,i.kt)("li",{parentName:"ol"},"After a service has been created, use the ",(0,i.kt)("a",{parentName:"li",href:"/hfc-pubsub/v1/cli"},"CLI")," to start the subscriptions server.")))}d.isMDXComponent=!0}}]);