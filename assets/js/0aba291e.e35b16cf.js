"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[449],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6889:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:3},l="Cloudflare",u={unversionedId:"tutorial-extras/cloudflare",id:"tutorial-extras/cloudflare",title:"Cloudflare",description:"What?",source:"@site/docs/tutorial-extras/cloudflare.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/cloudflare",permalink:"/docs/tutorial-extras/cloudflare",editUrl:"https://github.com/Josh-McFarlin/remix-image/tree/master/docs/templates/shared/docs/tutorial-extras/cloudflare.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sharp",permalink:"/docs/tutorial-extras/sharp"},next:{title:"Creating a Cache",permalink:"/docs/advanced/creating-a-cache"}},c=[{value:"What?",id:"what",children:[],level:2},{value:"Transformer",id:"transformer",children:[],level:2},{value:"Resolver",id:"resolver",children:[],level:2}],p={toc:c};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cloudflare"},"Cloudflare"),(0,a.kt)("h2",{id:"what"},"What?"),(0,a.kt)("p",null,"Some platforms like Cloudflare Workers do not support file-systems and Node packages."),(0,a.kt)("h2",{id:"transformer"},"Transformer"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"remix-image")," on Cloudflare and similar, use ",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryCache")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pureTransformer")," because they are pure JavaScript."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Because of bundling issues, you must import these helpers from ",(0,a.kt)("inlineCode",{parentName:"p"},"remix-image/serverPure"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'import type { LoaderFunction } from "remix";\nimport { imageLoader, MemoryCache, pureTransformer } from "remix-image/serverPure";\n\nconst config = {\n  selfUrl: "http://localhost:3000",\n  cache: new MemoryCache(),\n  transformer: pureTransformer\n};\n\nexport const loader: LoaderFunction = ({ request }) => {\n  return imageLoader(config, request);\n};\n')),(0,a.kt)("p",null,"Also, ",(0,a.kt)("inlineCode",{parentName:"p"},"pureTransformer")," is used by default, it does not need to be specified in the config.\nThis is only shown in the following example to show it must be used instead of other ",(0,a.kt)("inlineCode",{parentName:"p"},"transformer")," options."),(0,a.kt)("h2",{id:"resolver"},"Resolver"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"remix-image")," will work on Cloudflare if all assets server are being fetched from another server.\nIf you are trying to serve assets stored in your app's ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," directory, you must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kvResolver"),"."),(0,a.kt)("p",null,"If you would like to use both ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchResolver")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fsResolver"),", you can create a custom resolver as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'import {\n  imageLoader,\n  MemoryCache,\n  kvResolver,\n  fetchResolver,\n} from "remix-image/serverPure";\n\nconst whitelistedDomains = new Set(["http://localhost:3000", "i.imgur.com"]);\n\nexport const myResolver = async (\n  asset: string,\n  url: string\n): Promise<{\n  buffer: Buffer;\n  contentType: string;\n}> => {\n  if (asset.startsWith("/") && (asset.length === 1 || asset[1] !== "/")) {\n    return kvResolver(asset, url);\n  } else {\n    if (!whitelistedDomains.has(new URL(url).host)) {\n      throw new Error("Domain not allowed!");\n    }\n\n    return fetchResolver(asset, url);\n  }\n};\n\nconst config = {\n  selfUrl: "http://localhost:3000",\n  cache: new MemoryCache(),\n  resolver: myResolver,\n};\n\nexport const loader: LoaderFunction = ({ request }) => {\n  return imageLoader(config, request);\n};\n')),(0,a.kt)("p",null,"For an example project hosted on Cloudflare Workers, look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Josh-McFarlin/remix-image/tree/master/examples/cloudflare"},"this example"),"."))}m.isMDXComponent=!0}}]);