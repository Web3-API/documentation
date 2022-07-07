(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),o=(n(0),n(162)),c=["components"],i={id:"deploy-locally-and-test",title:"Deploy locally & run tests"},s={unversionedId:"quick-start/create-wasm-wrappers/deploy-locally-and-test",id:"quick-start/create-wasm-wrappers/deploy-locally-and-test",isDocsHomePage:!1,title:"Deploy locally & run tests",description:"Deploy",source:"@site/docs/quick-start/create-wasm-wrappers/deploy-locally-and-test.md",slug:"/quick-start/create-wasm-wrappers/deploy-locally-and-test",permalink:"/quick-start/create-wasm-wrappers/deploy-locally-and-test",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/create-wasm-wrappers/deploy-locally-and-test.md",version:"current",sidebar:"docs",previous:{title:"Writing tests with workflows",permalink:"/quick-start/create-wasm-wrappers/writing-tests-with-workflows"},next:{title:"Writing tests with TypeScript",permalink:"/quick-start/create-wasm-wrappers/end-to-end-test"}},p=[{value:"<strong>Deploy</strong>",id:"deploy",children:[]},{value:"<strong>Test</strong>",id:"test",children:[]},{value:"<strong>Conclusion</strong>",id:"conclusion",children:[]}],l={toc:p};function m(e){var t=e.components,n=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"deploy"},Object(o.b)("strong",{parentName:"h3"},"Deploy")),Object(o.b)("p",null,"With our workflow complete, let's test the Wasm wrapper on our local environment! First, let's set up our test environment with the following command in your terminal:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn test:env:up\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This command starts up a test environment with a local Ethereum network using ",Object(o.b)("a",{parentName:"p",href:"https://www.trufflesuite.com/ganache"},"Ganache"),", an ENS smart contract, and a local IPFS node."),Object(o.b)("p",{parentName:"div"},"To close the test environment, simply run:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn test:env:down\n")))),Object(o.b)("p",null,"Next, we will deploy our both our ",Object(o.b)("inlineCode",{parentName:"p"},"SimpleStorage.sol")," smart contract as well as our wrapper with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn deploy\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Behind the scenes, ",Object(o.b)("inlineCode",{parentName:"p"},"yarn deploy")," will run the following commands:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn deploy:api && yarn deploy:contract\n")),Object(o.b)("p",{parentName:"div"},"Let's break down each of these commands, starting with ",Object(o.b)("inlineCode",{parentName:"p"},"yarn deploy:api"),", which itself runs this command:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npx polywrap deploy\n")),Object(o.b)("p",{parentName:"div"},"The polywrap CLI's deploy command executes a deployment pipeline defined in a ",Object(o.b)("inlineCode",{parentName:"p"},"polywrap.deploy.yaml")," manifest.\nOur deployment pipeline builds and deploys our wrapper to our local test environment.\nThe wrapper is assigned to an Ethereum Name Service (ENS) domain registered in the test environment that is set to resolve to our local IPFS node."),Object(o.b)("p",{parentName:"div"},"We next deploy the SimpleStorage smart contract to the Ethereum test network using a script we've written for you:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"node ./scripts/deploy-contract.js\n")),Object(o.b)("p",{parentName:"div"},"We'll be interacting with this deployed smart contract using our Wasm wrapper."))),Object(o.b)("h3",{id:"test"},Object(o.b)("strong",{parentName:"h3"},"Test")),Object(o.b)("p",null,"Now, we'll use the following command to check whether our wrapper and smart contract are working properly:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn test:workflow\n")),Object(o.b)("p",null,"This command uses the Polywrap CLI's ",Object(o.b)("inlineCode",{parentName:"p"},"run")," command, which will execute a series of Polywrap invocations and return the result to you."),Object(o.b)("h3",{id:"conclusion"},Object(o.b)("strong",{parentName:"h3"},"Conclusion")),Object(o.b)("p",null,"\ud83c\udf89 ",Object(o.b)("strong",{parentName:"p"},"Congratulations! You've create a custom Wasm wrapper!")),Object(o.b)("p",null,"Hopefully this article has given you a clear understanding of the Polywrap toolchain's primary features. If at any time in this process you get stuck or have questions, please don't hesitate to reach out on ",Object(o.b)("a",{parentName:"p",href:"https://discord.com/invite/Z5m88a5qWu"},"Discord"),"."))}m.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),b=a,u=m["".concat(c,".").concat(b)]||m[b]||d[b]||o;return n?r.a.createElement(u,i(i({ref:t},p),{},{components:n})):r.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);