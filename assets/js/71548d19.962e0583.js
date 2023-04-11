"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[4528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,y=u["".concat(c,".").concat(g)]||u[g]||f[g]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"plugin-wraps",title:"Plugin Wraps"},o=void 0,p={unversionedId:"concepts/plugin-wraps",id:"concepts/plugin-wraps",title:"Plugin Wraps",description:'Polywrap Plugins, or "Plugin Wraps", enable existing SDKs implemented in the client\'s language (e.g. JavaScript) to be queried as if they were WASM Wraps.',source:"@site/docs/concepts/plugin-wraps.md",sourceDirName:"concepts",slug:"/concepts/plugin-wraps",permalink:"/concepts/plugin-wraps",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/concepts/plugin-wraps.md",tags:[],version:"current",frontMatter:{id:"plugin-wraps",title:"Plugin Wraps"},sidebar:"docs",previous:{title:"WASM Wraps",permalink:"/concepts/wasm-wraps"},next:{title:"Interface Wraps",permalink:"/concepts/interface-wraps"}},c={},l=[],s={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Polywrap Plugins, or "Plugin Wraps", enable existing SDKs implemented in the client\'s language (e.g. JavaScript) to be queried as if they were WASM Wraps.'),(0,a.kt)("p",null,"Plugins can be used to enable any native client functionality that cannot be implemented in WebAssembly, such as sending HTTP requests, or signing blockchain transactions with a private key."),(0,a.kt)("p",null,"If you want to build your own Plugins, you can follow the ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/create-plugin-wrappers/create-js-plugin"},"Plugin an existing SDK")," guide."))}f.isMDXComponent=!0}}]);