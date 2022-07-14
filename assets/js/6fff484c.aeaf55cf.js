(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(8),p=(r(0),r(170)),l=["components"],o={id:"wrappers-cli",title:'Deployment using the "wrappers" CLI'},i={unversionedId:"quick-start/build-and-deploy-wasm-wrappers/deployment/wrappers-cli",id:"quick-start/build-and-deploy-wasm-wrappers/deployment/wrappers-cli",isDocsHomePage:!1,title:'Deployment using the "wrappers" CLI',description:"Introduction",source:"@site/docs/quick-start/build-and-deploy-wasm-wrappers/deployment/wrappers-cli.md",slug:"/quick-start/build-and-deploy-wasm-wrappers/deployment/wrappers-cli",permalink:"/quick-start/build-and-deploy-wasm-wrappers/deployment/wrappers-cli",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/build-and-deploy-wasm-wrappers/deployment/wrappers-cli.md",version:"current"},c=[{value:"<strong>Introduction</strong>",id:"introduction",children:[]},{value:"<strong>Table of Contents</strong>",id:"table-of-contents",children:[{value:"What you need to get started:",id:"what-you-need-to-get-started",children:[]},{value:"Step 1. Clone the polywrap demo project",id:"step-1-clone-the-polywrap-demo-project",children:[]},{value:"Step 2. Git pull metadata",id:"step-2-git-pull-metadata",children:[]},{value:"Step 3. Build the wrapper",id:"step-3-build-the-wrapper",children:[]},{value:"Step 4.  <strong>Upload the build folder to CLI</strong>",id:"step-4--upload-the-build-folder-to-cli",children:[]},{value:"Step 5.",id:"step-5",children:[]}]}],b={toc:c};function u(e){var t=e.components,r=Object(n.a)(e,l);return Object(p.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"introduction"},Object(p.b)("strong",{parentName:"h2"},"Introduction")),Object(p.b)("p",null,"In this 5 step guide,  we'll walk you how to deploy your Polywrap wrapper using the ",Object(p.b)("inlineCode",{parentName:"p"},"CLI"),".\nso that other apps could integrate it into their apps!"),Object(p.b)("h2",{id:"table-of-contents"},Object(p.b)("strong",{parentName:"h2"},"Table of Contents")),Object(p.b)("details",null,Object(p.b)("summary",null,"Click to expand"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"#introduction"},"Introduction")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"#what-you-need-to-get-started"},"What you need to get started")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"#step-1-clone-the-polywrap-demo-project"},"Step 1. Clone the polywrap demo project")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"#step-2-git-pull-metadata"},"Step 2. Pull the polywrap metadata")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"#step-3-build-the-wrapper"},"Step 3. Build the wrapper ")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"#step-4-upload-the-build-folder-to-fleek"},"Step 4. Upload the build folder to CLI")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"#step-5-verifying-the-package-on-ipfs"},"Step 5. Verifying the package on IPFS ")))),Object(p.b)("h3",{id:"what-you-need-to-get-started"},"What you need to get started:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"We'll be using the ",Object(p.b)("a",{parentName:"li",href:"https://github.com/polywrap/demos"},"Polywrap Demos")," repo for this guide. "),Object(p.b)("li",{parentName:"ul"},"\ud83d\udc9a ",Object(p.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node. js")," "),Object(p.b)("li",{parentName:"ul"},"\ud83d\udda5\ufe0f\ud83d\udce6 ",Object(p.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/polywrap"},"CLI")),Object(p.b)("li",{parentName:"ul"},"\ud83d\udc33 ",Object(p.b)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),Object(p.b)("li",{parentName:"ul"},"\ud83e\uddf6",Object(p.b)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/"},"Yarn"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"Versions:  ",Object(p.b)("inlineCode",{parentName:"li"},"node >=10.0.0")," or ",Object(p.b)("inlineCode",{parentName:"li"},"yarn >=1.0.0")))),Object(p.b)("li",{parentName:"ul"},"\ud83d\udd38 ",Object(p.b)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"Git"))),Object(p.b)("h3",{id:"step-1-clone-the-polywrap-demo-project"},"Step 1. Clone the polywrap demo project"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/polywrap/demos.git\n")),Object(p.b)("h3",{id:"step-2-git-pull-metadata"},"Step 2. Git pull metadata"),Object(p.b)("p",null,"Then, we will check out the demo branch with the metafiles already set up:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"git pull origin polywrap-metadata\n")),Object(p.b)("h3",{id:"step-3-build-the-wrapper"},"Step 3. Build the wrapper"),Object(p.b)("p",null,"Now, we can build the sample wrapper with the following commands:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"nvm use\nyarn\nyarn build\n")),Object(p.b)("h3",{id:"step-4--upload-the-build-folder-to-cli"},"Step 4.  ",Object(p.b)("strong",{parentName:"h3"},"Upload the build folder to CLI")),Object(p.b)("p",null,"Upload build results to an IPFS node (default: dev-server's node)"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"npx polywrap build --ipfs http://localhost:5001\n")),Object(p.b)("h3",{id:"step-5"},"Step 5."),Object(p.b)("p",null," \ud83c\udf89 Congratulations \ud83c\udf89 on deploying using the Polywrap CLI!  "))}u.isMDXComponent=!0},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=b(r),s=a,m=u["".concat(l,".").concat(s)]||u[s]||d[s]||p;return r?n.a.createElement(m,o(o({ref:t},c),{},{components:r})):n.a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=r[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);