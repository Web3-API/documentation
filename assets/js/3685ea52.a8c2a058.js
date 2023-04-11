"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[9882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"interface-wraps",title:"Interface Wraps"},o=void 0,p={unversionedId:"concepts/interface-wraps",id:"concepts/interface-wraps",title:"Interface Wraps",description:"An Interface Wrap (or Wrap Interface), unlike a WASM Wrap, consists only of an ABI. Wrap Interfaces are still Wraps in the sense that they have are identified by a URI.",source:"@site/docs/concepts/interface-wraps.md",sourceDirName:"concepts",slug:"/concepts/interface-wraps",permalink:"/concepts/interface-wraps",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/concepts/interface-wraps.md",tags:[],version:"current",frontMatter:{id:"interface-wraps",title:"Interface Wraps"},sidebar:"docs",previous:{title:"Plugin Wraps",permalink:"/concepts/plugin-wraps"},next:{title:"WRAP Standard",permalink:"/concepts/wrap-standard"}},c={},s=[],l={toc:s},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An Interface Wrap (or Wrap Interface), unlike a WASM Wrap, consists only of an ",(0,a.kt)("a",{parentName:"p",href:"./abi"},"ABI"),". Wrap Interfaces are still Wraps in the sense that they have are identified by a ",(0,a.kt)("a",{parentName:"p",href:"./uris"},"URI"),"."),(0,a.kt)("p",null,"Consisting only of an ABI, an Interface Wrap cannot be ",(0,a.kt)("a",{parentName:"p",href:"./invoke"},"invoked"),". Instead, it is used as an interface that can be implemented by multiple different Wraps. These Wraps can then be registered within the ",(0,a.kt)("a",{parentName:"p",href:"./client"},"Client")," as Interface Implementations. During Invocation, you can invoke the method of an Interface, and if there is an Interface Implementation for the URI, the Wrap implementing the interface will be resolved during URI resolution and the implementing Wrap's method will be invoked."),(0,a.kt)("p",null,"This is mostly used to ensure that, accross different Clients, their Plugin Wraps adhere to the same Interface Wraps."),(0,a.kt)("p",null,"For example, all ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," Plugins need to have ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," methods with specific signatures and clearly defined ",(0,a.kt)("inlineCode",{parentName:"p"},"Request")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," type structures."))}u.isMDXComponent=!0}}]);