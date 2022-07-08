(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),o=(n(0),n(164)),i=n(185),l=n(186),c=["components"],s={id:"deploy-pipeline",title:"Configure Polywrap deployment pipeline"},p={unversionedId:"quick-start/build-and-deploy-wasm-wrappers/deploy-pipeline",id:"quick-start/build-and-deploy-wasm-wrappers/deploy-pipeline",isDocsHomePage:!1,title:"Configure Polywrap deployment pipeline",description:"Polywrap makes it easy to create an automated wrapper deployment pipeline using a Deploy Manifest polywrap.deploy.yaml file and the Polywrap CLI's deploy command.",source:"@site/docs/quick-start/build-and-deploy-wasm-wrappers/deploy-pipeline.md",slug:"/quick-start/build-and-deploy-wasm-wrappers/deploy-pipeline",permalink:"/quick-start/build-and-deploy-wasm-wrappers/deploy-pipeline",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/build-and-deploy-wasm-wrappers/deploy-pipeline.md",version:"current",sidebar:"docs",previous:{title:"Publish to ENS",permalink:"/quick-start/build-and-deploy-wasm-wrappers/publish-to-ens"},next:{title:"Plugin an existing JS SDK",permalink:"/quick-start/create-plugin-wrappers/create-js-plugin"}},u=[{value:"Declaration",id:"declaration",children:[]},{value:"Content",id:"content",children:[]},{value:"Deployment Modules",id:"deployment-modules",children:[{value:"IPFS",id:"ipfs",children:[]},{value:"ENS",id:"ens",children:[]},{value:"Local Dev ENS",id:"local-dev-ens",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Polywrap makes it easy to create an automated wrapper deployment pipeline using a Deploy Manifest ",Object(o.b)("inlineCode",{parentName:"p"},"polywrap.deploy.yaml")," file and the Polywrap CLI's ",Object(o.b)("a",{parentName:"p",href:"../../reference/cli/commands/deploy"},Object(o.b)("inlineCode",{parentName:"a"},"deploy"))," command.\nThis section helps you configure a Deploy Manifest, which defines the stages of your deployment pipeline.\nOnce you've configured the manifest, you can use the Polywrap CLI's ",Object(o.b)("a",{parentName:"p",href:"../../reference/cli/commands/deploy"},Object(o.b)("inlineCode",{parentName:"a"},"deploy"))," command to execute the pipeline."),Object(o.b)("h2",{id:"declaration"},"Declaration"),Object(o.b)("p",null,"The location of the deployment manifest should be declared in your Polywrap Manifest ",Object(o.b)("inlineCode",{parentName:"p"},"polywrap.yaml")," with a field labeled ",Object(o.b)("em",{parentName:"p"},"deploy"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:'language-yaml"'},"deploy: ./polywrap.deploy.yaml\n")),Object(o.b)("h2",{id:"content"},"Content"),Object(o.b)("p",null,"The concents of a Deploy manifest consists of one or more stages, each of which has some common fields and a set of configuration\noptions particular to the module. The result of a stage can be passed as input to a later stage."),Object(o.b)(i.a,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"schema",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"format: # The manifest format version\nstages: # Each stage describes an event in the pipeline\n  [name]: # Name of stage, set by the user\n    package: # Deployment module\n    uri: # The wrap URI of source content\n    depends_on: # (Optional) Use prior stage's output\n    config: # Configuration for the deployment module\n"))),Object(o.b)(l.a,{value:"example",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"format: 0.1.0\nstages:\n  ipfs_deploy:\n    package: ipfs\n    uri: fs/./build\n    config:\n      gatewayUri: 'ipfs.wrappers.io'\n  ens_deploy:\n    package: ens\n    depends_on: ipfs_deploy\n    config:\n      domainName: uniswapv3.eth\n      provider: 'https://rinkeby.infura.io/v3/d119148113c047ca90f0311ed729c467'\n      ensRegistryAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'\n      privateKey: '0xNeverShareYourPrivateKey'\n")))),Object(o.b)("h2",{id:"deployment-modules"},"Deployment Modules"),Object(o.b)("p",null,"Polywrap currently supports three types of deployment modules: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ipfs"),": pins a folder's contents to IPFS and returns the content hash (CID)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ens"),": points an ENS domain to an IPFS content hash"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"local-dev-ens"),": registers a domain on a local test environment and points the domain to an IPFS content hash")),Object(o.b)("h3",{id:"ipfs"},"IPFS"),Object(o.b)("p",null,"The IPFS module pins a folder's contents to IPFS and returns the content hash (CID).\nIt can be used to deploy a wrapper by ",Object(o.b)("a",{parentName:"p",href:"https://docs.ipfs.io/how-to/pin-files/"},"pinning")," the contents of your project's build folder to the IPFS network. "),Object(o.b)("p",null,"The IPFS module's custom configuration requires an IPFS gateway URI so the CLI knows where to send the files."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: ipfs configuration"',title:'"Example:',ipfs:!0,'configuration"':!0},"config:\n  gatewayUri: 'ipfs.wrappers.io' # IPFS gateway URI\n")),Object(o.b)("h3",{id:"ens"},"ENS"),Object(o.b)("p",null,"The ENS module accepts an IPFS content hash (CID) as input and points an ENS domain name to it."),Object(o.b)("p",null,"The ENS module's custom configuration requires three arguments and accepts an optional fourth:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"domainName: the ENS domain name owned by your Ethereum account"),Object(o.b)("li",{parentName:"ul"},"provider: an Ethereum JSON RPC provider"),Object(o.b)("li",{parentName:"ul"},"ensRegistryAddress: the Ethereum address of the ENS Registry smart contract"),Object(o.b)("li",{parentName:"ul"},"privateKey: (optional) your Ethereum account's private key, used when the Ethereum provider cannot produce an account signer")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: ens configuration"',title:'"Example:',ens:!0,'configuration"':!0},"config:\n  domainName: 'wrapper.eth' # ENS domain name\n  provider: 'http://localhost:4545' # an Ethereum JSON RPC provider URI\n  ensRegistryAddress: '0x...' # The ENS Registry contract address\n  privateKey: '' # a private key may be required to sign ethereum transactions\n")),Object(o.b)("h3",{id:"local-dev-ens"},"Local Dev ENS"),Object(o.b)("p",null,"The Local Dev ENS module accepts an IPFS content hash (CID) as input, registers an ENS domain name, and points the domain name to the IPFS CID."),Object(o.b)("p",null,"The Local Dev ENS module was created with Polywrap's default test environment infrastructure in mind. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Polywrap's default test environment can be started with the ",Object(o.b)("inlineCode",{parentName:"p"},"polywrap infra up")," CLI command and stopped with the ",Object(o.b)("inlineCode",{parentName:"p"},"polywrap infra down")," CLI command."))),Object(o.b)("p",null,"The module assumes ENS infrastructure is set up on a local Ethereum network with the ENS smart contracts deployed at the following addresses:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ENS Registry: 0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab"),Object(o.b)("li",{parentName:"ul"},"ENS Resolver: 0x5b1869D9A4C187F2EAa108f3062412ecf0526b24"),Object(o.b)("li",{parentName:"ul"},"ENS Registrar: 0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb"),Object(o.b)("li",{parentName:"ul"},"ENS Reverse Lookup: 0xe982E462b094850F12AF94d21D470e21bE9D0E9C")),Object(o.b)("p",null,"The Local Dev ENS module's custom configuration requires two arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"domainName: the desired ENS domain name to be registered"),Object(o.b)("li",{parentName:"ul"},"ports: contains the port of the local Ethereum test network")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: local-dev-ens configuration"',title:'"Example:',"local-dev-ens":!0,'configuration"':!0},"config:\n  domainName: 'wrapper.eth' # ENS domain name\n  ports:\n    ethereum: 4545\n")))}m.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},177:function(e,t,n){"use strict";var a=n(0),r=n(178);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},178:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(177),i=n(166),l=n(59),c=n.n(l);var s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,d=e.groupId,m=e.className,b=Object(o.a)(),f=b.tabGroupChoices,h=b.setTabGroupChoices,y=Object(a.useState)(l),v=y[0],g=y[1],O=a.Children.toArray(e.children),j=[];if(null!=d){var w=f[d];null!=w&&w!==v&&u.some((function(e){return e.value===w}))&&g(w)}var N=function(e){var t=e.target,n=j.indexOf(t),a=O[n].props.value;g(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case p:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case s:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},186:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);