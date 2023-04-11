"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[1718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7462),a=r(7294),l=r(6010),i=r(2466),u=r(6550),o=r(1980),s=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=m(e),[i,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,s]=f({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),h=(()=>{const e=o??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var h=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:u,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(p(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":u===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),l=r(4866),i=r(5162);const u={id:"plugin-manifest",title:"Configure a Plugin Manifest"},o=void 0,s={unversionedId:"tutorials/create-plugin-wrappers/plugin-manifest",id:"tutorials/create-plugin-wrappers/plugin-manifest",title:"Configure a Plugin Manifest",description:"Each plugin wrapper is orchestrated by a Plugin Manifest polywrap.plugin.yaml file.",source:"@site/docs/tutorials/create-plugin-wrappers/plugin-manifest.md",sourceDirName:"tutorials/create-plugin-wrappers",slug:"/tutorials/create-plugin-wrappers/plugin-manifest",permalink:"/tutorials/create-plugin-wrappers/plugin-manifest",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-plugin-wrappers/plugin-manifest.md",tags:[],version:"current",frontMatter:{id:"plugin-manifest",title:"Configure a Plugin Manifest"},sidebar:"docs",previous:{title:"Plugin an existing JS SDK",permalink:"/tutorials/create-plugin-wrappers/create-js-plugin"},next:{title:"Plugin Architecture",permalink:"/tutorials/create-plugin-wrappers/plugin-architecture"}},c={},p=[{value:"Content",id:"content",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each plugin wrapper is orchestrated by a Plugin Manifest ",(0,a.kt)("inlineCode",{parentName:"p"},"polywrap.plugin.yaml")," file.\nThe Plugin Manfiest provides the Polywrap CLI with basic information it needs to generate code bindings with the ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/codegen"},(0,a.kt)("inlineCode",{parentName:"a"},"codegen"))," command.\nA plugin wrapper does not need a Polywrap Manifest; the simpler Plugin Manifest is used in its place."),(0,a.kt)("h2",{id:"content"},"Content"),(0,a.kt)("p",null,"The Plugin Manifest contains the name of the plugin, programming language used to write the plugin,\nthe location of the plugin's entry file (i.e. the file that exports the plugin contents),\nand the GraphQl schema that declares the plugin's interface.\nIt can optionally contain an array of ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/understanding-uri-redirects"},"URI Redirects"),"."),(0,a.kt)(l.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"format: # The manifest format version\nname: # (Optional) Name of plugin\nlanguage: # Plugin programming language\nmodule: # Entry file \nschema: # Wrapper schema\nimport_redirects: # Array of URI redirects\n  - uri: # Source URI to be redirected\n    schema: # Path to schema of the module to which URI will be redirected\n"))),(0,a.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"format: 0.1.0\nname: MyPlugin\nlanguage: plugin/typescript\nmodule: ./src/index.ts\nschema: ./src/schema.graphql\nimport_redirects:\n  - uri: wrap://ens/imported-plugin.eth\n    schema: ./../local-plugin/schema.graphql\n")))))}f.isMDXComponent=!0}}]);