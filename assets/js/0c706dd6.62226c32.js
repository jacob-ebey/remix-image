"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[191],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return r?a.createElement(k,l(l({ref:t},m),{},{components:r})):a.createElement(k,l({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4775:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:5},s="Loader",p={unversionedId:"loader",id:"loader",title:"Loader",description:"Create a new resource route that imports the imageLoader function and exports as loader.",source:"@site/docs/loader.md",sourceDirName:".",slug:"/loader",permalink:"/docs/loader",editUrl:"https://github.com/Josh-McFarlin/remix-image/tree/master/docs/templates/shared/docs/loader.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Creating a Transformer",permalink:"/docs/advanced/creating-a-transformer"},next:{title:"Component",permalink:"/docs/component"}},m=[{value:"Options",id:"options",children:[],level:2},{value:"Cache Types",id:"cache-types",children:[],level:2},{value:"Transformer Types",id:"transformer-types",children:[],level:2},{value:"Resolver Types",id:"resolver-types",children:[],level:2},{value:"Cloudflare / Platforms Without File-System Access",id:"cloudflare--platforms-without-file-system-access",children:[],level:2}],c={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loader"},"Loader"),(0,o.kt)("p",null,"Create a new resource route that imports the ",(0,o.kt)("inlineCode",{parentName:"p"},"imageLoader")," function and exports as ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),".\nBy default, the image component uses the route ",(0,o.kt)("inlineCode",{parentName:"p"},'"/api/image"'),", but any route can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'import type { LoaderFunction } from "remix";\nimport { imageLoader, DiskCache } from "remix-image/server";\n\nconst config = {\n  selfUrl: "http://localhost:3000",\n  cache: new DiskCache(),\n};\n\nexport const loader: LoaderFunction = ({ request }) => {\n  return imageLoader(config, request);\n};\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"selfUrl"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"The URL of the local server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"resolver"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Resolver"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"fetchResolver"),(0,o.kt)("td",{parentName:"tr",align:"center"},"The image resolver to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"transformer"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Transformer or null"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"pureTransformer"),(0,o.kt)("td",{parentName:"tr",align:"center"},"A transformer function that handles mutations of images. If this option is null, transformation will be skipped.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"useFallbackFormat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"true"),(0,o.kt)("td",{parentName:"tr",align:"center"},"If RemixImage should fallback to the fallback mime type if the output type is not supported.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"fallbackFormat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"MimeType"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"MimeType.PNG"),(0,o.kt)("td",{parentName:"tr",align:"center"},"The output mime type the image should fallback to if the provided type is not supported.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"useFallbackTransformer"),(0,o.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"true"),(0,o.kt)("td",{parentName:"tr",align:"center"},"If RemixImage should fallback to the default transformer if custom transformer fails.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"fallbackTransformer"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Transformer"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"pureTransformer"),(0,o.kt)("td",{parentName:"tr",align:"center"},"The transformer the loader should use if the provided custom transformer fails.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"cache"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Cache"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"The configuration for the local image cache. Setting this to null will disable the cache.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"defaultOptions"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Partial","<","SizelessOptions",">"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"Default TransformOptions to use, can be overridden by the client.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"redirectOnFail"),(0,o.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"false"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Redirect image to original source if RemixImage fails.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"skipFormats"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Set","<","MimeType",">"," or null"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"Set(","[MimeType.SVG]",")"),(0,o.kt)("td",{parentName:"tr",align:"center"},"A set of mime types that should be returned without transformation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"basePath"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},'"public"'),(0,o.kt)("td",{parentName:"tr",align:"center"},"The base file path used for the resolver.")))),(0,o.kt)("h2",{id:"cache-types"},"Cache Types"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Options"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DiskCache"),(0,o.kt)("td",{parentName:"tr",align:null},"A cache that stores images in memory and on disk (depending on size) for the best efficiency. To use, install the ",(0,o.kt)("inlineCode",{parentName:"td"},"@next-boost/hybrid-disk-cache")," library from npm."),(0,o.kt)("td",{parentName:"tr",align:null},"{ path: string, ttl: number, tbd: number }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MemoryCache"),(0,o.kt)("td",{parentName:"tr",align:null},"A cache that only stores images in memory. Designed for platforms that do not have native disk access like Cloudflare."),(0,o.kt)("td",{parentName:"tr",align:null},"{ maxSize: number (bytes), ttl: number, tbd: number }")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nDue to ",(0,o.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/v1.1.1/other-api/serve"},"Remix request purging"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryCache")," will clear itself automatically on each request in development. This will not occur during production, and it will perform as expected."),(0,o.kt)("h2",{id:"transformer-types"},"Transformer Types"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pureTransformer"),(0,o.kt)("td",{parentName:"tr",align:null},"The default image transformer, supports all platforms at the cost of performance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sharp"),(0,o.kt)("td",{parentName:"tr",align:null},"A faster image transformer that uses the file-system, offers the best performance. To use, take a look at ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tutorial-extras/sharp"},"these docs")),".")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nBy default, Remix-Image uses ",(0,o.kt)("inlineCode",{parentName:"p"},"pureTransformer"),", which supports image transformations for the following types: ",(0,o.kt)("inlineCode",{parentName:"p"},"JPEG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PNG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GIF")," (non-animated), ",(0,o.kt)("inlineCode",{parentName:"p"},"BMP"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"TIFF"),".\nIf you would like to use additional file types, you must use a custom transformer."),(0,o.kt)("h2",{id:"resolver-types"},"Resolver Types"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fetchResolver"),(0,o.kt)("td",{parentName:"tr",align:null},"The default image resolver, fetches images over the network.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fsResolver"),(0,o.kt)("td",{parentName:"tr",align:null},"An image resolver that retrieves local images from the file-system.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kvResolver"),(0,o.kt)("td",{parentName:"tr",align:null},"A resolver for assets stored in Workers KV (for retrieving local images on Remix projects hosted on Cloudflare Workers.) To use, install the ",(0,o.kt)("inlineCode",{parentName:"td"},"@cloudflare/kv-asset-handler")," library from npm.")))),(0,o.kt)("p",null,"You can create a custom resolver by combining resolvers and passing this to the loader options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'import {\n  imageLoader,\n  MemoryCache,\n  fsResolver,\n  fetchResolver,\n  Resolver\n} from "remix-image/server";\n\nexport const myResolver: Resolver = async (asset, url, options, basePath) => {\n  if (asset.startsWith("/") && (asset.length === 1 || asset[1] !== "/")) {\n    return fsResolver(asset, url, options, basePath);\n  } else {\n    return fetchResolver(asset, url, options, basePath);\n  }\n};\n\nconst config = {\n  selfUrl: "http://localhost:3000",\n  cache: new MemoryCache(),\n  resolver: myResolver,\n};\n\nexport const loader: LoaderFunction = ({ request }) => {\n  return imageLoader(config, request);\n};\n')),(0,o.kt)("h2",{id:"cloudflare--platforms-without-file-system-access"},"Cloudflare / Platforms Without File-System Access"),(0,o.kt)("p",null,"Some platforms like Cloudflare Workers do not support file-systems and Node packages.\nIn this case, several options need to be provided to the loader config, so take a look at ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tutorial-extras/cloudflare"},"these docs")),"."))}d.isMDXComponent=!0}}]);