(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{195:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),r=(a(0),a(195));const i={id:"polywrap-vs-javascript-sdks",title:"Polywrap vs. JavaScript SDKs"},o={unversionedId:"concepts/polywrap-vs-javascript-sdks",id:"concepts/polywrap-vs-javascript-sdks",isDocsHomePage:!1,title:"Polywrap vs. JavaScript SDKs",description:"Polywrap is a substantial improvement over JavaScript SDKs and produces a seamless and intuitive Web3 protocol integration experience for blockchain developers.",source:"@site/docs/concepts/polywrap-vs-javascript-sdks.md",slug:"/concepts/polywrap-vs-javascript-sdks",permalink:"/concepts/polywrap-vs-javascript-sdks",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/concepts/polywrap-vs-javascript-sdks.md",version:"current",sidebar:"docs",previous:{title:"What is Polywrap?",permalink:"/concepts/what-is-polywrap"},next:{title:"Understanding URIs",permalink:"/concepts/understanding-uris"}},s=[],p={toc:s};function c(e){let{components:t,...a}=e;return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Polywrap is a substantial improvement over JavaScript SDKs and produces a seamless and intuitive Web3 protocol integration experience for blockchain developers."))),Object(r.b)("p",null,"The table below highlights the contrasts between JavaScript SDKs and Polywrap Wasm wrappers as it concerns compatibility & maintainability, ease of use, bundle size, and upgrades & patches."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"Category")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"Polywrap wrapper")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"JavaScript SDK")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Compatibility & Maintainability")),Object(r.b)("td",{parentName:"tr",align:null},"Wasm wrappers run in any environment, meaning you just need to program your SDK once -- saving you time."),Object(r.b)("td",{parentName:"tr",align:null},'JS-based SDKs require JS-based apps in order to run, thereby disincentivizing developers from building apps in other languages. Supporting new app "types" requires writing and maintaining a ',Object(r.b)("em",{parentName:"td"},"new")," SDK.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Easy of Use")),Object(r.b)("td",{parentName:"tr",align:null},"Developers interact with Polywrap through simple syntax, making them as easy to use as Web2 APIs like Twitter's."),Object(r.b)("td",{parentName:"tr",align:null},"Developers must learn how to instantiate classes, and call into the various methods and functions the JS SDK provides.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Security")),Object(r.b)("td",{parentName:"tr",align:null},"Wasm wrappers run within ",Object(r.b)("a",{parentName:"td",href:"https://webassembly.org/docs/security/"},"individual sandboxes"),", ensuring your integrations are isolated from your application. ",Object(r.b)("strong",{parentName:"td"},"Users are safer with Polywrap.")),Object(r.b)("td",{parentName:"tr",align:null},"JavaScript SDKs, and any other type of traditional SDK, execute unbounded within your application's memory. This means that the SDK, and all of its dependencies, have direct access to the user's data within your applications. ",Object(r.b)("a",{parentName:"td",href:"https://www.trendmicro.com/vinfo/au/security/news/cybercrime-and-digital-threats/hacker-infects-node-js-package-to-steal-from-bitcoin-wallets"},"This has lead to many hacks in the past"),", leaving users vulnerable and with a large loss of funds.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Bundle Size")),Object(r.b)("td",{parentName:"tr",align:null},"Wasm wrappers do not affect your app's bundle size, since Wasm ",Object(r.b)("strong",{parentName:"td"},"wrappers")," are downloaded at ",Object(r.b)("em",{parentName:"td"},"runtime")," from a decentralized endpoint like IPFS."),Object(r.b)("td",{parentName:"tr",align:null},"JavaScript SDKs are installed using ",Object(r.b)("inlineCode",{parentName:"td"},"npm"),", and embedded into your app's bundle, increasing the overall size of the application.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Upgrades & Patches")),Object(r.b)("td",{parentName:"tr",align:null},"Since Wasm wrappers are resolved at runtime, this allows for ",Object(r.b)("em",{parentName:"td"},"optional"),' automatic updates, in the event the app is invoking an updatable URI (such as an "ENS" domain).'),Object(r.b)("td",{parentName:"tr",align:null},"Since JS SDKs are bundled into applications, when new patches or features are released, the application must be rebuilt with the latest version. If breaking backend (smart contract) upgrades are performed, this would render the application broken until you rebuild with the latest SDK.")))))}c.isMDXComponent=!0}}]);