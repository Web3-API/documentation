(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=(r(0),r(195));const a={id:"route",title:"Route"},u={unversionedId:"demos/uniswapv2/queries/route",id:"demos/uniswapv2/queries/route",isDocsHomePage:!1,title:"Route",description:"Imported types",source:"@site/docs/demos/uniswapv2/queries/route.md",slug:"/demos/uniswapv2/queries/route",permalink:"/demos/uniswapv2/queries/route",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv2/queries/route.md",version:"current"},c=[{value:"Imported types",id:"imported-types",children:[{value:"Token",id:"token",children:[]}]},{value:"Query schemas",id:"query-schemas",children:[{value:"createRoute",id:"createroute",children:[]},{value:"routePath",id:"routepath",children:[]},{value:"routeMidPrice",id:"routemidprice",children:[]}]}],i={toc:c};function p(e){let{components:t,...r}=e;return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"imported-types"},"Imported types"),Object(o.b)("h3",{id:"token"},Object(o.b)("a",{parentName:"h3",href:"../common-types#token"},"Token")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type Token {\n  chainId: ChainId!\n  address: String!\n  currency: Currency!\n}\n")),Object(o.b)("h2",{id:"query-schemas"},"Query schemas"),Object(o.b)("h3",{id:"createroute"},"createRoute"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Creates a route.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"  createRoute(\n    pairs: [Pair!]!\n    input: Token!\n    output: Token\n  ): Route!\n")),Object(o.b)("h3",{id:"routepath"},"routePath"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns the full path from input token to output token.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"  routePath(\n    pairs: [Pair!]!\n    input: Token!\n  ): [Token!]!\n")),Object(o.b)("h3",{id:"routemidprice"},"routeMidPrice"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Helper function for use in routeMidPrice and trade query functions.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"  routeMidPrice(\n    route: Route!\n  ): String!\n")))}p.isMDXComponent=!0},195:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),b=n,m=s["".concat(u,".").concat(b)]||s[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var p=2;p<a;p++)u[p]=r[p];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);