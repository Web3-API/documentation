(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{195:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return r?o.a.createElement(m,s(s({ref:t},p),{},{components:r})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=(r(0),r(195));const i={id:"poolUtils",title:"Pool Utilities"},a={unversionedId:"demos/uniswapv3/queries/poolUtils",id:"demos/uniswapv3/queries/poolUtils",isDocsHomePage:!1,title:"Pool Utilities",description:"computePoolAddress",source:"@site/docs/demos/uniswapv3/queries/poolUtils.md",slug:"/demos/uniswapv3/queries/poolUtils",permalink:"/demos/uniswapv3/queries/poolUtils",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv3/queries/poolUtils.md",version:"current"},s=[{value:"computePoolAddress",id:"computepooladdress",children:[]}],c={toc:s};function p(e){let{components:t,...r}=e;return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"computepooladdress"},"computePoolAddress"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Computes a pool address")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"computePoolAddress(\n  factoryAddress: String! # The Uniswap V3 factory address\n  tokenA: Token! # The first token of the pool, irrespective of sort order\n  tokenB: Token! # The second token of the pool, irrespective of sort order\n  fee: FeeAmount! # The fee tier of the pool\n  initCodeHashManualOverride: String # Override the init code hash used to compute the pool address if necessary\n): String!\n")))}p.isMDXComponent=!0}}]);