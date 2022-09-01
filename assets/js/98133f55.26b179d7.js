(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),l=a(8),r=(a(0),a(180)),o=["components"],i={id:"fleek",title:"Deploying to Fleek"},p={unversionedId:"quick-start/build-and-deploy-wasm-wrappers/deployment/fleek",id:"quick-start/build-and-deploy-wasm-wrappers/deployment/fleek",isDocsHomePage:!1,title:"Deploying to Fleek",description:"Introduction",source:"@site/docs/quick-start/build-and-deploy-wasm-wrappers/deployment/fleek.md",slug:"/quick-start/build-and-deploy-wasm-wrappers/deployment/fleek",permalink:"/quick-start/build-and-deploy-wasm-wrappers/deployment/fleek",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/build-and-deploy-wasm-wrappers/deployment/fleek.md",version:"current"},c=[{value:"<strong>Introduction</strong>",id:"introduction",children:[]},{value:"<strong>Table of Contents</strong>",id:"table-of-contents",children:[{value:"What is Fleek?",id:"what-is-fleek",children:[]},{value:"What you need to get started:",id:"what-you-need-to-get-started",children:[]},{value:"Step 1. Clone the polywrap demo project",id:"step-1-clone-the-polywrap-demo-project",children:[]},{value:"Step 2. Git pull metadata",id:"step-2-git-pull-metadata",children:[]},{value:"Step 3. Build the wrapper",id:"step-3-build-the-wrapper",children:[]},{value:"Step 4.  <strong>Upload the build folder to Fleek</strong>",id:"step-4--upload-the-build-folder-to-fleek",children:[]},{value:"Step 5.  <strong>Verifying the package on IPFS</strong>",id:"step-5--verifying-the-package-on-ipfs",children:[]}]}],b={toc:c};function s(e){var t=e.components,i=Object(l.a)(e,o);return Object(r.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},Object(r.b)("strong",{parentName:"h2"},"Introduction")),Object(r.b)("p",null,"In this 5 step guide, we'll walk you through how to deploy your Polywrap wrapper to ",Object(r.b)("a",{parentName:"p",href:"https://fleek.co/"},"Fleek")," so that other apps could integrate it into their apps!"),Object(r.b)("h2",{id:"table-of-contents"},Object(r.b)("strong",{parentName:"h2"},"Table of Contents")),Object(r.b)("details",null,Object(r.b)("summary",null,"Click to expand"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#introduction"},"Introduction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#what-you-need-to-get-started"},"What you need to get started")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#step-1-clone-the-polywrap-demo-project"},"Step 1. Clone the polywrap demo project")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#step-2-git-pull-metadata"},"Step 2. Pull the polywrap metadata")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#step-3-build-the-wrapper"},"Step 3. Build the wrapper ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#step-4-upload-the-build-folder-to-fleek"},"Step 4. Upload the build folder to Fleek")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#step-5-verifying-the-package-on-ipfs"},"Step 5. Verifying the package on IPFS ")))),Object(r.b)("h3",{id:"what-is-fleek"},"What is Fleek?"),Object(r.b)("p",null,"Fleek is the easiest way to build, deploy, and host websites & apps on ",Object(r.b)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS"),"\nFleek provides one seamless workflow with everything you need to build fast, modern sites & web apps hosted on IPFS."),Object(r.b)("h3",{id:"what-you-need-to-get-started"},"What you need to get started:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We'll be using the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/polywrap/demos"},"Polywrap Demos")," repo for this guide. "),Object(r.b)("li",{parentName:"ul"},"\ud83d\udc9a ",Object(r.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node. js")," "),Object(r.b)("li",{parentName:"ul"},"\u26a1 ",Object(r.b)("a",{parentName:"li",href:"https://fleek.co/"},"Fleek")),Object(r.b)("li",{parentName:"ul"},"\ud83d\udc33 ",Object(r.b)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),Object(r.b)("li",{parentName:"ul"},"\ud83e\uddf6",Object(r.b)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/"},"Yarn"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Versions:  ",Object(r.b)("inlineCode",{parentName:"li"},"node >=10.0.0")," or ",Object(r.b)("inlineCode",{parentName:"li"},"yarn >=1.0.0")))),Object(r.b)("li",{parentName:"ul"},"\ud83d\udd38 ",Object(r.b)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"Git"))),Object(r.b)("h3",{id:"step-1-clone-the-polywrap-demo-project"},"Step 1. Clone the polywrap demo project"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/polywrap/demos.git\n")),Object(r.b)("h3",{id:"step-2-git-pull-metadata"},"Step 2. Git pull metadata"),Object(r.b)("p",null,"Then, we will check out the demo branch with the metafiles already set up:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git pull origin polywrap-metadata\n")),Object(r.b)("h3",{id:"step-3-build-the-wrapper"},"Step 3. Build the wrapper"),Object(r.b)("p",null,"Now, we can build the sample wrapper with the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"nvm use\nyarn\nyarn build\n")),Object(r.b)("p",null,"Your ",Object(r.b)("inlineCode",{parentName:"p"},"build")," folder should be generated now. Copy and paste the ",Object(r.b)("inlineCode",{parentName:"p"},"./polywrap.meta.yaml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"./meta")," files into the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," folder."),Object(r.b)("h3",{id:"step-4--upload-the-build-folder-to-fleek"},"Step 4.  ",Object(r.b)("strong",{parentName:"h3"},"Upload the build folder to Fleek")),Object(r.b)("p",null,"Make sure you signup for a Fleek account. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"On the left-hand side menu of your ",Object(r.b)("inlineCode",{parentName:"li"},"Fleek.")," "),Object(r.b)("li",{parentName:"ul"},"Account page, click on the ",Object(r.b)("inlineCode",{parentName:"li"},'"Storage"')," link.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Fleek Step 1",src:a(280).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Then, click ",Object(r.b)("inlineCode",{parentName:"li"},'"Create Folder"'))),Object(r.b)("p",null,"Example: ",Object(r.b)("inlineCode",{parentName:"p"},"Gm-Polywrap")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Fleek Step 2",src:a(281).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Confirm")," to create the folder ")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Fleek Step 3",src:a(282).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click the Folder "),Object(r.b)("li",{parentName:"ul"},"After that, click ",Object(r.b)("inlineCode",{parentName:"li"},'"Upload"')," ")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Fleek Step 4",src:a(283).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select the contents of your ",Object(r.b)("inlineCode",{parentName:"li"},"build")," folder onto ",Object(r.b)("inlineCode",{parentName:"li"},"Fleek."))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Fleek Step 5",src:a(284).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Confirm."))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Fleek Step 6",src:a(285).default})),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Due to the current Filecoin deal size limitation, files are batched together across Fleek products and uploaded as one Filecoin"),Object(r.b)("p",{parentName:"div"},"So it might take 24-48 hours, depending on Fleek usage, for content to appear in ipfs"))),Object(r.b)("h3",{id:"step-5--verifying-the-package-on-ipfs"},"Step 5.  ",Object(r.b)("strong",{parentName:"h3"},"Verifying the package on IPFS")),Object(r.b)("p",null,"Click the   ",Object(r.b)("inlineCode",{parentName:"p"},'"Verify on IPFS"'),"   button. "),Object(r.b)("p",null,"You will get an IPFS hash! "),Object(r.b)("p",null,"For an example of what you should see, visit this ",Object(r.b)("a",{parentName:"p",href:"https://ipfs.fleek.co/ipfs/QmQLsx7sxkLrXwh8dPmF2MTWJmgB5C2FmWYth11i7oL3vN"},"IPFS link"),"."),Object(r.b)("p",null,"Now that you have the IPFS hash, you can use it as a value in the URI property of your Polywrap queries to access the functions in this wrapper. "),Object(r.b)("p",null,"You can also register an ENS domain and have it resolved to this IPFS content."),Object(r.b)("p",null," \ud83c\udf89 Congratulations \ud83c\udf89 on deploying to Fleek!  "))}s.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||r;return a?l.a.createElement(m,i(i({ref:t},c),{},{components:a})):l.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},280:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fleek-step-1-7aabb929589c649b02b21d27729b3ba6.png"},281:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fleek-step-2-b0d955c79264480253bdf6e6d52b6e1e.png"},282:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fleek-step-3-05845b81758eac442c0d3a993c74838c.png"},283:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fleek-step-4-27309ed54eb46b799c4195952331549b.png"},284:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fleek-step-5-48587509adba87afb1b5184384bb4cb9.png"},285:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fleek-step-6-cbf5eb170e8e515773c63be8639164ac.png"}}]);