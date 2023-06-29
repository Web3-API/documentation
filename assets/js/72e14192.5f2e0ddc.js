"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[7239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={id:"quick-start",title:"Quick start"},r=void 0,l={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"The Polywrap Client",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/quick-start",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start.md",tags:[],version:"current",frontMatter:{id:"quick-start",title:"Quick start"},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"Clients",permalink:"/clients"}},p={},s=[{value:"The Polywrap Client",id:"the-polywrap-client",level:2},{value:"NodeJS application boilerplate",id:"nodejs-application-boilerplate",level:3},{value:"Install the Polywrap Client",id:"install-the-polywrap-client",level:3},{value:"Invoking your first Wrap",id:"invoking-your-first-wrap",level:3},{value:"What&#39;s going on here?",id:"whats-going-on-here",level:4},{value:"The <code>InvokeResult</code> object",id:"the-invokeresult-object",level:4},{value:"Universal SDKs",id:"universal-sdks",level:3},{value:"Compose everything",id:"compose-everything",level:3},{value:"The Polywrap CLI",id:"the-polywrap-cli",level:2},{value:"Installation",id:"installation",level:3},{value:"Overview",id:"overview",level:3},{value:"Create a Polywrap-powered application",id:"create-a-polywrap-powered-application",level:3},{value:"The Polywrap Manifest (<code>polywrap.yaml</code>)",id:"the-polywrap-manifest-polywrapyaml",level:3},{value:"The Schema File (<code>schema.graphql</code>)",id:"the-schema-file-schemagraphql",level:4},{value:"Generating types (<code>codegen</code>)",id:"generating-types-codegen",level:4},{value:"Introduce type-safety into your code",id:"introduce-type-safety-into-your-code",level:3},{value:"A real-world exmaple, revisited",id:"a-real-world-exmaple-revisited",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-polywrap-client"},"The Polywrap Client"),(0,o.kt)("p",null,"To use ",(0,o.kt)("a",{parentName:"p",href:"/concepts/wraps"},"Wraps")," in your app, all you need is the ",(0,o.kt)("strong",{parentName:"p"},"Polywrap Client"),"!"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Currently we have a stable implementation of the Polywrap Client in Javascript. Python, Rust, Swift, Kotlin, and C# are coming soon.")),(0,o.kt)("h3",{id:"nodejs-application-boilerplate"},"NodeJS application boilerplate"),(0,o.kt)("p",null,"We'll be using a simple NodeJS application boilerplate for this guide."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm init")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn init")," within a directory initialize an empty NodeJS project."),(0,o.kt)("p",null,"Within ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", change the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," of the project to ",(0,o.kt)("inlineCode",{parentName:"p"},'"module"'),". This is not required as you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "my-app-name",\n  //...\n  "type": "module",\n  //...\n}\n')),(0,o.kt)("p",null,"Add an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"async function main() {\n  // your code goes here...\n}\n\nmain()\n  .then(() => {\n    process.exit(0);\n  })\n  .catch((error) => {\n    console.error(error);\n    process.exit(1);\n  });\n\n")),(0,o.kt)("h3",{id:"install-the-polywrap-client"},"Install the Polywrap Client"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"NPM"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save @polywrap/client-js\n")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @polywrap/client-js\n")),(0,o.kt)("h3",{id:"invoking-your-first-wrap"},"Invoking your first Wrap"),(0,o.kt)("p",null,"In order to invoke a Wrap, we first need to instantiate the Polywrap Client:"),(0,o.kt)("p",null,"At the top of your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file, import the ",(0,o.kt)("inlineCode",{parentName:"p"},"PolywrapClient")," and instantiate it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { PolywrapClient } from "@polywrap/client-js";\n\nconst client = new PolywrapClient();\n')),(0,o.kt)("p",null,"At this point, you can already invoke Wraps! In the simple example below, we will invoke the Logger Wrap within our ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const result = await client.invoke({\n  uri: "ens/wraps.eth:logger@1.0.0",\n  method: "log",\n  args: {\n    message: "Hello Polywrap!",\n  },\n});\n\nconsole.log(result);\n')),(0,o.kt)("p",null,"Running the application using ",(0,o.kt)("inlineCode",{parentName:"p"},"node index.js"),", you should now see two lines appear in your console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello Polywrap!\n{ ok: true, value: true }\n")),(0,o.kt)("p",null,"The first line is printed by the Logger Wrap, while the second line shows the structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"InvokeResult")," object."),(0,o.kt)("h4",{id:"whats-going-on-here"},"What's going on here?"),(0,o.kt)("p",null,"Using the Polywrap Client, we are invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," method of a Wrap found under the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/uris"},"WRAP URI")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ens/wraps.eth:logger@1.0.0")," called the Logger Wrap."),(0,o.kt)("p",null,"Under the hood, through a process we call URI Resolution, the Polywrap Client knows how to fetch and execute the Wrap from decentralized storage."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PolywrapClient")," comes pre-configured with everything you need for most Web2 and Web3 use-cases by default."),(0,o.kt)("h4",{id:"the-invokeresult-object"},"The ",(0,o.kt)("inlineCode",{parentName:"h4"},"InvokeResult")," object"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"InvokeResult")," object can have one of two structures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A successful Wrap invocation returns ",(0,o.kt)("inlineCode",{parentName:"li"},"{ ok: true, value: ... }")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," being the return value of the Wrap invocation. This can be anything - a boolean value, a string, an object, etc."),(0,o.kt)("li",{parentName:"ul"},"A failed Wrap invocation returns ",(0,o.kt)("inlineCode",{parentName:"li"},"{ ok: false, error: ... }")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," describing the reason for invocation failure.")),(0,o.kt)("p",null,"Although not particularly useful in our last example, our next example leverages the fact that Wrap invocations return a value."),(0,o.kt)("h3",{id:"universal-sdks"},"Universal SDKs"),(0,o.kt)("p",null,"Now that we know how a Wrap is invoked, let's see Polywrap's true use-case: ",(0,o.kt)("strong",{parentName:"p"},"universal SDKs"),"!"),(0,o.kt)("p",null,"One of the greatest benefits of Polywrap for the end-user (you!) lies in the fact that you can use the Polywrap Client to invoke the same Wrap from a variety of platforms and languages. If there's a Polywrap Client for your language, you can invoke any Wrap. This means that you can use the same SDK across multiple languages!"),(0,o.kt)("p",null,"Another important benefit of using Polywrap is that, since Wraps are downloaded from various sources, you can automatically receive patches and updates to your SDKs without having to update your codebase."),(0,o.kt)("p",null,"Now we'll invoke the Uniswap V3 Wrap which is a port of the Uniswap SDK, but written as a Wrap."),(0,o.kt)("p",null,"We can use the Uniswap Wrap to fetch Uniswap's basic data related to the WETH and USDC tokes, find the address of the pool for those two tokens. We are also checking each result for errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const wethResult = await client.invoke({\n  uri: "ens/uniswap.wraps.eth:v3",\n  method: "fetchToken",\n  args: {\n    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",\n    chainId: "MAINNET",\n  },\n});\n\n// Log the invocation error and stop execution if the invocation fails\nif(!wethResult.ok) {\n  console.log(wethResult.error)\n  return;\n}\n\nconsole.log("WETH:", wethResult.value);\n\nconst usdcResult = await client.invoke({\n  uri: "ens/uniswap.wraps.eth:v3",\n  method: "fetchToken",\n  args: {\n    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",\n    chainId: "MAINNET",\n  },\n});\n\n// Log the invocation error and stop execution if the invocation fails\nif(!usdcResult.ok) {\n  console.log(usdcResult.error)\n  return;\n}\n\nconsole.log("USDC:", usdcResult.value);\n\nconst poolAddressResult = await client.invoke({\n  uri: "ens/uniswap.wraps.eth:v3",\n  method: "getPoolAddress",\n  args: {\n    tokenA: wethResult.value,\n    tokenB: usdcResult.value,\n    fee: "MEDIUM"\n  },\n});\n\n// Log the invocation error and stop execution if the invocation fails\nif(!poolAddressResult.ok) {\n  console.log(poolAddressResult.error);\n  return;\n}\n\nconsole.log("Pool address:", poolAddressResult.value);\n')),(0,o.kt)("p",null,"You can see more examples on how to use the Uniswap V3 Wrap in its ",(0,o.kt)("a",{parentName:"p",href:"https://uniswap.docs.wrappers.io/"},"docs page"),"."),(0,o.kt)("h3",{id:"compose-everything"},"Compose everything"),(0,o.kt)("p",null,"So far, we've only invoked a single Wrap, essentially using Polywrap to access a single SDK."),(0,o.kt)("p",null,"Using the Polywrap Client, we can invoke any number of SDKs, allowing us to build infinitely composable applications. If there's a Wrap for it, we can invoke it and use its functionality."),(0,o.kt)("p",null,"In this chapter's last example, we will use two separate SDKs to figure out the IPFS hash behind the Logger Wrap's ENS domain record, then fetch that Wrap's schema (more about that in the next chapter)."),(0,o.kt)("p",null,"First, we will use the Ens Text Record Resolver Wrap to resolve the ENS domain to an IPFS Wrap URI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// We first want to resolve the ENS address (uniswap.wraps.eth)\n// and text record (v3) into an IPFS WRAP URI\nconst resolutionResult = await client.invoke({\n  uri: "ens/wraps.eth:ens-text-record-uri-resolver-ext@1.0.0",\n  method: "tryResolveUri",\n  args: {\n    authority: "ens",\n    path: "uniswap.wraps.eth:v3",\n  },\n});\n\nif (!resolutionResult.ok) {\n  console.log(resolutionResult.error);\n  return;\n}\n\nconsole.log(resolutionResult.value);\n')),(0,o.kt)("p",null,"Now, if we look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"resolutionResult.value"),", we will see a WRAP URI.\nWe can also see a ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest")," property which is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", which you can safely ignore for now.\nThis is because our ENS Text Record Resolver Wrap only resolves from an ENS Text Record to another URI."),(0,o.kt)("p",null,"Once we have the IPFS hash, we will use the IPFS Wrap to fetch the contents of the Wrap's manifest file (",(0,o.kt)("inlineCode",{parentName:"p"},"wrap.info"),"), and print them out."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Extract the IPFS CID from the resolution result\'s URI\nconst cid = resolutionResult.value.uri.replace("wrap://ipfs/", "");\n\n// Since the CID is a directory, we need to add a path to the Wrap\'s manifest file\nconst catResult = await client.invoke({\n  uri: "ens/wraps.eth:ipfs-http-client@1.0.0",\n  method: "cat",\n  args: {\n    cid: cid + "/wrap.info",\n    ipfsProvider: "https://ipfs.wrappers.io"\n  },\n});\n\nconsole.log(catResult);\n\nif (!catResult.ok) {\n  console.log(catResult.error);\n  return;\n}\n\n// Turn the returned buffer into a string and log it\nconst schema = new TextDecoder().decode(catResult.value);\n\nconsole.log(schema);\n')),(0,o.kt)("p",null,"In this example, we printed out a Wrap's Manifest file. This is a file that contains the definiton of the Wrap. Amongst other things it contains what types and methods are present within a Wrap, called the Wrap's Schema, and we'll talk more about it in the next section."),(0,o.kt)("h2",{id:"the-polywrap-cli"},"The Polywrap CLI"),(0,o.kt)("p",null,"Now that we have a basic understanding of the Polywrap Client, it's time to see how we can use the Polywrap CLI to create an amazing experience when working with Wraps."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install the Polywrap CLI, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"polywrap")," package as a dev dependency to your project:"),(0,o.kt)("p",null,"NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i --save-dev polywrap\n")),(0,o.kt)("p",null,"Yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add --dev polywrap\n")),(0,o.kt)("p",null,"You can also install the Polywrap CLI globally:"),(0,o.kt)("p",null,"NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -g polywrap\n")),(0,o.kt)("p",null,"Yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn global add polywrap\n")),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Polywrap CLI allows us not only to build, test, and deploy Wraps, but also generate types for our applications which use the Polywrap Client."),(0,o.kt)("p",null,"This tutorial assumes that you installed ",(0,o.kt)("inlineCode",{parentName:"p"},"polywrap")," globally, but you can always prefix the commands with ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn run")," to run the locally installed version of your Polywrap CLI."),(0,o.kt)("p",null,"You can see all available commands by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"polywrap help\n")),(0,o.kt)("h3",{id:"create-a-polywrap-powered-application"},"Create a Polywrap-powered application"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you already have an application you want to add Polywrap to, it is advised that you still follow this guide and transfer/modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"polywrap.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"src/schema.graphql")," files once you're done with this tutorial.")),(0,o.kt)("p",null,"The Polywrap CLI can be used to quickly set up a template application. For this tutorial, we will create a sample Node application written in Typescript and use the Polywrap Client to invoke multiple Wraps."),(0,o.kt)("p",null,"To set up a Polywrap-powered application, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"polywrap create app typescript my-application\n")),(0,o.kt)("p",null,"This uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," command to set up a template Node application written in Typescript called ",(0,o.kt)("inlineCode",{parentName:"p"},"my-application")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"my-application/")," directory. Now we want to navigate into the application folder and install its dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd my-application\nyarn\n")),(0,o.kt)("p",null,"If you take a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", you'll find the app depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"@polywrap/client-js")," and has a dev dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"polywrap"),", with the addition of minimal dev dependencies that allow us to develop the app using Typescript."),(0,o.kt)("p",null,"Now let's take a look at some of the files Polywrap works with."),(0,o.kt)("h3",{id:"the-polywrap-manifest-polywrapyaml"},"The Polywrap Manifest (",(0,o.kt)("inlineCode",{parentName:"h3"},"polywrap.yaml"),")"),(0,o.kt)("p",null,"In order for the Polywrap CLI to know what it's working with, it needs a Polywrap Manifest file to obtain some basic information about your project. This is the ",(0,o.kt)("inlineCode",{parentName:"p"},"polywrap.yaml")," file."),(0,o.kt)("p",null,"It has a structure similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="polywrap.yaml"',title:'"polywrap.yaml"'},"format: 0.3.0\nproject:\n  name: Sample\n  type: app/typescript\nsource:\n  schema: ./schema.graphql\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," property denotes the version of the Polywrap Manifest format. Under ",(0,o.kt)("inlineCode",{parentName:"p"},"project"),", you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field to the name of your application, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field describes the project type, thus letting the CLI know how to interact with the application code."),(0,o.kt)("p",null,"Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," section, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," field with a path that leads to a Schema file."),(0,o.kt)("p",null,"In the context of a Polywrap-powered application project, this file defines which Wraps our application imports/uses. This will come in handy later when we'll use the CLI to generate types and code which your app will use."),(0,o.kt)("h4",{id:"the-schema-file-schemagraphql"},"The Schema File (",(0,o.kt)("inlineCode",{parentName:"h4"},"schema.graphql"),")"),(0,o.kt)("p",null,"Every Polywrap project has a Schema file - it defines the types found within the project, what Wraps the project imports, and, in the case of a WASM Wrap, the methods that Wrap exposes."),(0,o.kt)("p",null,"In the context of an application project, the Schema file defines which Wraps our application imports and is used by the CLI to generate code with which we can invoke our Wraps in a type-safe manner."),(0,o.kt)("p",null,"Taking a look at the file, we can see two ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="schema.graphql"',title:'"schema.graphql"'},'#import * into Logging from "ens/wraps.eth:logging@1.0.0"\n#import * into Ethereum from "ens/wraps.eth:ethereum@1.0.0"\n')),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statement defines which Wraps we are importing, therefore using within our application. Imports are namespaced - the Wrap found under the WRAP URI ",(0,o.kt)("inlineCode",{parentName:"p"},"ens/wraps.eth:logging@1.0.0")," is going to be found within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging_")," namespace."),(0,o.kt)("h4",{id:"generating-types-codegen"},"Generating types (",(0,o.kt)("inlineCode",{parentName:"h4"},"codegen"),")"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While we used Javascript in previous samples, Polywrap is native to Typescript, and all future examples will be written in Typescript.")),(0,o.kt)("p",null,'Now that we know how we can "import" Wraps into our application, we can use the ',(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," command inside the Polywrap CLI to generate types that represent our Wraps which we can use within our application."),(0,o.kt)("p",null,"To generate types, all we need to do is run the ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"polywrap codegen\n")),(0,o.kt)("p",null,"This will generate types inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/wrap")," directory which you will use within your application."),(0,o.kt)("h3",{id:"introduce-type-safety-into-your-code"},"Introduce type-safety into your code"),(0,o.kt)("p",null,"Now that we have our types generated, we can take a look at our sample application's ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file."),(0,o.kt)("p",null,"Let's first take a look at some of the imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {\n  Logging_Module,\n  Ethereum_Module,\n} from "./wrap";\n')),(0,o.kt)("p",null,"Here we can see that we've imported Module types that represent our Wraps, according to their specified namespace. Using these types, we can invoke our Wraps in a type-safe manner, without having to repeatedly specify the Wrap URI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const client = new PolywrapClient();\n\nawait Logging_Module.info({\n  message: "Hello there",\n}, client);\n')),(0,o.kt)("p",null,"This allows us to write all of our code in a type-safe manner, and allows for IDEs like VS Code to give us autocompletion suggestions via IntelliSense. Now we can explore our Wraps by simply importing them and trying them out!"),(0,o.kt)("h3",{id:"a-real-world-exmaple-revisited"},"A real-world exmaple, revisited"),(0,o.kt)("p",null,"Let's revisit our Uniswap V3 Wrap example from the Quick Start tutorial. If we wanted to invoke the Uniswap V3 Wrap without codegen, we had to write the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const usdcResult = await client.invoke({\n  uri: "ens/uniswap.wraps.eth:v3",\n  method: "fetchToken",\n  args: {\n    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",\n    chainId: "MAINNET",\n  },\n});\n')),(0,o.kt)("p",null,"Instead, we can now add an ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statement for the Uniswap V3 Wrap to our ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.graphql")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="schema.graphql"',title:'"schema.graphql"'},'#import * into UniswapV3 from "ens/uniswap.wraps.eth:v3"\n')),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," now will add all types defined inside the Uniswap V3 Wrap to our ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"polywrap codegen\n")),(0,o.kt)("p",null,"We can now import the ",(0,o.kt)("inlineCode",{parentName:"p"},"UniswapV3_Module")," and supporting types into our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {\n  UniswapV3_Module,\n  UniswapV3_ChainIdEnum,\n} from "./wrap";\n')),(0,o.kt)("p",null,"We can now invoke the Uniswap V3 Wrap by writing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const usdcResult = await UniswapV3_Module.fetchToken(\n  {\n    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",\n    chainId: UniswapV3_ChainIdEnum.MAINNET,\n  },\n  client\n);\n')),(0,o.kt)("p",null,"Already inside the invocation, we can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," is an ",(0,o.kt)("inlineCode",{parentName:"p"},"enum")," type, with all supported networks already listed. Polywrap also takes care of required and optional arguments, and if you play around, you will find that we omitted the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol")," optional invocation arguments."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"usdcResult.ok")," is true, its ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," will now have a type of ",(0,o.kt)("inlineCode",{parentName:"p"},"UniswapV3_Token"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'if(!usdcResult.ok) {\n  console.error(usdcResult.error);\n  return;\n}\n\n// token is now of type UniswapV3_Token found in "./wrap"\nconst token = usdcResult.value;\n\nconsole.log(token);\n')),(0,o.kt)("p",null,"As you can see, Polywrap allows us to invoke any SDK or other piece of executable logic packaged as a Wrap in a type-safe manner, accross a multitude of platforms and languages!"),(0,o.kt)("p",null,"Of course, by using the Polywrap CLI you can build your own Wraps which you will be able to run anywhere where there's a Polywrap Client."),(0,o.kt)("p",null,"Make sure to check out our list of supported (and coming) clients, and proceed to the next section to see what Wraps are readily available!"))}d.isMDXComponent=!0}}]);