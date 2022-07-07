(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{131:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return u})),o.d(t,"default",(function(){return l}));var n=o(3),i=o(8),r=(o(0),o(162)),a=["components"],p={id:"position",title:"Position"},c={unversionedId:"demos/uniswapv3/queries/position",id:"demos/uniswapv3/queries/position",isDocsHomePage:!1,title:"Position",description:"createPosition",source:"@site/docs/demos/uniswapv3/queries/position.md",slug:"/demos/uniswapv3/queries/position",permalink:"/demos/uniswapv3/queries/position",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv3/queries/position.md",version:"current",sidebar:"docs",previous:{title:"Trade",permalink:"/demos/uniswapv3/queries/trade"},next:{title:"Router",permalink:"/demos/uniswapv3/queries/router"}},u=[{value:"createPosition",id:"createposition",children:[]},{value:"createPositionFromAmounts",id:"createpositionfromamounts",children:[]},{value:"createPositionFromAmount0",id:"createpositionfromamount0",children:[]},{value:"createPositionFromAmount1",id:"createpositionfromamount1",children:[]},{value:"positionToken0PriceLower",id:"positiontoken0pricelower",children:[]},{value:"positionToken0PriceUpper",id:"positiontoken0priceupper",children:[]},{value:"positionAmount0",id:"positionamount0",children:[]},{value:"positionAmount1",id:"positionamount1",children:[]},{value:"mintAmounts",id:"mintamounts",children:[]},{value:"mintAmountsWithSlippage",id:"mintamountswithslippage",children:[]},{value:"burnAmountsWithSlippage",id:"burnamountswithslippage",children:[]}],s={toc:u};function l(e){var t=e.components,o=Object(i.a)(e,a);return Object(r.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"createposition"},"createPosition"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Constructs and validates a liquidity Position for a given Pool with the given liquidity")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"createPosition(\n  pool: Pool! # For which pool the liquidity is assigned\n  tickLower: Int32! # The lower tick of the position\n  tickUpper: Int32! # The upper tick of the position\n  liquidity: BigInt! # The amount of liquidity that is in the position\n): Position!\n")),Object(r.b)("h3",{id:"createpositionfromamounts"},"createPositionFromAmounts"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Computes the maximum amount of liquidity received for a given amount of token0, token1, and the prices at the tick boundaries")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"createPositionFromAmounts(\n  pool: Pool! # The pool for which the position should be created\n  tickLower: Int32! # The lower tick of the position\n  tickUpper: Int32! # The upper tick of the position\n  amount0: BigInt! # The amount of the first token of the pool\n  amount1: BigInt! # The amount of the second token of the pool\n  useFullPrecision: Boolean! # If false, liquidity will be maximized according to what the router can calculate, not what core can theoretically support\n): Position!\n")),Object(r.b)("h3",{id:"createpositionfromamount0"},"createPositionFromAmount0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Computes a position with the maximum amount of liquidity received for a given amount of token0, assuming an unlimited amount of token1")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"createPositionFromAmount0(\n  pool: Pool! # The pool for which the position should be created\n  tickLower: Int32! # The lower tick of the position\n  tickUpper: Int32! # The upper tick of the position\n  amount0: BigInt! # The desired amount of token0\n  useFullPrecision: Boolean! # If false, liquidity will be maximized according to what the router can calculate, not what core can theoretically support\n): Position!\n")),Object(r.b)("h3",{id:"createpositionfromamount1"},"createPositionFromAmount1"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Computes a position with the maximum amount of liquidity received for a given amount of token1, assuming an unlimited amount of token0. Always uses full precision.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"createPositionFromAmount1(\n  pool: Pool! # The pool for which the position should be created\n  tickLower: Int32! # The lower tick of the position\n  tickUpper: Int32! # The upper tick of the position\n  amount1: BigInt! # The desired amount of token1\n): Position!\n")),Object(r.b)("h3",{id:"positiontoken0pricelower"},"positionToken0PriceLower"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns the price of token0 at the lower tick")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"positionToken0PriceLower(\n  pool: Pool! # The pool for which the liquidity is assigned\n  tickLower: Int32! # The lower tick of the position\n): Price!\n")),Object(r.b)("h3",{id:"positiontoken0priceupper"},"positionToken0PriceUpper"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns the price of token0 at the upper tick")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"positionToken0PriceUpper(\n  pool: Pool! # The pool for which the liquidity is assigned\n  tickUpper: Int32! # The upper tick of the position\n): Price!\n")),Object(r.b)("h3",{id:"positionamount0"},"positionAmount0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns the amount of token0 that this position's liquidity could be burned for at the current pool price")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"positionAmount0(\n  pool: Pool! # For which pool the liquidity is assigned\n  tickLower: Int32! # The lower tick of the position\n  tickUpper: Int32! # The upper tick of the position\n  liquidity: BigInt! # The amount of liquidity that is in the position\n): TokenAmount!\n")),Object(r.b)("h3",{id:"positionamount1"},"positionAmount1"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns the amount of token1 that this position's liquidity could be burned for at the current pool price")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"positionAmount1(\n  pool: Pool! # For which pool the liquidity is assigned\n  tickLower: Int32! # The lower tick of the position\n  tickUpper: Int32! # The upper tick of the position\n  liquidity: BigInt! # The amount of liquidity that is in the position\n): TokenAmount!\n")),Object(r.b)("h3",{id:"mintamounts"},"mintAmounts"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns the minimum amounts that must be sent in order to mint the amount of liquidity held by the position at the current price for the pool")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"mintAmounts(\n  pool: Pool! # For which pool the liquidity is assigned\n  tickLower: Int32! # The lower tick of the position\n  tickUpper: Int32! # The upper tick of the position\n  liquidity: BigInt! # The amount of liquidity that is in the position\n): MintAmounts!\n")),Object(r.b)("h3",{id:"mintamountswithslippage"},"mintAmountsWithSlippage"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns the minimum amounts that must be sent in order to safely mint the amount of liquidity held by the position with the given slippage tolerance")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"mintAmountsWithSlippage(\n  position: Position! # Position for which to calculate mint amounts\n  slippageTolerance: String! # Tolerance of unfavorable slippage from the current price\n): MintAmounts!\n")),Object(r.b)("h3",{id:"burnamountswithslippage"},"burnAmountsWithSlippage"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Returns the minimum amounts that should be requested in order to safely burn the amount of liquidity held by the position with the given slippage tolerance")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"burnAmountsWithSlippage(\n  position: Position! # Position for which to calculate burn amounts\n  slippageTolerance: String! # Tolerance of unfavorable slippage from the current price\n): MintAmounts!\n")))}l.isMDXComponent=!0},162:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return b}));var n=o(0),i=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},l=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(o),h=n,b=l["".concat(a,".").concat(h)]||l[h]||m[h]||r;return o?i.a.createElement(b,p(p({ref:t},u),{},{components:o})):i.a.createElement(b,p({ref:t},u))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var u=2;u<r;u++)a[u]=o[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);