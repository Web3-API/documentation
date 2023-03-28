(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(194));const p={id:"default-plugins",title:"Default plugins"},l={unversionedId:"tutorials/create-wasm-wrappers/default-plugins",id:"tutorials/create-wasm-wrappers/default-plugins",isDocsHomePage:!1,title:"Default plugins",description:"Polywrap plugin wrappers extend the capabilities of Wasm wrappers. Some plugin wrappers come included in the Polywrap client by default:",source:"@site/docs/tutorials/create-wasm-wrappers/default-plugins.md",slug:"/tutorials/create-wasm-wrappers/default-plugins",permalink:"/tutorials/create-wasm-wrappers/default-plugins",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-wasm-wrappers/default-plugins.md",version:"current",sidebar:"docs",previous:{title:"Configure a Polywrap Manifest",permalink:"/tutorials/create-wasm-wrappers/polywrap-manifest"},next:{title:"Add Metadata",permalink:"/tutorials/create-wasm-wrappers/add-metadata"}},o=[{value:"Import to schema",id:"import-to-schema",children:[]},{value:"Use in Wasm Wrapper",id:"use-in-wasm-wrapper",children:[]},{value:"Commonly used default plugins",id:"commonly-used-default-plugins",children:[{value:"Ethereum",id:"ethereum",children:[]},{value:"Subgraph",id:"subgraph",children:[]},{value:"HTTP",id:"http",children:[]},{value:"Logger",id:"logger",children:[]}]}],i={toc:o};function s(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Polywrap plugin wrappers extend the capabilities of Wasm wrappers. Some plugin wrappers come included in the Polywrap client by default:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ENS Resolver"),Object(a.b)("li",{parentName:"ul"},"Ethereum"),Object(a.b)("li",{parentName:"ul"},"Filesystem"),Object(a.b)("li",{parentName:"ul"},"Filesystem Resolver"),Object(a.b)("li",{parentName:"ul"},"Graph-node"),Object(a.b)("li",{parentName:"ul"},"HTTP"),Object(a.b)("li",{parentName:"ul"},"IPFS"),Object(a.b)("li",{parentName:"ul"},"IPFS Resolver"),Object(a.b)("li",{parentName:"ul"},"Logger"),Object(a.b)("li",{parentName:"ul"},"SHA3"),Object(a.b)("li",{parentName:"ul"},"UTS-46")),Object(a.b)("p",null,"In this guide, we'll show you what it's like to import these default plugins into your wrapper, and explain what some commonly used plugins do."),Object(a.b)("h2",{id:"import-to-schema"},"Import to schema"),Object(a.b)("p",null,"We'll use one of the default plugins, Ethereum, to show how you can import its modules into your wrapper's schema (",Object(a.b)("inlineCode",{parentName:"p"},"schema.graphql")," file)."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'#import { Module, Connection } into Ethereum from "wrap://ens/ethereum.polywrap.eth"')),Object(a.b)("p",null,"Below, we explain what each part of this code means."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"#import")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Imports specific modules from a deployed or local plugin"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"{ Module, Connection }")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"These are specific modules that we're unpacking from the one of Polywrap's default plugins, Ethereum."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"into Ethereum")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This is a namespace, enabling you to use the modules in your schema e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"Ethereum_Module")," or ",Object(a.b)("inlineCode",{parentName:"li"},"Ethereum_Connection")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},'from "wrap://ens/ethereum.polywrap.eth"')),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"wrap://")," is the Polywrap URI schema."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ens")," is the URI authority. It tells the Polywrap client what kind of URI it needs to resolve. The ",Object(a.b)("inlineCode",{parentName:"li"},"ens")," authority tells the Polywrap client that what follows is an ENS address that resolves to a decentralized storage hosting a wrapper. Other valid authorities include ",Object(a.b)("inlineCode",{parentName:"li"},"ipfs")," for IPFS content hashes, ",Object(a.b)("inlineCode",{parentName:"li"},"fs")," for wrappers located on your local filesystem (often used while testing wrappers), or a custom authority that may be handled by a custom URI resolver."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ethereum.polywrap.eth")," is the URI path, which in this case is an ENS address."),Object(a.b)("li",{parentName:"ul"},"Note: The client redirects queries from the URI of a plugin wrapper to the plugin object that exists in memory. While plugins typically use an ENS URI for readability, the client does not need to query the ENS registry or an external storage location. See our section on ",Object(a.b)("a",{parentName:"li",href:"/tutorials/understanding-uri-redirects"},"URI redirects")," for more information.")))),Object(a.b)("h2",{id:"use-in-wasm-wrapper"},"Use in Wasm Wrapper"),Object(a.b)("p",null,"Once types have been imported, the functionality of these imported modules can be used in wrapper development."),Object(a.b)("p",null,"Upon ",Object(a.b)("inlineCode",{parentName:"p"},"yarn build"),", the imported types and modules will be made available to you in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/wrap")," folder.  To use them, you simply need to import the specific modules that you'd like to use."),Object(a.b)("p",null,"If you're building an AssemblyScript-based wrapper, the import might look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Ethereum_Module, Ethereum_Connection } from './wrap';\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Ethereum_Module")," will contain the methods shown ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polywrap/monorepo/blob/255caa0a40130f0733a31ac28efed272bfa00889/packages/js/plugins/ethereum/src/schema.graphql#L104"},"here"),", under the ",Object(a.b)("inlineCode",{parentName:"p"},"Module")," type."),Object(a.b)("p",null,"Once imported, you can access methods like so:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Ethereum_Module.callContractMethod({ ... })")),Object(a.b)("h2",{id:"commonly-used-default-plugins"},"Commonly used default plugins"),Object(a.b)("p",null,"This section contains guides on commonly used default plugins: Ethereum, Subgraph, HTTP, and Logger."),Object(a.b)("h3",{id:"ethereum"},"Ethereum"),Object(a.b)("p",null,"The Ethereum plugin enables wrappers to query the ethereum blockchain."),Object(a.b)("p",null,"Schema: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polywrap/monorepo/blob/prealpha/packages/js/plugins/ethereum/src/schema.graphql"},"Link")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export function getData(input: Input_getData): u32 {\n  const res = Ethereum_Module.callContractView({\n    address: input.address,\n    method: 'function get() view returns (uint256)',\n    args: null,\n    connection: input.connection,\n  }).unwrap();\n\n  return U32.parseInt(res);\n}\n")),Object(a.b)("h3",{id:"subgraph"},"Subgraph"),Object(a.b)("p",null,"The subgraph plugin enables wrappers to query The Graph's subgraphs."),Object(a.b)("p",null,"Schema: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polywrap/monorepo/blob/2947f956485decb43363f42c99c2a6176a25bde8/packages/js/plugins/graph-node/schema.graphql#L3-L9"},"Link")),Object(a.b)("h4",{id:"example-implementation"},"Example Implementation:"),Object(a.b)("p",null,"In our ",Object(a.b)("inlineCode",{parentName:"p"},"./src/schema.graphql")," file, we'll write the schema for our wrapper."),Object(a.b)("p",null,"At the top of this file, import the GraphNode module into your wrapper:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'#import { Module } into GraphNode from "wrap://ens/graph-node.polywrap.eth"\n')),Object(a.b)("p",null,"Then, define the types and fields on the ",Object(a.b)("inlineCode",{parentName:"p"},"querySubgraph")," method."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"  querySubgraph(\n    subgraphAuthor: String!\n    subgraphName: String!\n    query: String!\n  ): JSON!\n")),Object(a.b)("p",null,"We'll now implement the ",Object(a.b)("inlineCode",{parentName:"p"},"querySubgraph")," method in AssemblyScript."),Object(a.b)("p",null,"At the top of ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts"),", include these import statements:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphNode_Module, Args_querySubgraph } from './wrap';\nimport { JSON } from '@polywrap/wasm-as';\n")),Object(a.b)("p",null,"Then, implement the ",Object(a.b)("inlineCode",{parentName:"p"},"querySubgraph")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export function querySubgraph(args: Args_querySubgraph): JSON.Value {\n  const response = GraphNode_Module.querySubgraph({\n    subgraphAuthor: args.subgraphAuthor,\n    subgraphName: args.subgraphName,\n    query: args.query,\n  }).unwrap();\n\n  const json = JSON.parse(response);\n  const obj = json as JSON.Obj;\n  return obj.valueOf().get('data') as JSON.Value;\n}\n")),Object(a.b)("p",null,"Example query to test your method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"subgraphAuthor: 'ensdomains',\nsubgraphName: 'ens',\nquery: '{\\ndomains(first: 5){\\nid\\nname\\nlabelName\\nlabelhash\\n}\\n}',\n")),Object(a.b)("h3",{id:"http"},"HTTP"),Object(a.b)("p",null,"The HTTP plugin enables wrappers to perform HTTP queries in JavaScript applications."),Object(a.b)("p",null,"Schema: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/polywrap/monorepo/blob/2947f956485decb43363f42c99c2a6176a25bde8/packages/js/plugins/http/schema.graphql#L30-L33"},"Link")),Object(a.b)("h4",{id:"example-implementation-1"},"Example Implementation"),Object(a.b)("p",null,"In this example, we will implement a simple ",Object(a.b)("inlineCode",{parentName:"p"},"Ping")," method which pings CoinGecko to see their server status using an HTTP Get request from your wrapper."),Object(a.b)("p",null,"In our ",Object(a.b)("inlineCode",{parentName:"p"},"./src/schema.graphql file"),", we\u2019ll write the schema for our wrapper."),Object(a.b)("p",null,"At the top of this file, import the HTTP module into your wrapper:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'#import { Module, Request, Response } into HTTP from "wrap://ens/http.polywrap.eth"\n')),Object(a.b)("p",null,"Then, define the types and fields on the ",Object(a.b)("inlineCode",{parentName:"p"},"Ping")," method.  First, add a new ",Object(a.b)("inlineCode",{parentName:"p"},"Ping")," type at the bottom of the schema."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Ping {\n  gecko_says: String!\n}\n")),Object(a.b)("p",null,"Then, add an argument-less method called ",Object(a.b)("inlineCode",{parentName:"p"},"ping")," that returns a non-nullable ",Object(a.b)("inlineCode",{parentName:"p"},"Ping")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"Module")," type.\nOur completed schema looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'#import { Module, Request, Response } into HTTP from "wrap://ens/http.polywrap.eth"\ntype Module {\n  ping: Ping!\n}\n\ntype Ping {\n  gecko_says: String!\n}\n')),Object(a.b)("p",null,"Now, we'll implement the ",Object(a.b)("inlineCode",{parentName:"p"},"ping")," method in ",Object(a.b)("inlineCode",{parentName:"p"},"./src/index.ts")),Object(a.b)("p",null,"At the top of the file, we'll import the HTTP/Ping methods and types."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript="},"import {\n  HTTP_Module,\n  HTTP_ResponseType,\n  Ping,\n} from './wrap';\n")),Object(a.b)("p",null,"Then, implement Ping function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export function ping(): Ping {\n    \n  // Writing the HTTP request / response\n  const response = HTTP_Module.get({\n    url: 'https://api.coingecko.com/api/v3/ping',\n    request: {\n      headers: [],\n      urlParams: [],\n      body: '',\n      responseType: HTTP_ResponseType.TEXT,\n    },\n  }).unwrap();\n    \n  // Error handling for the response\n  if (!response || response.status !== 200 || !response.body) {\n    const errorMsg =\n      response && response.statusText\n        ? (response.statusText as string)\n        : 'An error occurred while fetching data from Coingecko API';\n    throw new Error(errorMsg);\n  }  \n    \n  const json = <JSON.Obj>JSON.parse(response.body);\n    \n // Response from Coingecko with field `geckoSays`\n  const geckoSays = json.getString('gecko_says');\n  if (geckoSays) {\n    return {\n      gecko_says: geckoSays.valueOf(),\n    };\n  }\n  throw new Error('Invalid response body!');\n}\n")),Object(a.b)("h3",{id:"logger"},"Logger"),Object(a.b)("p",null,"The Logger plugin enables logging in a Wasm wrapper, which can be useful for debugging."),Object(a.b)("p",null,"In our ",Object(a.b)("inlineCode",{parentName:"p"},"./src/schema.graphql file"),", import the Logger module into your wrapper:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'#import { Module } into Logger from "wrap://ens/js-logger.polywrap.eth"\n')),Object(a.b)("p",null,"Then in your implementation file ",Object(a.b)("inlineCode",{parentName:"p"},"./src/index.ts"),", import the Logger function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Logger_Module,\n  Logger_Logger_LogLevel,\n} from './wrap';\n")),Object(a.b)("p",null,"And use it like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"}," Logger_Module.log({\n    level: Logger_Logger_LogLevel.INFO,\n    message: `Insert useful log message here`,\n  });\n")),Object(a.b)("p",null,"When you run your test e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"yarn test:e2e"),", you will see the logged message in the console."))}s.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||b[m]||p;return n?a.a.createElement(h,o(o({ref:t},s),{},{components:n})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<p;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);