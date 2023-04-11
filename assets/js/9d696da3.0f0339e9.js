"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[4455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=f(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),w=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{w&&i(w)}),[w]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var w=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),f=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:f},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function v(e){const t=(0,w.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},3345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={id:"running-workflows",title:"Running Workflows"},s=void 0,u={unversionedId:"tutorials/workflows/running-workflows",id:"tutorials/workflows/running-workflows",title:"Running Workflows",description:"A workflow is a configurable process that will execute one or more Polywrap wrapper invocations.",source:"@site/docs/tutorials/workflows/running-workflows.md",sourceDirName:"tutorials/workflows",slug:"/tutorials/workflows/running-workflows",permalink:"/tutorials/workflows/running-workflows",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/workflows/running-workflows.md",tags:[],version:"current",frontMatter:{id:"running-workflows",title:"Running Workflows"},sidebar:"docs",previous:{title:"Interface instances",permalink:"/tutorials/interfaces/interface-instances"},next:{title:"Workflow Validation",permalink:"/tutorials/workflows/workflow-validation"}},c={},p=[{value:"Writing workflows",id:"writing-workflows",level:2},{value:"Configuring the Client",id:"configuring-the-client",level:2},{value:"Workflow output",id:"workflow-output",level:2}],f={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A workflow is a configurable process that will execute one or more Polywrap wrapper invocations.\nWorkflows are defined in YAML or JSON. Workflows can be run with the ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/test"},(0,a.kt)("inlineCode",{parentName:"a"},"test"))," command of the ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/polywrap-cli"},(0,a.kt)("inlineCode",{parentName:"a"},"polywrap"))," CLI."),(0,a.kt)("h2",{id:"writing-workflows"},"Writing workflows"),(0,a.kt)("p",null,"A workflow consists of a tree of ",(0,a.kt)("inlineCode",{parentName:"p"},"Jobs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Steps"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," is an independent, named unit that can contain an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"Steps")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"steps")," and/or a set of sub-",(0,a.kt)("inlineCode",{parentName:"p"},"Jobs")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"jobs"),".\nEach ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," runs asynchronously, and therefore ",(0,a.kt)("inlineCode",{parentName:"p"},"Jobs")," may run in any order. Although all the sub-jobs are guaranteed to be executed after the parent job completes. Outputs of the parent jobs can be referenced as the input of any of its sub-jobs.\nBy default, ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/test"},(0,a.kt)("inlineCode",{parentName:"a"},"test"))," will run all jobs in a workflow.\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," index can be provided to ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/test"},(0,a.kt)("inlineCode",{parentName:"a"},"test"))," to execute a specific job."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Step")," is a wrapper invocation. An array of ",(0,a.kt)("inlineCode",{parentName:"p"},"Steps")," runs synchronously--i.e. in the order defined in the workflow."),(0,a.kt)("p",null,"The result of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Step")," can be passed as an input argument to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Step")," that is its child in the tree hierarchy."),(0,a.kt)(o.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: # name of the workflow\njobs: # a set of one or more jobs\n  case1: # a job, named by the user\n    steps: # an array of steps\n      - uri: fs/build # uri of invocation\n        method: query # method to invoke\n        args: # method arguments\n        config: # (Optional) modified client configuration for this call\n"))),(0,a.kt)(l.Z,{value:"example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: simple-storage\njobs:\n  cases:\n    steps:\n    - uri: fs/build\n      method: deployContract\n      args:\n        connection:\n          networkNameOrChainId: "testnet"\n    jobs:\n      case1:\n        steps:\n        - uri: fs/build\n          method: setData\n          args:\n            address: "$cases.0.data"\n            value: 100\n        - uri: fs/build\n          method: getData\n          args:\n            address: "$cases.0.data"\n')))),(0,a.kt)("h2",{id:"configuring-the-client"},"Configuring the Client"),(0,a.kt)("p",null,"Users can configure the Polywrap client used to execute a workflow.\nThis is done by providing the Polywrap CLI's ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/test"},(0,a.kt)("inlineCode",{parentName:"a"},"test"))," command with the path to a custom\nconfiguration file.\nThe configuration file can be a JavaScript or TypeScript module.\nIt must implement and export a function named ",(0,a.kt)("inlineCode",{parentName:"p"},"getClientConfig"),". "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"getClientConfig")," function accepts the default ",(0,a.kt)("a",{parentName:"p",href:"../integrate-wrappers/configure-client"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientConfig"))," as an argument and returns the custom Polywrap\nclient configuration.\nIt must be implemented with the following signature:"),(0,a.kt)(o.Z,{defaultValue:"typescript",values:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// asynchronous option\nexport async function getClientConfig(\n  defaultConfigs: Partial<PolywrapClientConfig>\n): Promise<Partial<PolywrapClientConfig>>\n\n// synchronous option\nexport function getClientConfig(\n  defaultConfigs: Partial<PolywrapClientConfig>\n): Partial<PolywrapClientConfig>\n"))),(0,a.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// asynchronous option\nexport async function getClientConfig(defaultConfigs)\n\n// synchronous option\nexport function getClientConfig(defaultConfigs)\n")))),(0,a.kt)("h2",{id:"workflow-output"},"Workflow output"),(0,a.kt)("p",null,"The output of a workflow can be written as a file in the JSON or YAML format with the ",(0,a.kt)("inlineCode",{parentName:"p"},"output-file")," option of the Polywrap CLI's\n",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/test"},(0,a.kt)("inlineCode",{parentName:"a"},"test"))," command."),(0,a.kt)("p",null,"Workflow output is printed to the console by default.\nConsole output can be suppressed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"quiet")," option of the Polywrap CLI's ",(0,a.kt)("a",{parentName:"p",href:"../../reference/cli/commands/test"},(0,a.kt)("inlineCode",{parentName:"a"},"test"))," command."))}m.isMDXComponent=!0}}]);