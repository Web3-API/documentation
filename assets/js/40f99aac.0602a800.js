"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[3628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={id:"plugin-architecture",title:"Plugin Architecture"},l=void 0,o={unversionedId:"tutorials/create-plugin-wrappers/plugin-architecture",id:"tutorials/create-plugin-wrappers/plugin-architecture",title:"Plugin Architecture",description:"The architecture of a plugin wrapper's code is flexible.",source:"@site/docs/tutorials/create-plugin-wrappers/plugin-architecture.md",sourceDirName:"tutorials/create-plugin-wrappers",slug:"/tutorials/create-plugin-wrappers/plugin-architecture",permalink:"/tutorials/create-plugin-wrappers/plugin-architecture",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-plugin-wrappers/plugin-architecture.md",tags:[],version:"current",frontMatter:{id:"plugin-architecture",title:"Plugin Architecture"},sidebar:"docs",previous:{title:"Configure a Plugin Manifest",permalink:"/tutorials/create-plugin-wrappers/plugin-manifest"},next:{title:"Configure interfaces in the client",permalink:"/tutorials/interfaces/client-config-interfaces"}},p={},u=[{value:"Required Exports",id:"required-exports",level:2},{value:"TypeScript Support",id:"typescript-support",level:2},{value:"Example",id:"example",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The architecture of a plugin wrapper's code is flexible.\nStill, there are some simple requirements and best practices that may guide its code structure."),(0,a.kt)("h2",{id:"required-exports"},"Required Exports"),(0,a.kt)("p",null,"A plugin must export a ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginFactory")," to be used by the Polywrap Client.\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginFactory")," is a function that returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginPackageManifest")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"factory")," method that generates an instance of the plugin."),(0,a.kt)("h2",{id:"typescript-support"},"TypeScript Support"),(0,a.kt)("p",null,"The Polywrap CLI's ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/codegen"},(0,a.kt)("inlineCode",{parentName:"a"},"codegen"))," and ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/build"},(0,a.kt)("inlineCode",{parentName:"a"},"build"))," commands will generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap")," folder containing useful types.\nThe generated types will save you time and energy.\nYou won't have to manually create or update your types every time you change your schema, and your code will have fewer bugs.\nYou can forget about boilerplate code and focus on your plugin's logic.\nWhile the types are not strictly required, we recommend them as a best practice."),(0,a.kt)("p",null,"The generated types include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Module")," - An interface containing the methods declared in the plugin's schema"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Args_*")," - An interface for each method, containing the method arguments declared in the schema"),(0,a.kt)("li",{parentName:"ul"},"Custom Types - An interface for each custom type declared in the schema"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manifest")," - A ",(0,a.kt)("inlineCode",{parentName:"li"},"PluginPackageManifest")," for the plugin (also useful for JavaScript developers!)")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example: plugin template',title:'"Example:',plugin:!0,template:!0},'import { Module, Args_sampleMethod, manifest } from "./wrap"; // imports from generated "wrap" folder\n\nimport { PluginFactory } from "@polywrap/core-js"; // plugin must export a PluginFactory\n\nexport interface SamplePluginConfig {\n  defaultValue: string;\n}\n\nexport class SamplePlugin extends Module<SamplePluginConfig> { // Plugin inherits from Module\n  constructor(config: SamplePluginConfig) {\n    super(config);\n  }\n  public sampleMethod(args: Args_sampleMethod): string { // Plugin method accepts Args_* as sole argument\n    return args.data + this.config.defaultValue;\n  }\n}\n\nexport const samplePlugin: PluginFactory<SamplePluginConfig> = ( // exported PluginFactory is used by Polywrap client\n  config: SamplePluginConfig\n) => {\n  return {\n    factory: () => new SamplePlugin(config), // factory method produces a Module\n    manifest, // imported from ./wrap\n  };\n};\n\nexport const plugin = samplePlugin; // PluginFactory is exported with name "plugin"\n')))}m.isMDXComponent=!0}}]);