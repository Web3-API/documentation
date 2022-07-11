(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),c=(n(0),n(164)),i=["components"],o={id:"create-client-instance",title:"Creating the Polywrap client instance"},l={unversionedId:"quick-start/create-js-app/create-client-instance",id:"quick-start/create-js-app/create-client-instance",isDocsHomePage:!1,title:"Creating the Polywrap client instance",description:"Once the Polywrap JS client has been installed, the next step is to create a PolywrapClient instance:",source:"@site/docs/quick-start/create-js-app/create-client-instance.md",slug:"/quick-start/create-js-app/create-client-instance",permalink:"/quick-start/create-js-app/create-client-instance",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/create-js-app/create-client-instance.md",version:"current",sidebar:"docs",previous:{title:"Installing the Polywrap JS client",permalink:"/quick-start/create-js-app/install-client"},next:{title:"React integration",permalink:"/quick-start/create-js-app/react-integration"}},p=[],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Once the Polywrap JS client has been installed, the next step is to create a ",Object(c.b)("inlineCode",{parentName:"p"},"PolywrapClient")," instance:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},'import { PolywrapClient } from "@polywrap/client-js";\n\nconst client = new PolywrapClient();\n')),Object(c.b)("p",null,'At this point, you can already invoke wrappers. In the simple example below, we send one to the "hello world" wrapper.'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},'client.invoke({\n  uri: "ens/rinkeby/helloworld.dev.polywrap.eth",\n  method: "logMessage",\n  args: {\n    message: "Hello World!"\n  }\n});\n')))}u.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||y[b]||c;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);