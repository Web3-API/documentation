(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(162)),o=["components"],c={id:"install-client",title:"Installing the Polywrap JS client"},l={unversionedId:"quick-start/create-js-app/install-client",id:"quick-start/create-js-app/install-client",isDocsHomePage:!1,title:"Installing the Polywrap JS client",description:"Introduction",source:"@site/docs/quick-start/create-js-app/install-client.md",slug:"/quick-start/create-js-app/install-client",permalink:"/quick-start/create-js-app/install-client",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/create-js-app/install-client.md",version:"current",sidebar:"docs",previous:{title:"FAQ",permalink:"/concepts/faq"},next:{title:"Creating the Polywrap client instance",permalink:"/quick-start/create-js-app/create-client-instance"}},p=[{value:"<strong>Introduction</strong>",id:"introduction",children:[]},{value:"<strong>Prerequisites</strong>",id:"prerequisites",children:[]},{value:"<strong>Installation</strong>",id:"installation",children:[]},{value:"<strong>Examples</strong>",id:"examples",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},Object(i.b)("strong",{parentName:"h2"},"Introduction")),Object(i.b)("p",null,"If you're a JavaScript developer building Browser, Node.js, or React based apps, this guide is for you."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In the future, JavaScript will be one of many supported languages. Our goal is to enable the use of Polywrap in every major programming language."))),Object(i.b)("p",null,"By the end of this document, you'll gain the following skills:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How to instantiate the Polywrap client in your JavaScript App"),Object(i.b)("li",{parentName:"ul"},"Query any Polywrap using the Polywrap client"),Object(i.b)("li",{parentName:"ul"},"Configure custom Polywrap URI redirects"),Object(i.b)("li",{parentName:"ul"},"Build React apps with ease")),Object(i.b)("p",null,"If you get stuck during this guide, send us a message on our ",Object(i.b)("a",{parentName:"p",href:"https://discord.com/invite/Z5m88a5qWu"},"Discord"),"!"),Object(i.b)("h2",{id:"prerequisites"},Object(i.b)("strong",{parentName:"h2"},"Prerequisites")),Object(i.b)("p",null,"As prerequisites for this guide, we recommend having familiarity with ",Object(i.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),". ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," will also be used in the latter sections."),Object(i.b)("h2",{id:"installation"},Object(i.b)("strong",{parentName:"h2"},"Installation")),Object(i.b)("p",null,"To use wrappers in your app, all you need is the Polywrap Client!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install --save @polywrap/client-js\n")),Object(i.b)("p",null,"The Polywrap JavaScript Client works in both Node.js, and browser applications."),Object(i.b)("h2",{id:"examples"},Object(i.b)("strong",{parentName:"h2"},"Examples")),Object(i.b)("p",null,"Some example projects that integrate the JS client can be found ",Object(i.b)("a",{parentName:"p",href:"https://github.com/polywrap/demos/tree/main/hello-world/app"},"here"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The next section assumes that you're integrating Polywrap into an existing app project. If you want a quick start with our template project, simply run:"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npx polywrap create app typescript-react <project-name>\n")),Object(i.b)("p",{parentName:"blockquote"},"Where ",Object(i.b)("inlineCode",{parentName:"p"},"<project-name>")," is replaced with a custom name of your choosing. For example ",Object(i.b)("inlineCode",{parentName:"p"},"my-wrapper"),"."),Object(i.b)("p",{parentName:"blockquote"},'This command will create a new project folder with a "Hello World" app that\nlets you interact with a simple Wasm wrapper at ',Object(i.b)("inlineCode",{parentName:"p"},"ens/helloworld.web3api.eth"),".")))}u.isMDXComponent=!0}}]);