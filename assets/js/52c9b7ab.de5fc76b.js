"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[4745],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},5414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={id:"infra-pipeline",title:"Configure Polywrap infrastructure pipeline"},s=void 0,u={unversionedId:"tutorials/test-wasm-wrappers/infra-pipeline",id:"tutorials/test-wasm-wrappers/infra-pipeline",title:"Configure Polywrap infrastructure pipeline",description:"The Polywrap CLI infra command interacts with an Infra Manfiest",source:"@site/docs/tutorials/test-wasm-wrappers/infra-pipeline.md",sourceDirName:"tutorials/test-wasm-wrappers",slug:"/tutorials/test-wasm-wrappers/infra-pipeline",permalink:"/tutorials/test-wasm-wrappers/infra-pipeline",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/test-wasm-wrappers/infra-pipeline.md",tags:[],version:"current",frontMatter:{id:"infra-pipeline",title:"Configure Polywrap infrastructure pipeline"},sidebar:"docs",previous:{title:"Writing tests with TypeScript",permalink:"/tutorials/test-wasm-wrappers/end-to-end-test"},next:{title:"Configure Polywrap build pipeline",permalink:"/tutorials/build-and-deploy-wasm-wrappers/build-pipeline"}},c={},p=[{value:"Declaration",id:"declaration",level:2},{value:"Content",id:"content",level:2},{value:"Infrastructure Modules",id:"infrastructure-modules",level:2},{value:"Local",id:"local",level:3},{value:"Remote",id:"remote",level:3},{value:"Default",id:"default",level:3}],m={toc:p},d="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Polywrap CLI ",(0,n.kt)("a",{parentName:"p",href:"../../reference/cli/commands/infra"},(0,n.kt)("inlineCode",{parentName:"a"},"infra"))," command interacts with an Infra Manfiest\n",(0,n.kt)("inlineCode",{parentName:"p"},"polywrap.infra.yaml")," file to to help users manage local infrastructure for their wrappers.\nThe Infra Manifest declares environmental variables and infrastructure modules that describe the locations of\nlocal, remote, or default ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/"},"docker-compose")," files.\nThe Polywrap CLI ",(0,n.kt)("a",{parentName:"p",href:"../../reference/cli/commands/infra"},(0,n.kt)("inlineCode",{parentName:"a"},"infra"))," command reads the manifest and launches or halts\nmodules as directed by the user."),(0,n.kt)("h2",{id:"declaration"},"Declaration"),(0,n.kt)("p",null,"Unlike some manifests, the Infra Manifest does not need to be declared in your Polywrap manifest."),(0,n.kt)("h2",{id:"content"},"Content"),(0,n.kt)("p",null,"The Infra Manifest consists of environmental variable declarations and one or more infrastructure modules.\nEach module points to a local, remote, or default docker-compose file."),(0,n.kt)(l.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"schema",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"format: # The manifest format version\nenv: # Declare environmental variables here\nmodules:\n  myRemote: # A remote package with a docker-compose file\n    package: # Package name\n    version: # Package version\n    registry: # Package registry name\n    dockerComposePath: # (Optional) Path to docker-compose file in the package directory\n  myLocal: # A local package with a docker-compose file\n    path: # Path to the package\n  eth-ens-ipfs: default # A module available by default\n"))),(0,n.kt)(o.Z,{value:"example",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'format: 0.1.0\nenv:\n  IPFS_PORT: $ENV_IPFS_PORT\n  DEV_SERVER_PORT: 4040\n  DEV_SERVER_ETH_TESTNET_PORT: 8545\nmodules:\n  ipfs:\n    package: "@namestys/ipfs-infra"\n    version: "0.0.1"\n    registry: npm\n  dev-server:\n    path: ../local-packages/dev-server\n')))),(0,n.kt)("h2",{id:"infrastructure-modules"},"Infrastructure Modules"),(0,n.kt)("p",null,"An Infra Manifest can declare any number of infrastructure modules.\nPolywrap currently supports three types of infrastructure modules: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A local module exists on your local filesystem."),(0,n.kt)("li",{parentName:"ul"},"A remote module is a package hosted by a package registry."),(0,n.kt)("li",{parentName:"ul"},"The default module is included with the CLI.")),(0,n.kt)("h3",{id:"local"},"Local"),(0,n.kt)("p",null,"A local infrastructure module is a path from the Infra Manifest to a local folder with a docker-compose file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: local module configuration"',title:'"Example:',local:!0,module:!0,'configuration"':!0},"format: 0.1.0\nmodules:\n  myLocal:\n    path: ../local-packages/myLocal\n")),(0,n.kt)("h3",{id:"remote"},"Remote"),(0,n.kt)("p",null,"A remote infrastructure module is a package hosted at a package registry.\nThe package must contain a docker-compose file.\nThe path to the docker-compose file must be declared in the Infra Manifest if the file is not located in the package root."),(0,n.kt)("p",null,"Remote packages can be shared.\nUsers can add remote packages to their manifest to replicate the infrastructure modules defined by other users or projects."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: remote module configuration"',title:'"Example:',remote:!0,module:!0,'configuration"':!0},'format: 0.1.0\nmodules:\n  myIpfsNode:\n    package: "@namestys/ipfs-node"\n    version: "1.0.2"\n    registry: npm\n    dockerComposePath: ./config/docker-compose.yaml\n')),(0,n.kt)("h3",{id:"default"},"Default"),(0,n.kt)("p",null,"A default infrastructure module is included with the ",(0,n.kt)("a",{parentName:"p",href:"../../reference/cli/polywrap-cli"},(0,n.kt)("inlineCode",{parentName:"a"},"polywrap"))," CLI.\nIt is declared in the Infra Manifest as a module named ",(0,n.kt)("em",{parentName:"p"},"eth-ens-ipfs")," and the value ",(0,n.kt)("em",{parentName:"p"},"default"),"."),(0,n.kt)("p",null,"If an Infra Manifest is not found, the Polywrap CLI ",(0,n.kt)("a",{parentName:"p",href:"../../reference/cli/commands/infra"},(0,n.kt)("inlineCode",{parentName:"a"},"infra"))," command can still use\nthis module.\nTo use the default module without an Infra Manifest, pass ",(0,n.kt)("inlineCode",{parentName:"p"},"eth-ens-ipfs")," as an argument to the ",(0,n.kt)("a",{parentName:"p",href:"../../reference/cli/commands/infra"},(0,n.kt)("inlineCode",{parentName:"a"},"infra"))," command's ",(0,n.kt)("inlineCode",{parentName:"p"},"modules")," option:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx polywrap infra up --modules=eth-ens-ipfs\n")),(0,n.kt)("p",null,"The default infrastructure module defines a docker container with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A test server at http://localhost:",(0,n.kt)("strong",{parentName:"li"},"4040")),(0,n.kt)("li",{parentName:"ul"},"A Ganache Ethereum test network at http://localhost:",(0,n.kt)("strong",{parentName:"li"},"8545")),(0,n.kt)("li",{parentName:"ul"},"An IPFS node at http://localhost:",(0,n.kt)("strong",{parentName:"li"},"5001"))),(0,n.kt)("p",null,"It also sets up ENS smart contracts at initialization, so you can build wrappers and deploy them to an ENS registry\non your locally hosted testnet. The Ethereum address of the ENS registry is 0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: local module configuration"',title:'"Example:',local:!0,module:!0,'configuration"':!0},"format: 0.1.0\nmodules:\n  eth-ens-ipfs: default\n")))}f.isMDXComponent=!0}}]);