"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[9515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"build-deploy-test",title:"Build, deploy and test"},l=void 0,i={unversionedId:"tutorials/create-wasm-wrappers/tutorial/build-deploy-test",id:"tutorials/create-wasm-wrappers/tutorial/build-deploy-test",title:"Build, deploy and test",description:"Build",source:"@site/docs/tutorials/create-wasm-wrappers/tutorial/build-deploy-test.md",sourceDirName:"tutorials/create-wasm-wrappers/tutorial",slug:"/tutorials/create-wasm-wrappers/tutorial/build-deploy-test",permalink:"/tutorials/create-wasm-wrappers/tutorial/build-deploy-test",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-wasm-wrappers/tutorial/build-deploy-test.md",tags:[],version:"current",frontMatter:{id:"build-deploy-test",title:"Build, deploy and test"},sidebar:"docs",previous:{title:"The Polywrap project folder",permalink:"/tutorials/create-wasm-wrappers/tutorial/project-folder"},next:{title:"Adding new Methods",permalink:"/tutorials/create-wasm-wrappers/tutorial/adding-new-methods"}},p={},s=[{value:"<strong>Build</strong>",id:"build",level:3},{value:"<strong>Deploy</strong>",id:"deploy",level:3},{value:"<strong>Test</strong>",id:"test",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"build"},(0,a.kt)("strong",{parentName:"h3"},"Build")),(0,a.kt)("p",null,"Let's start building our project! Simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,a.kt)("p",null,"In the output window, you'll see that our smart contract was compiled, and our Polywrap wrapper was built and output to the ",(0,a.kt)("inlineCode",{parentName:"p"},"./build/*")," folder. It contains the following files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"build/\n    |\u2500\u2500 wrap.wasm          # Wrapper Logic\n    \u2514\u2500\u2500 wrap.info          # Wrapper Manifest\n")),(0,a.kt)("p",null,"This directory's contents will be uploaded to decentralized storage, and enable any Polywrap Client to download, and execute your wrapper's functionality within the application."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap.wasm")," file is the WebAssembly file that was compiled from AssemblyScript."),(0,a.kt)("p",null,"Lastly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap.info")," file describes the layout of the package, as well as its methods and custom types."),(0,a.kt)("h3",{id:"deploy"},(0,a.kt)("strong",{parentName:"h3"},"Deploy")),(0,a.kt)("p",null,"To deploy our Polywrap wrapper and associated smart contracts for testing, let's first setup a test environment. Simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test:env:up\n")),(0,a.kt)("p",null,"This will stand-up an Ethereum node, as well as an IPFS node."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In the future, test environments will be easily configurable to include any nodes your Polywrap wrapper requires.")),(0,a.kt)("p",null,"Next, let's deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleStorage.sol")," smart contract, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"simplestorage.eth")," wrapper URI by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn deploy\n")),(0,a.kt)("h3",{id:"test"},(0,a.kt)("strong",{parentName:"h3"},"Test")),(0,a.kt)("p",null,"With our Polywrap wrapper live at ",(0,a.kt)("inlineCode",{parentName:"p"},"simplestorage.eth")," on our test network, it's now time to test it out!"),(0,a.kt)("p",null,"This is where our workflows come in handy. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn test")," to see this in action."),(0,a.kt)("p",null,"In the output window, you'll see a combination of jobs and returned results from the Polywrap wrapper. In this workflow, we send a combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"setData")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getData")," queries which modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleStorage.sol")," contract's stored value."),(0,a.kt)("p",null,"Now that we've built the SimpleStorage Wasm wrapper, let's add custom functionality to it in the next section!"))}c.isMDXComponent=!0}}]);