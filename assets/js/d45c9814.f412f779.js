(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(194));const o={id:"invoke",title:"Invoke"},c={unversionedId:"concepts/invoke",id:"concepts/invoke",isDocsHomePage:!1,title:"Invoke",description:'The term "invoke" (or "invocation") refers to the act of executing a method exposed by a Wrap. This can be done by using a client library that supports the WRAP Standard.',source:"@site/docs/concepts/invoke.md",slug:"/concepts/invoke",permalink:"/concepts/invoke",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/concepts/invoke.md",version:"current",sidebar:"docs",previous:{title:"Client",permalink:"/concepts/client"},next:{title:"Envs",permalink:"/concepts/envs"}},i=[],p={toc:i};function l(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'The term "invoke" (or "invocation") refers to the act of executing a method exposed by a ',Object(a.b)("a",{parentName:"p",href:"./wraps"},"Wrap"),". This can be done by using a client library that supports the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polywrap/specification/blob/main/standards/00_WRAP.md"},"WRAP Standard"),"."),Object(a.b)("p",null,'Essentially, "Invoke" refers to any call to a method exposed by a Wrap, be it a ',Object(a.b)("a",{parentName:"p",href:"./wasm-wraps"},"WASM Wrap"),", a ",Object(a.b)("a",{parentName:"p",href:"./plugin-wraps"},"Plugin Wrap")," or an ",Object(a.b)("a",{parentName:"p",href:"./interface-wraps"},"Interface Wrap"),", by a ",Object(a.b)("a",{parentName:"p",href:"./wrap-standards"},"WRAP-compliant")," client such as the ",Object(a.b)("a",{parentName:"p",href:"/reference/clients/js/client-js"},"Polywrap Client"),"."),Object(a.b)("p",null,"Any WRAP-compatible client can perform an Invocation with the following information:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the ",Object(a.b)("a",{parentName:"li",href:"./uris"},"WRAP URI")," of the Wrap being invoked"),Object(a.b)("li",{parentName:"ul"},"the name of the method being invoked"),Object(a.b)("li",{parentName:"ul"},"the method arguments")),Object(a.b)("p",null,"For more information, refer to the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polywrap/specification/blob/main/standards/02_Invocation.md"},"Invocation standard"),"."))}l.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);