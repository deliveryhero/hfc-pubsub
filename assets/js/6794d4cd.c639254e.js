"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[3102],{6742:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(102),a=n(7294),u=n(3727),i=n(2263),l=n(3919),o=n(412),c=(0,a.createContext)({collectLink:function(){}}),s=n(4996),d=n(8780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var t,n,v=e.isNavLink,m=e.to,h=e.href,b=e.activeClassName,p=e.isActive,_=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,E=void 0===g||g,k=(0,r.Z)(e,f),y=(0,i.Z)().siteConfig,w=y.trailingSlash,C=y.baseUrl,U=(0,s.C)().withBaseUrl,Z=(0,a.useContext)(c),N=m||h,O=(0,l.Z)(N),j=null==N?void 0:N.replace("pathname://",""),B=void 0!==j?(n=j,E&&function(e){return e.startsWith("/")}(n)?U(n):n):void 0;B&&O&&(B=(0,d.applyTrailingSlash)(B,{trailingSlash:w,baseUrl:C}));var P,L=(0,a.useRef)(!1),S=v?u.OL:u.rU,A=o.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!A&&O&&null!=B&&window.docusaurus.prefetch(B),function(){A&&P&&P.disconnect()}}),[B,A,O]);var R=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,W=!B||!O||R;return B&&O&&!R&&!_&&Z.collectLink(B),W?a.createElement("a",Object.assign({href:B},N&&!O&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(S,Object.assign({},k,{onMouseEnter:function(){L.current||null==B||(window.docusaurus.preload(B),L.current=!0)},innerRef:function(e){var t,n;A&&e&&O&&(t=e,n=function(){null!=B&&window.docusaurus.prefetch(B)},(P=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))}))).observe(t))},to:B||""},v&&{isActive:p,activeClassName:b}))}},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>u,Z:()=>i});var r=n(2263),a=n(3919);function u(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,l=void 0!==i&&i,o=u.absolute,c=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(u,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},5972:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(9105),u=n(6742);const i="container_3Gti",l="nav_2hIU",o="navlink_XGn1";var c=function(e){var t=e.to,n=e.children;return r.createElement(u.Z,{className:o,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};const s=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Docusaurus debug panel")),r.createElement("div",null,r.createElement("nav",{className:l},r.createElement(c,{to:"/__docusaurus/debug"},"Config"),r.createElement(c,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.createElement(c,{to:"/__docusaurus/debug/registry"},"Registry"),r.createElement(c,{to:"/__docusaurus/debug/routes"},"Routes"),r.createElement(c,{to:"/__docusaurus/debug/content"},"Content"),r.createElement(c,{to:"/__docusaurus/debug/globalData"},"Global data")),r.createElement("main",{className:i},t)))}},9710:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(7294),a=n(5972),u=n(9302);const i="list_3P1k",l="listItem_3Kj2";const o=function(){return r.createElement(a.Z,null,r.createElement("h2",null,"Registry"),r.createElement("ul",{className:i},Object.values(u.Z).map((function(e){var t=e[1],n=e[2];return r.createElement("li",{key:t,className:l},r.createElement("div",{style:{marginBottom:"10px"}},"Aliased Path: ",r.createElement("code",null,t)),r.createElement("div",null,"Resolved Path: ",r.createElement("code",null,n)))}))))}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,u=e.split(/[#?]/)[0],i="/"===u||u===r?u:(a=u,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(u,i)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var u=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(u).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);