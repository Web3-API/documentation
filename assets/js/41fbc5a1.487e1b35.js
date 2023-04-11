"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[1860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"call",title:"Call"},l=void 0,c={unversionedId:"demos/uniswapv3/mutations/call",id:"demos/uniswapv3/mutations/call",title:"Call",description:"approve",source:"@site/docs/demos/uniswapv3/mutations/call.md",sourceDirName:"demos/uniswapv3/mutations",slug:"/demos/uniswapv3/mutations/call",permalink:"/demos/uniswapv3/mutations/call",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv3/mutations/call.md",tags:[],version:"current",frontMatter:{id:"call",title:"Call"}},i={},p=[{value:"approve",id:"approve",level:3},{value:"execCall",id:"execcall",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"approve"},"approve"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Call the approve(...) function of an ERC20 token contract on-chain, allowing the Uniswap router contract to transfer tokens")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"approve(\n  token: Token! # Token for which to approve the Uniswap router contract to transfer\n  amount: BigInt # The amount to approve for transfer; defaults to maximum amount if null\n  gasOptions: GasOptions # Transaction gas configuration\n): Ethereum_TxResponse!\n")),(0,a.kt)("h3",{id:"execcall"},"execCall"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Send an Ethereum transaction to the given address")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"execCall(\n  parameters: MethodParameters! # Transaction calldata and Ether value\n  address: String! # Address of the target Ethereum contract\n  chainId: ChainId! # Id of the chain on which to execute the transaction\n  gasOptions: GasOptions # Transaction gas configuration\n): Ethereum_TxResponse!\n")))}m.isMDXComponent=!0}}]);