"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[2680],{4676:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(8587),a=n(6540),o=n(4625),u=n(6654),c=n(8193),s=(0,a.createContext)({collectLink:function(){}}),l=n(6025),i=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const d=function(e){var t,n,d,v=e.isNavLink,f=e.to,m=e.href,h=e.activeClassName,E=e.isActive,b=e["data-noBrokenLinkCheck"],_=e.autoAddBaseUrl,g=void 0===_||_,k=(0,r.A)(e,i),p=(0,l.h)().withBaseUrl,A=(0,a.useContext)(s),w=f||m,C=(0,u.A)(w),N=null==w?void 0:w.replace("pathname://",""),B=void 0!==N?(n=N,g&&function(e){return e.startsWith("/")}(n)?p(n):n):void 0,U=(0,a.useRef)(!1),y=v?o.k2:o.N_,L=c.A.canUseIntersectionObserver;(0,a.useEffect)((function(){return!L&&C&&null!=B&&window.docusaurus.prefetch(B),function(){L&&d&&d.disconnect()}}),[B,L,C]);var R=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,I=!B||!C||R;return B&&C&&!R&&!b&&A.collectLink(B),I?a.createElement("a",Object.assign({href:B},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(y,Object.assign({},k,{onMouseEnter:function(){U.current||null==B||(window.docusaurus.preload(B),U.current=!0)},innerRef:function(e){var t,n;L&&e&&C&&(t=e,n=function(){null!=B&&window.docusaurus.prefetch(B)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:B||""},v&&{isActive:E,activeClassName:h}))}},6654:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{A:()=>a,z:()=>r})},6025:(e,t,n)=>{n.d(t,{A:()=>u,h:()=>o});var r=n(4586),a=n(6654);function o(){var e=(0,r.A)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,u=o.forcePrependBaseUrl,c=void 0!==u&&u,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.z)(n))return n;if(c)return t+n;var i=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+i:i}(o,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},5100:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(6540),a=n(2602),o=n(4676);const u="container_3Gti",c="nav_2hIU",s="navlink_XGn1";var l=function(e){var t=e.to,n=e.children;return r.createElement(o.A,{className:s,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};const i=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.A,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Docusaurus debug panel")),r.createElement("div",null,r.createElement("nav",{className:c},r.createElement(l,{to:"/__docusaurus/debug"},"Config"),r.createElement(l,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.createElement(l,{to:"/__docusaurus/debug/registry"},"Registry"),r.createElement(l,{to:"/__docusaurus/debug/routes"},"Routes"),r.createElement(l,{to:"/__docusaurus/debug/content"},"Content"),r.createElement(l,{to:"/__docusaurus/debug/globalData"},"Global data")),r.createElement("main",{className:u},t)))}},3531:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(6540),a=n(5100),o=n(4950);const u="list_3P1k",c="listItem_3Kj2";const s=function(){return r.createElement(a.A,null,r.createElement("h2",null,"Registry"),r.createElement("ul",{className:u},Object.values(o.A).map((function(e){var t=e[1],n=e[2];return r.createElement("li",{key:t,className:c},r.createElement("div",{style:{marginBottom:"10px"}},"Aliased Path: ",r.createElement("code",null,t)),r.createElement("div",null,"Resolved Path: ",r.createElement("code",null,n)))}))))}}}]);