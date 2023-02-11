(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),a=(t(0),t(195));const p={id:"swap",title:"Swap"},c={unversionedId:"demos/uniswapv2/mutations/swap",id:"demos/uniswapv2/mutations/swap",isDocsHomePage:!1,title:"Swap",description:"Imported types",source:"@site/docs/demos/uniswapv2/mutations/swap.md",slug:"/demos/uniswapv2/mutations/swap",permalink:"/demos/uniswapv2/mutations/swap",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv2/mutations/swap.md",version:"current"},i=[{value:"Imported types",id:"imported-types",children:[{value:"Token",id:"token",children:[]},{value:"TradeOptions",id:"tradeoptions",children:[]},{value:"TradeType",id:"tradetype",children:[]},{value:"TxOverrides",id:"txoverrides",children:[]},{value:"ChainId",id:"chainid",children:[]}]},{value:"Mutation schemas",id:"mutation-schemas",children:[{value:"swap",id:"swap",children:[]},{value:"exec",id:"exec",children:[]},{value:"execCall",id:"execcall",children:[]},{value:"approve",id:"approve",children:[]}]}],o={toc:i};function s(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"imported-types"},"Imported types"),Object(a.b)("h3",{id:"token"},Object(a.b)("a",{parentName:"h3",href:"../common-types#token"},"Token")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Token {\n  chainId: ChainId!\n  address: String!\n  currency: Currency!\n}\n")),Object(a.b)("h3",{id:"tradeoptions"},Object(a.b)("a",{parentName:"h3",href:"../common-types#tradeoptions"},"TradeOptions")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type TradeOptions {\n  allowedSlippage: String!\n  recipient: String!\n  unixTimestamp: UInt64!\n  ttl: UInt32\n  deadline: UInt32\n  feeOnTransfer: Boolean\n}\n")),Object(a.b)("h3",{id:"tradetype"},Object(a.b)("a",{parentName:"h3",href:"../common-types#trade-type"},"TradeType")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"enum TradeType {\n  EXACT_INPUT\n  EXACT_OUTPUT\n}\n")),Object(a.b)("h3",{id:"txoverrides"},Object(a.b)("a",{parentName:"h3",href:"../common-types#txoverrides"},"TxOverrides")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type TxOverrides {\n  gasPrice: BigInt\n  gasLimit: BigInt\n}\n")),Object(a.b)("h3",{id:"chainid"},Object(a.b)("a",{parentName:"h3",href:"../common-types#chainid"},"ChainId")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"enum ChainId {\n  MAINNET\n  ROPSTEN\n  RINKEBY\n  GOERLI\n  KOVAN\n}\n")),Object(a.b)("h2",{id:"mutation-schemas"},"Mutation schemas"),Object(a.b)("h3",{id:"swap"},"swap"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Select token in and token out and amount for the swap.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"  swap (\n    tokenIn: Token!\n    tokenOut: Token!\n    amount: BigInt!\n    tradeType: TradeType!\n    tradeOptions: TradeOptions!\n    txOverrides: TxOverrides\n  ): Ethereum_TxReceipt!\n")),Object(a.b)("h3",{id:"exec"},"exec"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Executes the trade.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"  exec(\n    trade: Trade!\n    tradeOptions: TradeOptions!\n    txOverrides: TxOverrides\n  ): Ethereum_TxReceipt!\n")),Object(a.b)("h3",{id:"execcall"},"execCall"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Executes swap given swap parameters and chain ID.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"  execCall(\n    parameters: SwapParameters!\n    chainId: ChainId!\n    txOverrides: TxOverrides\n  ): Ethereum_TxReceipt!\n")),Object(a.b)("h3",{id:"approve"},"approve"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Approves tokens in the swap.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"  approve(\n    token: Token!\n    amount: BigInt\n    txOverrides: TxOverrides\n  ): Ethereum_TxReceipt!\n")))}s.isMDXComponent=!0},195:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||p;return t?a.a.createElement(b,i(i({ref:n},s),{},{components:t})):a.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<p;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);