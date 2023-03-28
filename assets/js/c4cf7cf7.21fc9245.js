(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return c}));var n=r(3),a=(r(0),r(194));const o={id:"react-integration",title:"React integration"},p={unversionedId:"tutorials/integrate-wrappers/react-integration",id:"tutorials/integrate-wrappers/react-integration",isDocsHomePage:!1,title:"React integration",description:"To use the Polywrap React integration, you'll need to install the @polywrap/react package.",source:"@site/docs/tutorials/integrate-wrappers/react-integration.md",slug:"/tutorials/integrate-wrappers/react-integration",permalink:"/tutorials/integrate-wrappers/react-integration",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/integrate-wrappers/react-integration.md",version:"current",sidebar:"docs",previous:{title:"Generate types for your app",permalink:"/tutorials/integrate-wrappers/types-for-app"},next:{title:"Get Wrapper Metadata",permalink:"/tutorials/integrate-wrappers/get-wrapper-metadata"}},i=[{value:"<strong>PolywrapProvider</strong>",id:"polywrapprovider",children:[]},{value:"<strong>usePolywrapClient</strong>",id:"usepolywrapclient",children:[]},{value:"<strong>usePolywrapInvoke</strong>",id:"usepolywrapinvoke",children:[]},{value:"<strong>usePolywrapQuery</strong>",id:"usepolywrapquery",children:[]}],l={toc:i};function c(e){let{components:t,...r}=e;return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To use the Polywrap React integration, you'll need to install the ",Object(a.b)("inlineCode",{parentName:"p"},"@polywrap/react")," package."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save @polywrap/react\n")),Object(a.b)("p",null,"An example React application can be found ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polywrap/demos/tree/main/hello-world/app/react.js"},"here"),"."),Object(a.b)("h3",{id:"polywrapprovider"},Object(a.b)("strong",{parentName:"h3"},"PolywrapProvider")),Object(a.b)("p",null,"Once installed, the first step is to add the ",Object(a.b)("inlineCode",{parentName:"p"},"PolywrapProvider")," to your DOM. This will instantiate an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"PolywrapClient")," for all queries within the nested DOM hierarchy to use."),Object(a.b)("p",null,"To use the provider, simply wrap it around whatever DOM hierarchy you'd like to use Polywrap within:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { PolywrapProvider } from '@polywrap/react';\n\nexport const App: React.FC = () => {\n  return (\n    <PolywrapProvider>\n        <HelloWorld />\n    </PolywrapProvider>\n  );\n};\n")),Object(a.b)("h4",{id:"polywrapprovider-props"},Object(a.b)("strong",{parentName:"h4"},"PolywrapProvider Props")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"PolywrapProvider")," component's props are the same as the ",Object(a.b)("inlineCode",{parentName:"p"},"PolywrapClient")," constructor's arguments. For example, you can configure URI redirects like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"<PolywrapProvider redirects={ [] }/>\n")),Object(a.b)("h4",{id:"multiple-polywrapproviders"},Object(a.b)("strong",{parentName:"h4"},"Multiple PolywrapProviders")),Object(a.b)("p",null,"If you need to use multiple providers, you can do so using the ",Object(a.b)("inlineCode",{parentName:"p"},'createPolywrapProvider("...")')," method, which accepts the name of your provider as an argument. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { createPolywrapProvider } from '@polywrap/react';\n\nconst CustomPolywrapProvider = createPolywrapProvider('custom');\n\nexport const CustomProvider = ({ children }: { children: JSX.Element }) => {\n  return (\n    <CustomPolywrapProvider>\n      {children}\n    </CustomPolywrapProvider>\n  );\n};\n")),Object(a.b)("h3",{id:"usepolywrapclient"},Object(a.b)("strong",{parentName:"h3"},"usePolywrapClient")),Object(a.b)("p",null,"You can obtain a copy of the client instance from your ",Object(a.b)("inlineCode",{parentName:"p"},"PolywrapProvider")," using the ",Object(a.b)("inlineCode",{parentName:"p"},"usePolywrapClient")," hook."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const client = usePolywrapClient();\n")),Object(a.b)("h3",{id:"usepolywrapinvoke"},Object(a.b)("strong",{parentName:"h3"},"usePolywrapInvoke")),Object(a.b)("p",null,"After enabling your React application with the PolywrapProvider, you may now use the ",Object(a.b)("inlineCode",{parentName:"p"},"usePolywrapInvoke")," hook to call into wrappers!"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'const { execute, data, error, loading } = usePolywrapInvoke({\n  uri: \'ens/helloworld.polytest.eth\',\n  method: "logMessage",\n  args: {\n    message: "Hello World!",\n  },\n});\n')),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"By default, the ",Object(a.b)("inlineCode",{parentName:"p"},"usePolywrapInvoke")," hook uses the first PolywrapProvider found in the DOM's hierarchy. If you'd like to specify a specific provider to be used, simply set the ",Object(a.b)("inlineCode",{parentName:"p"},"provider:")," property:"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'const { execute, data, error, loading } = usePolywrapInvoke({\n  provider: "custom",\n  uri: \'ens/helloworld.polytest.eth\',\n  method: "logMessage",\n  args: {\n    message: "Hello World!",\n  },\n});\n')))),Object(a.b)("h3",{id:"usepolywrapquery"},Object(a.b)("strong",{parentName:"h3"},"usePolywrapQuery")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"usePolywrapQuery")," hook works the same as the ",Object(a.b)("inlineCode",{parentName:"p"},"usePolywrapInvoke")," hook, but uses the client's ",Object(a.b)("inlineCode",{parentName:"p"},"query")," syntax instead."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const { execute, data, errors, loading } = usePolywrapQuery({\n  uri: 'ens/helloworld.polytest.eth',\n  query: `{\n    logMessage(message: \"Hello World!\")\n  }`,\n});\n")))}c.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);