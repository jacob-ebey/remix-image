"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,75],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5958:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var r=n(7294),a=n(3905),o=n(6291),l=n(3346),c=n(6010),i=n(9548),s=n(5537),u=n(7462);var d=function(e){return r.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},m=n(5999),p=n(3366),f=n(9960),h=n(3919),v=n(541),b="menuLinkText_QVir",y="hasHref_VCh3",g=n(2389),E=["item"],k=["item","onItemClick","activePath","level","index"],Z=["item","onItemClick","activePath","level","index"];function C(e){var t=e.item,n=(0,p.Z)(e,E);return"category"===t.type?0===t.items.length?null:r.createElement(N,(0,u.Z)({item:t},n)):r.createElement(T,(0,u.Z)({item:t},n))}function N(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=e.level,s=e.index,d=(0,p.Z)(e,k),h=n.items,v=n.label,E=n.collapsible,Z=n.className,C=n.href,N=function(e){var t=(0,g.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(n),T=(0,i._F)(n,o),_=(0,i.uR)({initialState:function(){return!!E&&(!T&&n.collapsed)}}),S=_.collapsed,x=_.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,i.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:T,collapsed:S,setCollapsed:x});var I=(0,i.fP)(),O=I.expandedItem,w=I.setExpandedItem;function A(e){void 0===e&&(e=!S),w(e?null:s),x(e)}var L=(0,i.LU)().autoCollapseSidebarCategories;return(0,r.useEffect)((function(){E&&O&&O!==s&&L&&x(!0)}),[E,O,s,x,L]),r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":S},Z)},r.createElement("div",{className:"menu__list-item-collapsible"},r.createElement(f.Z,(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":E&&!C,"menu__link--active":T},t[b]=!E,t[y]=!!N,t)),onClick:E?function(e){null==a||a(n),C?A(!1):(e.preventDefault(),A())}:function(){null==a||a(n)},"aria-current":T?"page":void 0,href:E?null!=N?N:"#":N},d),v),C&&E&&r.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:v}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),A()}})),r.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},r.createElement(P,{items:h,tabIndex:S?-1:0,onItemClick:a,activePath:o,level:l+1})))}function T(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(e.index,(0,p.Z)(e,Z)),s=t.href,d=t.label,m=t.className,b=(0,i._F)(t,a);return r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:d},r.createElement(f.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,h.Z)(s)?d:r.createElement("span",null,d,r.createElement(v.Z,null))))}var _=["items"];function S(e){var t=e.items,n=(0,p.Z)(e,_);return r.createElement(i.D_,null,t.map((function(e,t){return r.createElement(C,(0,u.Z)({key:t,item:e,index:t},n))})))}var P=(0,r.memo)(S),x="sidebar_CW9Y",I="sidebarWithHideableNavbar_FoYL",O="sidebarHidden_D64r",w="sidebarLogo_FJUI",A="menu_SkdO",L="menuWithAnnouncementBar_x19h",j="collapseSidebarButton_cwdi",B="collapseSidebarButtonIcon_xORG";function M(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",j),onClick:t},r.createElement(d,{className:B}))}function D(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,u=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return r.createElement("div",{className:(0,c.Z)(x,(t={},t[I]=p,t[O]=u,t))},p&&r.createElement(s.Z,{tabIndex:-1,className:w}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",A,(n={},n[L]=d,n))},r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(P,{items:o,activePath:a,level:1}))),f&&r.createElement(M,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(P,{items:n,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function F(e){return r.createElement(i.Cv,{component:R,props:e})}var W=r.memo(D),H=r.memo(F);function z(e){var t=(0,i.iP)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(W,e),a&&r.createElement(H,e))}var V=n(2859),U=n(3746);var Y="codeBlockContainer_I0IT",G="codeBlockContent_wNvx",q="codeBlockTitle_BvAR",X="codeBlock_jd64",J="codeBlockStandalone_csWH",K="copyButton_wuS7",Q="codeBlockLines_mRuA";function $(e){var t,n=e.children,a=e.className,o=void 0===a?"":a,l=e.metastring,s=e.title,d=e.language,p=(0,i.LU)().prism,f=(0,r.useState)(!1),h=f[0],v=f[1],b=(0,r.useState)(!1),y=b[0],g=b[1];(0,r.useEffect)((function(){g(!0)}),[]);var E=(0,i.bc)(l)||s,k=(0,i.pJ)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(U.ZP,(0,u.Z)({},U.lG,{key:String(y),theme:k,code:"",language:"text"}),(function(e){var t=e.className,a=e.style;return r.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,J,"thin-scrollbar",Y,o,i.kM.common.codeBlock),style:a},r.createElement("code",{className:Q},n))}));var Z=Array.isArray(n)?n.join(""):n,C=null!=(t=null!=d?d:(0,i.Vo)(o))?t:p.defaultLanguage,N=(0,i.nZ)(Z,l,C),T=N.highlightLines,_=N.code,S=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(_),v(!0),setTimeout((function(){return v(!1)}),2e3)};return r.createElement(U.ZP,(0,u.Z)({},U.lG,{key:String(y),theme:k,code:_,language:null!=C?C:"text"}),(function(e){var t,n=e.className,a=e.style,l=e.tokens,s=e.getLineProps,d=e.getTokenProps;return r.createElement("div",{className:(0,c.Z)(Y,o,(t={},t["language-"+C]=C&&!o.includes("language-"+C),t),i.kM.common.codeBlock)},E&&r.createElement("div",{style:a,className:q},E),r.createElement("div",{className:(0,c.Z)(G,C)},r.createElement("pre",{tabIndex:0,className:(0,c.Z)(n,X,"thin-scrollbar"),style:a},r.createElement("code",{className:Q},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return T.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,u.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,u.Z)({key:t},d({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(K,"clean-btn"),onClick:S},h?r.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var ee=n(9649),te="details_BAp3";function ne(e){var t=Object.assign({},e);return r.createElement(i.PO,(0,u.Z)({},t,{className:(0,c.Z)("alert alert--info",te,t.className)}))}var re=["mdxType","originalType"];var ae={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,p.Z)(a,re));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(V.Z,e,t)},code:function(e){return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?r.createElement("code",e):r.createElement($,e)},a:function(e){return r.createElement(f.Z,e)},pre:function(e){var t;return r.createElement($,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ne,(0,u.Z)({},e,{summary:n}),a)},h1:function(e){return r.createElement(ee.Z,(0,u.Z)({as:"h1"},e))},h2:function(e){return r.createElement(ee.Z,(0,u.Z)({as:"h2"},e))},h3:function(e){return r.createElement(ee.Z,(0,u.Z)({as:"h3"},e))},h4:function(e){return r.createElement(ee.Z,(0,u.Z)({as:"h4"},e))},h5:function(e){return r.createElement(ee.Z,(0,u.Z)({as:"h5"},e))},h6:function(e){return r.createElement(ee.Z,(0,u.Z)({as:"h6"},e))}},oe=n(4608),le="backToTopButton_RiI4",ce="backToTopButtonShow_ssHd";function ie(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var se=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=ie(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var l=n<r;if(l||u(),n<300)a(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&a(!0)}else a(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,le,(e={},e[ce]=n,e)),type:"button",onClick:function(){return s()}})},ue=n(6775),de={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};function me(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,p=e.children,f=e.sidebarName,h=(0,i.Vq)(),v=u.pluginId,b=u.version,y=(0,r.useState)(!1),g=y[0],E=y[1],k=(0,r.useState)(!1),Z=k[0],C=k[1],N=(0,r.useCallback)((function(){Z&&C(!1),E((function(e){return!e}))}),[Z]);return r.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:b,tag:(0,i.os)(v,b)}},r.createElement("div",{className:de.docPage},r.createElement(se,null),h&&r.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,de.docSidebarContainer,(t={},t[de.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.docSidebarContainer)&&g&&C(!0)}},r.createElement(z,{key:f,sidebar:h,path:s.path,onCollapse:N,isHidden:Z}),Z&&r.createElement("div",{className:de.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},r.createElement(d,{className:de.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(de.docMainContainer,(n={},n[de.docMainContainerEnhanced]=g||!h,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",de.docItemWrapper,(o={},o[de.docItemWrapperEnhanced]=g,o))},r.createElement(a.Zo,{components:ae},p)))))}var pe=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return(0,ue.LX)(a.pathname,e)}));if(!l)return r.createElement(oe.default,null);var c=l.sidebar,s=c?n.docsSidebars[c]:null;return r.createElement(r.Fragment,null,r.createElement(V.Z,null,r.createElement("html",{className:n.className})),r.createElement(i.qu,{version:n},r.createElement(i.bT,{sidebar:s},r.createElement(me,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,o.Z)(t,{versionMetadata:n})))))}},9649:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(5999),i=n(9548),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"],m=["as"];function p(e){var t,n=e.as,m=e.id,p=(0,a.Z)(e,d),f=(0,i.LU)().navbar.hideOnScroll;return m?o.createElement(n,(0,r.Z)({},p,{className:(0,l.Z)("anchor",(t={},t[u]=f,t[s]=!f,t)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(n,p)}function f(e){var t=e.as,n=(0,a.Z)(e,m);return"h1"===t?o.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):o.createElement(p,(0,r.Z)({as:t},n))}},4608:function(e,t,n){n.r(t);var r=n(7294),a=n(3346),o=n(5999);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},3746:function(e,t,n){n.d(t,{ZP:function(){return h},lG:function(){return l}});var r=n(7410),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(7294),l={Prism:r.default,theme:a};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=i({},n,{backgroundColor:null}),a};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=i({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?i({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=i({},p(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?i({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),c(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var m=void 0,p=t[l],f=n[l][o];if("string"==typeof f?(p=l>0?p:["plain"],m=f):(p=d(p,f.type),f.alias&&(p=d(p,f.alias)),m=f.content),"string"==typeof m){var h=m.split(s),v=h.length;c.push({types:p,content:h[0]});for(var b=1;b<v;b++)u(c),i.push(c=[]),c.push({types:p,content:h[b]})}else l++,t.push(p),n.push(m),r.push(0),a.push(m.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return u(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),h=f}}]);