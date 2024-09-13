"use strict";(self.webpackChunk_honestfoodcompany_pubsub=self.webpackChunk_honestfoodcompany_pubsub||[]).push([[9090],{1952:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(8168),a=n(8587),o=n(6540),l=["width","height","className"];const c=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=(0,a.A)(e,l);return o.createElement("svg",(0,r.A)({"aria-label":"Menu",className:s,width:n,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.createElement("title",null,"Menu"),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},587:(e,t,n)=>{n.d(t,{A:()=>Le});var r=n(6540),a=n(53),o=n(4798),l=n(3008);const c="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const s=function(){var e=(0,r.useRef)(null);return(0,l.Ju)((function(){e.current&&i(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(o.A,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(4879);const m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";const h=function(){var e,t=(0,u.A)(),n=t.isAnnouncementBarClosed,c=t.closeAnnouncementBar,i=(0,l.pN)().announcementBar;if(!i)return null;var s=i.content,h=i.backgroundColor,g=i.textColor,b=i.isCloseable;return!s||b&&n?null:r.createElement("div",{className:m,style:{backgroundColor:h,color:g},role:"banner"},r.createElement("div",{className:(0,a.A)(f,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?r.createElement("button",{type:"button",className:d,onClick:c,"aria-label":(0,o.T)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(8168);const b=function(){return null};var p=n(4586);const E={toggle:"toggle_71bT"};var A=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.A)(E.toggle,E.dark),style:n},t)},k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.A)(E.toggle,E.light),style:n},t)},N=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,r.useState)(o),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.A)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("div",{className:"react-toggle-thumb"}),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function _(e){var t=(0,l.pN)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,i=(0,p.A)().isClient;return r.createElement(N,(0,g.A)({disabled:!i,icons:{checked:r.createElement(A,{icon:n,style:a}),unchecked:r.createElement(k,{icon:o,style:c})}},e))}var y=n(4785),w=n(4180),C=n(5515);const I=function(e){var t=(0,w.zy)(),n=(0,r.useState)(e),a=n[0],o=n[1],c=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,C.A)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)o(!0);else{if(c.current)return c.current=!1,void o(!1);a&&0===r&&o(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?o(!1):r+i<l&&o(!0)}}),[s,c]),(0,l.Ju)((function(){e&&o(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}};var L=n(4911),T=n(9312),B=n(8587),D=n(3031),S=["width","height"];const x=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=(0,B.A)(e,S);return r.createElement("svg",(0,g.A)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:o},l),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var M=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function U(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,o=(0,B.A)(e,M),c=(0,p.A)().i18n,i=c.currentLocale,s=c.locales,u=c.localeConfigs,m=(0,l.oK)();function d(e){return u[e].label}var f=s.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(i);return r.createElement(D.A,(0,g.A)({},o,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(x,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}const P="searchWrapper_3rmH";function R(e){return e.mobile?null:r.createElement("div",{className:P},r.createElement(b,null))}var V=["type"],H={default:function(){return D.A},localeDropdown:function(){return U},search:function(){return R},docsVersion:function(){return n(6467).A},docsVersionDropdown:function(){return n(7754).A},doc:function(){return n(8240).A}};function W(e){var t=e.type,n=(0,B.A)(e,V),a=function(e){void 0===e&&(e="default");var t=H[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.createElement(a,n)}var z=n(1773),O=n(1952);const F="displayOnlyInLargeViewport_GrZ2",G="navbarHideable_2qcr",j="navbarHidden_3yey";var K="right";const Q=function(){var e,t=(0,l.pN)(),n=t.navbar,o=n.items,c=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=(0,r.useState)(!1),m=u[0],d=u[1],f=(0,y.A)(),v=f.isDarkTheme,h=f.setLightTheme,p=f.setDarkTheme,E=I(c),A=E.navbarRef,k=E.isNavbarVisible;(0,L.A)(m);var N=(0,r.useCallback)((function(){d(!0)}),[d]),w=(0,r.useCallback)((function(){d(!1)}),[d]),C=(0,r.useCallback)((function(e){return e.target.checked?p():h()}),[h,p]),B=(0,T.A)();(0,r.useEffect)((function(){B===T.X.desktop&&d(!1)}),[B]);var D=o.some((function(e){return"search"===e.type})),S=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:K)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:K)}))}}(o),x=S.leftItems,M=S.rightItems;return r.createElement("nav",{ref:A,className:(0,a.A)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[G]=c,e[j]=c&&!k,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:N,onKeyDown:N},r.createElement(O.A,null)),r.createElement(z.A,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,a.A)("navbar__title")}),x.map((function(e,t){return r.createElement(W,(0,g.A)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},M.map((function(e,t){return r.createElement(W,(0,g.A)({},e,{key:t}))})),!s&&r.createElement(_,{className:F,checked:v,onChange:C}),!D&&r.createElement(b,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:w}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(z.A,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:w}),!s&&m&&r.createElement(_,{checked:v,onChange:C})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(W,(0,g.A)({mobile:!0},e,{onClick:w,key:t}))})))))))};var q=n(4676),X=n(6025);const Y="footerLogoLink_MyFc";var J=n(1101),$=["to","href","label","prependBaseUrlToHref"];function Z(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,B.A)(e,$),c=(0,X.A)(t),i=(0,X.A)(n,{forcePrependBaseUrl:!0});return r.createElement(q.A,(0,g.A)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),a)}var ee=function(e){var t=e.sources,n=e.alt;return r.createElement(J.A,{className:"footer__logo",alt:n,sources:t})};const te=function(){var e=(0,l.pN)().footer,t=e||{},n=t.copyright,o=t.links,c=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,X.A)(s.src),dark:(0,X.A)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.A)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},c&&c.length>0&&r.createElement("div",{className:"row footer__links"},c.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(Z,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(q.A,{href:s.href,className:Y},r.createElement(ee,{alt:s.alt,sources:u})):r.createElement(ee,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null};var ne=n(8193),re=(0,l.Wf)("theme"),ae="light",oe="dark",le=function(e){return e===oe?oe:ae},ce=function(e){(0,l.Wf)("theme").set(le(e))};const ie=function(){var e=(0,l.pN)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return ne.A.canUseDOM?le(document.documentElement.getAttribute("data-theme")):le(e)}(t)),c=o[0],i=o[1],s=(0,r.useCallback)((function(){i(ae),ce(ae)}),[]),u=(0,r.useCallback)((function(){i(oe),ce(oe)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",le(c))}),[c]),(0,r.useEffect)((function(){if(!n)try{var e=re.get();null!==e&&i(le(e))}catch(t){console.error(t)}}),[i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?oe:ae)}))}),[]),{isDarkTheme:c===oe,setLightTheme:s,setDarkTheme:u}};var se=n(493);const ue=function(e){var t=ie(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(se.A.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)};function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function de(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var fe="docusaurus.tab.";const ve=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.Wf)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=de((0,l.Eo)());!(e=r()).done;){var a=e.value;if(a.startsWith(fe))t[a.substring(fe.length)]=(0,l.Wf)(a).get()}n(t)}catch(o){console.error(o)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}};var he=(0,l.Wf)("docusaurus.announcement.dismiss"),ge=(0,l.Wf)("docusaurus.announcement.id");const be=function(){var e=(0,l.pN)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],o=(0,r.useCallback)((function(){he.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=ge.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;ge.set(t),r&&he.set("false"),(r||"false"===he.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}};var pe=n(8555);const Ee=function(e){var t=ve(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=be(),l=o.isAnnouncementBarClosed,c=o.closeAnnouncementBar;return r.createElement(pe.A.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:l,closeAnnouncementBar:c}},e.children)};function Ae(e){var t=e.children;return r.createElement(ue,null,r.createElement(Ee,null,r.createElement(l.VQ,null,t)))}var ke=n(2602);function Ne(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(ke.A,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var _e=n(8139);function ye(){var e=(0,p.A)().i18n,t=e.defaultLocale,n=e.locales,a=(0,l.oK)();return r.createElement(ke.A,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function we(e){var t=e.permalink,n=(0,p.A)().siteConfig.url,a=function(){var e=(0,p.A)().siteConfig.url,t=(0,w.zy)().pathname;return e+(0,X.A)(t)}(),o=t?""+n+t:a;return r.createElement(ke.A,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function Ce(e){var t=(0,p.A)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig.metadatas,c=t.i18n,i=c.currentLocale,s=c.localeConfigs,u=e.title,m=e.description,d=e.image,f=e.keywords,v=e.searchMetadatas,h=(0,X.A)(a),b=(0,l.s$)(u),E=i,A=s[i].direction;return r.createElement(r.Fragment,null,r.createElement(ke.A,null,r.createElement("html",{lang:E,dir:A}),a&&r.createElement("link",{rel:"shortcut icon",href:h}),r.createElement("title",null,b),r.createElement("meta",{property:"og:title",content:b})),r.createElement(_e.A,{description:m,keywords:f,image:d}),r.createElement(we,null),r.createElement(ye,null),r.createElement(Ne,(0,g.A)({tag:l.Cy,locale:i},v)),r.createElement(ke.A,null,o.map((function(e,t){return r.createElement("meta",(0,g.A)({key:"metadata_"+t},e))}))))}const Ie=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Le=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,c=e.pageClassName;return Ie(),r.createElement(Ae,null,r.createElement(Ce,e),r.createElement(s,null),r.createElement(h,null),r.createElement(Q,null),r.createElement("div",{className:(0,a.A)(l.GN.wrapper.main,o,c)},t),!n&&r.createElement(te,null))}},1773:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(8168),a=n(8587),o=n(6540),l=n(4676),c=n(1101),i=n(6025),s=n(4586),u=n(3008),m=["imageClassName","titleClassName"];const d=function(e){var t=(0,s.A)().isClient,n=(0,u.pN)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,b=(0,a.A)(e,m),p=(0,i.A)(v.href||"/"),E={light:(0,i.A)(v.src),dark:(0,i.A)(v.srcDark||v.src)};return o.createElement(l.A,(0,r.A)({to:p},b,v.target&&{target:v.target}),v.src&&o.createElement(c.A,{key:t,className:h,sources:E,alt:v.alt||d||"Logo"}),null!=d&&o.createElement("strong",{className:g},d))}},3031:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(8168),a=n(8587),o=n(6540),l=n(53),c=n(4676),i=n(6025),s=n(4180),u=n(3008),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["items","position","className"],f=["className"],v=["items","className","position"],h=["className"],g=["mobile"];function b(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,s=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,v=e.prependBaseUrlToHref,h=(0,a.A)(e,m),g=(0,i.A)(l),b=(0,i.A)(t),p=(0,i.A)(s,{forcePrependBaseUrl:!0});return o.createElement(c.A,(0,r.A)({},s?{href:v?p:s}:Object.assign({isNavLink:!0,activeClassName:f,to:g},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function p(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.A)(e,d),u=(0,o.useRef)(null),m=(0,o.useRef)(null),v=(0,o.useState)(!1),h=v[0],g=v[1];(0,o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),(0,l.A)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.createElement("div",{ref:u,className:(0,l.A)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":h})},o.createElement(b,(0,r.A)({className:p(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!=(t=s.children)?t:s.label),o.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var l=e.className,c=(0,a.A)(e,f);return o.createElement("li",{key:t},o.createElement(b,(0,r.A)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:p(l,!0)},c)))})))):o.createElement(b,(0,r.A)({className:p(i)},s))}function E(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,a.A)(e,v)),f=(0,o.useRef)(null),g=(0,s.zy)().pathname,p=(0,o.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.ys)(e.to,g)}))))||e})),E=p[0],A=p[1],k=function(e,t){return void 0===t&&(t=!1),(0,l.A)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,r.A)({className:k(m)},d)));var N=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,l.A)("menu__list-item",{"menu__list-item--collapsed":E})},o.createElement(b,(0,r.A)({role:"button",className:k(m,!0)},d,{onClick:function(e){e.preventDefault(),A((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),o.createElement("ul",{className:"menu__list",ref:f,style:{height:E?void 0:N}},i.map((function(e,t){var n=e.className,l=(0,a.A)(e,h);return o.createElement("li",{className:"menu__list-item",key:t},o.createElement(b,(0,r.A)({activeClassName:"menu__link--active",className:k(n)},l,{onClick:d.onClick})))}))))}const A=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.A)(e,g),l=n?E:p;return o.createElement(l,r)}},8240:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(8168),a=n(8587),o=n(6540),l=n(3031),c=n(4098),i=n(53),s=n(3008),u=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,n,m=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.A)(e,u),g=(0,c.zK)(v),b=g.activeVersion,p=g.activeDoc,E=(0,s.g1)(v).preferredVersion,A=(0,c.r7)(v),k=null!=(t=null!=b?b:E)?t:A,N=k.docs.find((function(e){return e.id===m}));if(!N){var _=k.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+m+" in version "+k.name+".\nAvailable docIds=\n- "+_)}return o.createElement(l.A,(0,r.A)({exact:!0},h,{className:(0,i.A)(h.className,(n={},n[d]=p&&p.sidebar===N.sidebar,n)),label:null!=f?f:N.id,to:N.path}))}},7754:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(8168),a=n(8587),o=n(6540),l=n(3031),c=n(4098),i=n(3008),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,a.A)(e,s),b=(0,c.zK)(d),p=(0,c.jh)(d),E=(0,c.r7)(d),A=(0,i.g1)(d),k=A.preferredVersion,N=A.savePreferredVersionName;var _=null!=(t=null!=(n=b.activeVersion)?n:k)?t:E,y=m?"Versions":_.label,w=m?void 0:u(_).path;return o.createElement(l.A,(0,r.A)({},g,{mobile:m,label:y,to:w,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){N(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},6467:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(8168),a=n(8587),o=n(6540),l=n(3031),c=n(4098),i=n(3008),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.A)(e,s),f=(0,c.ir)(m),v=(0,i.g1)(m).preferredVersion,h=(0,c.r7)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.A,(0,r.A)({},d,{label:b,to:p}))}},9090:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(6540),a=n(587),o=n(4798);const l=function(){return r.createElement(a.A,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},493:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(6540).createContext(void 0)},1101:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(8168),a=n(8587),o=n(6540),l=n(53),c=n(4586),i=n(4785);const s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"};var u=["sources","className","alt"];const m=function(e){var t=(0,c.A)().isClient,n=(0,i.A)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.A)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.A)({key:e,src:m[e],alt:v,className:(0,l.A)(s.themedImage,s["themedImage--"+e],d)},h))})))}},8555:(e,t,n)=>{n.d(t,{A:()=>r});const r=(0,n(6540).createContext)(void 0)},4911:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6540);const a=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},5515:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(6540),a=n(8193),o=function(){return{scrollX:a.A.canUseDOM?window.pageXOffset:0,scrollY:a.A.canUseDOM?window.pageYOffset:0}};const l=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},4785:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540),a=n(493);const o=function(){var e=(0,r.useContext)(a.A);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},4879:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540),a=n(8555);const o=function(){var e=(0,r.useContext)(a.A);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9312:(e,t,n)=>{n.d(t,{A:()=>l,X:()=>o});var r=n(6540),a=n(8193),o={desktop:"desktop",mobile:"mobile"};const l=function(){var e=a.A.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var n=(0,r.useState)(t),l=n[0],c=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),l}}}]);