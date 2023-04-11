"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[4290],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),y=a,m=c["".concat(i,".").concat(y)]||c[y]||d[y]||o;return t?n.createElement(m,p(p({ref:r},u),{},{components:t})):n.createElement(m,p({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=y;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[c]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},860:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={id:"react-integration",title:"React integration"},p=void 0,l={unversionedId:"tutorials/integrate-wrappers/react-integration",id:"tutorials/integrate-wrappers/react-integration",title:"React integration",description:"To use the Polywrap React integration, you'll need to install the @polywrap/react package.",source:"@site/docs/tutorials/integrate-wrappers/react-integration.md",sourceDirName:"tutorials/integrate-wrappers",slug:"/tutorials/integrate-wrappers/react-integration",permalink:"/tutorials/integrate-wrappers/react-integration",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/integrate-wrappers/react-integration.md",tags:[],version:"current",frontMatter:{id:"react-integration",title:"React integration"},sidebar:"docs",previous:{title:"Generate types for your app",permalink:"/tutorials/integrate-wrappers/types-for-app"},next:{title:"Get Wrapper Metadata",permalink:"/tutorials/integrate-wrappers/get-wrapper-metadata"}},i={},s=[{value:"<strong>PolywrapProvider</strong>",id:"polywrapprovider",level:3},{value:"<strong>PolywrapProvider Props</strong>",id:"polywrapprovider-props",level:4},{value:"<strong>Multiple PolywrapProviders</strong>",id:"multiple-polywrapproviders",level:4},{value:"<strong>usePolywrapClient</strong>",id:"usepolywrapclient",level:3},{value:"<strong>usePolywrapInvoke</strong>",id:"usepolywrapinvoke",level:3},{value:"<strong>usePolywrapQuery</strong>",id:"usepolywrapquery",level:3}],u={toc:s},c="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use the Polywrap React integration, you'll need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@polywrap/react")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @polywrap/react\n")),(0,a.kt)("p",null,"An example React application can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/demos/tree/main/hello-world/app/react.js"},"here"),"."),(0,a.kt)("h3",{id:"polywrapprovider"},(0,a.kt)("strong",{parentName:"h3"},"PolywrapProvider")),(0,a.kt)("p",null,"Once installed, the first step is to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"PolywrapProvider")," to your DOM. This will instantiate an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PolywrapClient")," for all queries within the nested DOM hierarchy to use."),(0,a.kt)("p",null,"To use the provider, simply wrap it around whatever DOM hierarchy you'd like to use Polywrap within:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { PolywrapProvider } from '@polywrap/react';\n\nexport const App: React.FC = () => {\n  return (\n    <PolywrapProvider>\n        <HelloWorld />\n    </PolywrapProvider>\n  );\n};\n")),(0,a.kt)("h4",{id:"polywrapprovider-props"},(0,a.kt)("strong",{parentName:"h4"},"PolywrapProvider Props")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PolywrapProvider")," component's props are the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"PolywrapClient")," constructor's arguments. For example, you can configure URI redirects like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<PolywrapProvider redirects={ [] }/>\n")),(0,a.kt)("h4",{id:"multiple-polywrapproviders"},(0,a.kt)("strong",{parentName:"h4"},"Multiple PolywrapProviders")),(0,a.kt)("p",null,"If you need to use multiple providers, you can do so using the ",(0,a.kt)("inlineCode",{parentName:"p"},'createPolywrapProvider("...")')," method, which accepts the name of your provider as an argument. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createPolywrapProvider } from '@polywrap/react';\n\nconst CustomPolywrapProvider = createPolywrapProvider('custom');\n\nexport const CustomProvider = ({ children }: { children: JSX.Element }) => {\n  return (\n    <CustomPolywrapProvider>\n      {children}\n    </CustomPolywrapProvider>\n  );\n};\n")),(0,a.kt)("h3",{id:"usepolywrapclient"},(0,a.kt)("strong",{parentName:"h3"},"usePolywrapClient")),(0,a.kt)("p",null,"You can obtain a copy of the client instance from your ",(0,a.kt)("inlineCode",{parentName:"p"},"PolywrapProvider")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePolywrapClient")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const client = usePolywrapClient();\n")),(0,a.kt)("h3",{id:"usepolywrapinvoke"},(0,a.kt)("strong",{parentName:"h3"},"usePolywrapInvoke")),(0,a.kt)("p",null,"After enabling your React application with the PolywrapProvider, you may now use the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePolywrapInvoke")," hook to call into wrappers!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const { execute, data, error, loading } = usePolywrapInvoke({\n  uri: \'ens/helloworld.polytest.eth\',\n  method: "logMessage",\n  args: {\n    message: "Hello World!",\n  },\n});\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePolywrapInvoke")," hook uses the first PolywrapProvider found in the DOM's hierarchy. If you'd like to specify a specific provider to be used, simply set the ",(0,a.kt)("inlineCode",{parentName:"p"},"provider:")," property:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const { execute, data, error, loading } = usePolywrapInvoke({\n  provider: "custom",\n  uri: \'ens/helloworld.polytest.eth\',\n  method: "logMessage",\n  args: {\n    message: "Hello World!",\n  },\n});\n'))),(0,a.kt)("h3",{id:"usepolywrapquery"},(0,a.kt)("strong",{parentName:"h3"},"usePolywrapQuery")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"usePolywrapQuery")," hook works the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePolywrapInvoke")," hook, but uses the client's ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," syntax instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const { execute, data, errors, loading } = usePolywrapQuery({\n  uri: 'ens/helloworld.polytest.eth',\n  query: `{\n    logMessage(message: \"Hello World!\")\n  }`,\n});\n")))}d.isMDXComponent=!0}}]);