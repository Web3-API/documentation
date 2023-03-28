(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=(r(0),r(194));const i={id:"get-wrapper-metadata",title:"Get Wrapper Metadata"},o={unversionedId:"tutorials/integrate-wrappers/get-wrapper-metadata",id:"tutorials/integrate-wrappers/get-wrapper-metadata",isDocsHomePage:!1,title:"Get Wrapper Metadata",description:"Some application developers may be interested adding or retrieving wrapper metadata.",source:"@site/docs/tutorials/integrate-wrappers/get-wrapper-metadata.md",slug:"/tutorials/integrate-wrappers/get-wrapper-metadata",permalink:"/tutorials/integrate-wrappers/get-wrapper-metadata",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/integrate-wrappers/get-wrapper-metadata.md",version:"current",sidebar:"docs",previous:{title:"React integration",permalink:"/tutorials/integrate-wrappers/react-integration"},next:{title:"Project setup",permalink:"/tutorials/create-wasm-wrappers/tutorial/project-setup"}},p=[],c={toc:p};function s(e){let{components:t,...r}=e;return Object(n.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Some application developers may be interested adding or retrieving wrapper metadata.\nWrapper developers can add metadata to their wrappers by writing a Meta Manifest file.\nApplication developers can obtain the Meta Manifest as an object or class in the client's native language."),Object(n.b)("p",null,"More information about the contents of the Meta Manifest can be found in ",Object(n.b)("a",{parentName:"p",href:"../create-wasm-wrappers/add-metadata"},"Add Metadata"),"."),Object(n.b)("p",null,"The client's ",Object(n.b)("inlineCode",{parentName:"p"},"getFile")," method can be used to retrieve a file from a wrapper. It uses the wrapper URI as the root path."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},'const result = await client.getFile(uri, { path: "./polywrap.meta.json", encoding: "utf-8" });\nif (!result.ok) return undefined;\nconst manifest: MetaManifest = JSON.parse(result.value as string);\n')),Object(n.b)("p",null,"To obtain icons from paths listed in a wrapper's Meta Manifest, use ",Object(n.b)("inlineCode",{parentName:"p"},"getFile")," again.\nThe return type of ",Object(n.b)("inlineCode",{parentName:"p"},"getFile")," will be a string if the ",Object(n.b)("inlineCode",{parentName:"p"},"encoding")," option is used, and an ArrayBuffer otherwise."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-typescript"},'const isBuffer = await client.getFile(uri, { path: manifest.icon });\nconst isString = await client.getFile(uri, { path: manifest.icon, encoding: "utf-8" });\n')),Object(n.b)("p",null,"We wrote a React app to demo fetching and displaying wrapper metadata.\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/polywrap/demos/tree/main/fetch-metadata"},"You can view the source code here"),"."))}s.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return r?n.a.createElement(f,p(p({ref:t},s),{},{components:r})):n.a.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);