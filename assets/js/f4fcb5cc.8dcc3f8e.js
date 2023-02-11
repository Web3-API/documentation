(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(195));const i={id:"create-client-instance",title:"Creating the Polywrap client instance"},c={unversionedId:"quick-start/integrate-wrappers/create-client-instance",id:"quick-start/integrate-wrappers/create-client-instance",isDocsHomePage:!1,title:"Creating the Polywrap client instance",description:"Once the Polywrap JS client has been installed, the next step is to create a PolywrapClient instance:",source:"@site/docs/quick-start/integrate-wrappers/create-client-instance.md",slug:"/quick-start/integrate-wrappers/create-client-instance",permalink:"/quick-start/integrate-wrappers/create-client-instance",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/integrate-wrappers/create-client-instance.md",version:"current",sidebar:"docs",previous:{title:"Installing the Polywrap JS client",permalink:"/quick-start/integrate-wrappers/install-client"},next:{title:"Configure the Polywrap Client",permalink:"/quick-start/integrate-wrappers/configure-client"}},o=[],l={toc:o};function p(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Once the Polywrap JS client has been installed, the next step is to create a ",Object(a.b)("inlineCode",{parentName:"p"},"PolywrapClient")," instance:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { PolywrapClient } from "@polywrap/client-js";\n\nconst client = new PolywrapClient();\n')),Object(a.b)("p",null,'At this point, you can already invoke wrappers. In the simple example below, we send one to the "hello world" wrapper.'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'client.invoke({\n  uri: "ens/rinkeby/helloworld.dev.polywrap.eth",\n  method: "logMessage",\n  args: {\n    message: "Hello World!"\n  }\n});\n')))}p.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,d=u["".concat(c,".").concat(y)]||u[y]||f[y]||i;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);