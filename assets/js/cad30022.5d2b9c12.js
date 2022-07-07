(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),c=(n(0),n(162)),o=["components"],i={id:"fetch",title:"Fetch"},p={unversionedId:"demos/uniswapv2/queries/fetch",id:"demos/uniswapv2/queries/fetch",isDocsHomePage:!1,title:"Fetch",description:"Imported types",source:"@site/docs/demos/uniswapv2/queries/fetch.md",slug:"/demos/uniswapv2/queries/fetch",permalink:"/demos/uniswapv2/queries/fetch",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv2/queries/fetch.md",version:"current",sidebar:"docs",previous:{title:"Trade",permalink:"/demos/uniswapv2/queries/trade"},next:{title:"Pair",permalink:"/demos/uniswapv2/queries/pair"}},u=[{value:"Imported types",id:"imported-types",children:[{value:"Token",id:"token",children:[]},{value:"TokenAmount",id:"tokenamount",children:[]},{value:"ChainId",id:"chainid",children:[]}]},{value:"Query schemas",id:"query-schemas",children:[{value:"fetchTokenData",id:"fetchtokendata",children:[]},{value:"fetchTotalSupply",id:"fetchtotalsupply",children:[]},{value:"fetchPairData",id:"fetchpairdata",children:[]}]}],l={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"imported-types"},"Imported types"),Object(c.b)("h3",{id:"token"},Object(c.b)("a",{parentName:"h3",href:"../common-types#token"},"Token")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"type Token {\n  chainId: ChainId!\n  address: String!\n  currency: Currency!\n}\n")),Object(c.b)("h3",{id:"tokenamount"},Object(c.b)("a",{parentName:"h3",href:"../common-types#tokenamount"},"TokenAmount")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"type TokenAmount {\n  token: Token!\n  amount: String! # UInt256!\n}\n")),Object(c.b)("h3",{id:"chainid"},Object(c.b)("a",{parentName:"h3",href:"../common-types#chainid"},"ChainId")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"enum ChainId {\n  MAINNET\n  ROPSTEN\n  RINKEBY\n  GOERLI\n  KOVAN\n}\n")),Object(c.b)("h2",{id:"query-schemas"},"Query schemas"),Object(c.b)("h3",{id:"fetchtokendata"},"fetchTokenData"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Fetches token data.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"  fetchTokenData(\n    chainId: ChainId!\n    address: String!\n    symbol: String\n    name: String\n  ): Token!\n")),Object(c.b)("h3",{id:"fetchtotalsupply"},"fetchTotalSupply"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Fetches total supply.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"  fetchTotalSupply(\n    token: Token!\n  ): TokenAmount!\n")),Object(c.b)("h3",{id:"fetchpairdata"},"fetchPairData"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Fetches pair data.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"  fetchPairData(\n    token0: Token!\n    token1: Token!\n  ): Pair!\n")))}s.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,b=s["".concat(o,".").concat(m)]||s[m]||d[m]||c;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);