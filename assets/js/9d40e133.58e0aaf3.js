"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[9455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={id:"interface-instances",title:"Interface instances"},o=void 0,c={unversionedId:"tutorials/interfaces/interface-instances",id:"tutorials/interfaces/interface-instances",title:"Interface instances",description:"Interface modules can be instantiated in a Wasm wrapper, agnostic to any concrete implementation.",source:"@site/docs/tutorials/interfaces/interface-instances.md",sourceDirName:"tutorials/interfaces",slug:"/tutorials/interfaces/interface-instances",permalink:"/tutorials/interfaces/interface-instances",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/interfaces/interface-instances.md",tags:[],version:"current",frontMatter:{id:"interface-instances",title:"Interface instances"},sidebar:"docs",previous:{title:"Define and implement interfaces",permalink:"/tutorials/interfaces/define-implement-interfaces"},next:{title:"Running Workflows",permalink:"/tutorials/workflows/running-workflows"}},s={},l=[{value:"Instantiating an interface",id:"instantiating-an-interface",level:2},{value:"Getting Interface Implementations",id:"getting-interface-implementations",level:2},{value:"Declaring getImplementations",id:"declaring-getimplementations",level:3},{value:"Using getImplementations",id:"using-getimplementations",level:3}],p={toc:l},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Interface modules can be instantiated in a Wasm wrapper, agnostic to any concrete implementation."),(0,r.kt)("h2",{id:"instantiating-an-interface"},"Instantiating an interface"),(0,r.kt)("p",null,"After an interface is imported in your ",(0,r.kt)("a",{parentName:"p",href:"../wrapper-schema"},"Wrapper Schema"),", you can update the generated classes with the\nPolywrap CLI's ",(0,r.kt)("a",{parentName:"p",href:"../../reference/cli/commands/codegen"},(0,r.kt)("inlineCode",{parentName:"a"},"codegen"))," command.\nYou will then be able to import the interface module in your wrapper."),(0,r.kt)("p",null,"To instantiate an interface module, you must provide a URI that resolves to a wrapper that implements the interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { MyInterface_Module, Args_foo } from "./wrap";\n\nexport function foo(args: Args_foo): boolean {\n  const instance = new MyInterface_Module("wrap://...");\n  ...\n}\n')),(0,r.kt)("h2",{id:"getting-interface-implementations"},"Getting Interface Implementations"),(0,r.kt)("p",null,"To instantiate an interface agnostic to the implementation,\nyou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"getImplementations")," to obtain a list of interface implementations registered in the Polywrap Client."),(0,r.kt)("h3",{id:"declaring-getimplementations"},"Declaring getImplementations"),(0,r.kt)("p",null,"In addition to importing the interface module in the ",(0,r.kt)("a",{parentName:"p",href:"../wrapper-schema"},"Wrapper Schema"),",\nyou must declare that ",(0,r.kt)("inlineCode",{parentName:"p"},"getImplementations")," will be used for the interface with the ",(0,r.kt)("inlineCode",{parentName:"p"},"use { getImplementations }")," keywords."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'#import { Module } into MyInterface from "wrap://ens/interface.eth"\n#use { getImplementations } for MyInterface\n')),(0,r.kt)("h3",{id:"using-getimplementations"},"Using getImplementations"),(0,r.kt)("p",null,"Now you can import the interface namespace and call its ",(0,r.kt)("inlineCode",{parentName:"p"},"getImplementations")," method.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"getImplementations")," method returns an array of URI strings that can be used to instantiate the interface module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { MyInterface, MyInterface_Module, Args_foo } from "./wrap";\n\nexport function foo(args: Args_foo): boolean {\n  const impls = MyInterface.getImplementations();\n  if (impls.length < 1) {\n    throw new Error("...")\n  }\n  const instance = new MyInterface_Module(impls[0]);\n...\n}\n')))}f.isMDXComponent=!0}}]);