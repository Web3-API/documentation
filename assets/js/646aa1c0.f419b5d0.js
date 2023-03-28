(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(194));const a={id:"wasm",title:"WASM"},i={unversionedId:"concepts/wasm",id:"concepts/wasm",isDocsHomePage:!1,title:"WASM",description:"WASM (WebAssembly) is a binary instruction format designed to provide a portable and efficient target for the compilation of high-level programming languages such as C, C++, Rust, and others. It is a low-level, virtual machine-based format that is designed to be executed in web browsers, but can also be used in other contexts.",source:"@site/docs/concepts/wasm.md",slug:"/concepts/wasm",permalink:"/concepts/wasm",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/concepts/wasm.md",version:"current",sidebar:"docs",previous:{title:"WRAP Standards",permalink:"/concepts/wrap-standards"},next:{title:"ABI",permalink:"/concepts/abi"}},c=[],s={toc:c};function l(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"WASM (WebAssembly) is a binary instruction format designed to provide a portable and efficient target for the compilation of high-level programming languages such as C, C++, Rust, and others. It is a low-level, virtual machine-based format that is designed to be executed in web browsers, but can also be used in other contexts."),Object(o.b)("p",null,"WASM allows web developers to write web applications in languages other than JavaScript, while still being able to execute them in the browser. This provides a number of benefits, including better performance, improved security, and the ability to reuse existing code."),Object(o.b)("p",null,"In the context of Polywrap, WASM is used as the underlying technology to provide a secure, portable and efficient way to run Wraps. Polywrap loads and executs Wraps written in WASM, providing a sandboxed environment that ensures that the Wraps cannot interfere with the host application or other Wraps."))}l.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);