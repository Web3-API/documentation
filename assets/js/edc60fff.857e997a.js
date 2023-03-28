(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=(a(0),a(194));const o={id:"deploy-locally-and-test",title:"Deploy locally & run tests"},c={unversionedId:"tutorials/create-wasm-wrappers/tutorial/deploy-locally-and-test",id:"tutorials/create-wasm-wrappers/tutorial/deploy-locally-and-test",isDocsHomePage:!1,title:"Deploy locally & run tests",description:"Deploy",source:"@site/docs/tutorials/create-wasm-wrappers/tutorial/deploy-locally-and-test.md",slug:"/tutorials/create-wasm-wrappers/tutorial/deploy-locally-and-test",permalink:"/tutorials/create-wasm-wrappers/tutorial/deploy-locally-and-test",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-wasm-wrappers/tutorial/deploy-locally-and-test.md",version:"current",sidebar:"docs",previous:{title:"Writing tests with workflows",permalink:"/tutorials/create-wasm-wrappers/tutorial/writing-tests-with-workflows"},next:{title:"Configure a Polywrap Manifest",permalink:"/tutorials/create-wasm-wrappers/polywrap-manifest"}},i=[{value:"<strong>Deploy</strong>",id:"deploy",children:[]},{value:"<strong>Test</strong>",id:"test",children:[]},{value:"<strong>Conclusion</strong>",id:"conclusion",children:[]}],l={toc:i};function s(e){let{components:t,...a}=e;return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"deploy"},Object(r.b)("strong",{parentName:"h3"},"Deploy")),Object(r.b)("p",null,"With our workflow complete, let's test the Wasm wrapper on our local environment! First, let's set up our test environment with the following command in your terminal:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn test:env:up\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This command starts up a test environment with a local Ethereum network using ",Object(r.b)("a",{parentName:"p",href:"https://www.trufflesuite.com/ganache"},"Ganache"),", an ENS smart contract, and a local IPFS node."),Object(r.b)("p",{parentName:"div"},"To close the test environment, simply run:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn test:env:down\n")))),Object(r.b)("p",null,"Next, we will deploy our both our ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleStorage.sol")," smart contract as well as our wrapper with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn deploy\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Behind the scenes, ",Object(r.b)("inlineCode",{parentName:"p"},"yarn deploy")," will run the following commands:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn deploy:api && yarn deploy:contract\n")),Object(r.b)("p",{parentName:"div"},"Let's break down each of these commands, starting with ",Object(r.b)("inlineCode",{parentName:"p"},"yarn deploy:api"),", which itself runs this command:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npx polywrap deploy\n")),Object(r.b)("p",{parentName:"div"},"The polywrap CLI's deploy command executes a deployment pipeline defined in a ",Object(r.b)("inlineCode",{parentName:"p"},"polywrap.deploy.yaml")," manifest.\nOur deployment pipeline builds and deploys our wrapper to our local test environment.\nThe wrapper is assigned to an Ethereum Name Service (ENS) domain registered in the test environment that is set to resolve to our local IPFS node."),Object(r.b)("p",{parentName:"div"},"We next deploy the SimpleStorage smart contract to the Ethereum test network using a script we've written for you:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"node ./scripts/deploy-contract.js\n")),Object(r.b)("p",{parentName:"div"},"We'll be interacting with this deployed smart contract using our Wasm wrapper."))),Object(r.b)("h3",{id:"test"},Object(r.b)("strong",{parentName:"h3"},"Test")),Object(r.b)("p",null,"Now, we'll use the following command to check whether our wrapper and smart contract are working properly:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn test:workflow\n")),Object(r.b)("p",null,"This command uses the Polywrap CLI's ",Object(r.b)("inlineCode",{parentName:"p"},"run")," command, which will execute a series of Polywrap invocations and return the result to you."),Object(r.b)("h3",{id:"conclusion"},Object(r.b)("strong",{parentName:"h3"},"Conclusion")),Object(r.b)("p",null,"\ud83c\udf89 ",Object(r.b)("strong",{parentName:"p"},"Congratulations! You've create a custom Wasm wrapper!")),Object(r.b)("p",null,"Hopefully this article has given you a clear understanding of the Polywrap toolchain's primary features. If at any time in this process you get stuck or have questions, please don't hesitate to reach out on ",Object(r.b)("a",{parentName:"p",href:"https://discord.com/invite/Z5m88a5qWu"},"Discord"),"."))}s.isMDXComponent=!0},194:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,b=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return a?r.a.createElement(b,i(i({ref:t},s),{},{components:a})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);