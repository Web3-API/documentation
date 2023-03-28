(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=(r(0),r(194)),o=r(199),c=r(200);const i={id:"types-for-app",title:"Generate types for your app"},p={unversionedId:"tutorials/integrate-wrappers/types-for-app",id:"tutorials/integrate-wrappers/types-for-app",isDocsHomePage:!1,title:"Generate types for your app",description:"The polywrap CLI's codegen command interacts with",source:"@site/docs/tutorials/integrate-wrappers/types-for-app.md",slug:"/tutorials/integrate-wrappers/types-for-app",permalink:"/tutorials/integrate-wrappers/types-for-app",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/integrate-wrappers/types-for-app.md",version:"current",sidebar:"docs",previous:{title:"Configure the Polywrap Client",permalink:"/tutorials/integrate-wrappers/configure-client"},next:{title:"React integration",permalink:"/tutorials/integrate-wrappers/react-integration"}},l=[{value:"App Manifest content",id:"app-manifest-content",children:[]},{value:"Wrapper Schema for apps",id:"wrapper-schema-for-apps",children:[]}],s={toc:l};function u(e){let{components:t,...r}=e;return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"../../reference/cli/polywrap-cli"},Object(n.b)("inlineCode",{parentName:"a"},"polywrap"))," CLI's ",Object(n.b)("a",{parentName:"p",href:"../../reference/cli/commands/codegen"},Object(n.b)("inlineCode",{parentName:"a"},"codegen"))," command interacts with\nan App Manifest to automatically generate wrapper types in the language of your application."),Object(n.b)("h2",{id:"app-manifest-content"},"App Manifest content"),Object(n.b)("p",null,"The App Manifest contains the name of the project, the programming language used to write it,\nand the location of the wrapper schema that states which code to generate.\nIt can optionally contain an array of ",Object(n.b)("a",{parentName:"p",href:"/tutorials/understanding-uri-redirects"},"URI Redirects"),"."),Object(n.b)(o.a,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"schema",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-yaml"},"format: # The manifest format version\nname: # Name of project\nlanguage: # App programming language\nschema: # Path to wrapper schema\nimport_redirects: # (Optional) Array of URI redirects\n  - uri: # Source URI to be redirected\n    schema: # Path to schema of the module to which URI will be redirected\n"))),Object(n.b)(c.a,{value:"example",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-yaml"},"format: 0.2.0\nproject:\n  name: hello-world\n  type: app/typescript\nsource:\n  schema: ./schema.graphql\n")))),Object(n.b)("h2",{id:"wrapper-schema-for-apps"},"Wrapper Schema for apps"),Object(n.b)("p",null,"To automatically generate types for an application or test suite, we must tell the Polywrap CLI which types to generate.\nThis is done using a ",Object(n.b)("a",{parentName:"p",href:"../wrapper-schema"},"Wrapper Schema"),". "),Object(n.b)("p",null,"In your wrapper schema, you can add an import statement for each wrapper you're using in your project.\nYou can use the ",Object(n.b)("inlineCode",{parentName:"p"},"*")," syntax to import a wrapper's module and all of its types, or you can list the types you'd like to use."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Wrapper schema for the Hello World app"',title:'"Wrapper',schema:!0,for:!0,the:!0,Hello:!0,World:!0,'app"':!0},'#import * into HelloWorld from "ens/helloworld.polytest.eth"\n')),Object(n.b)("p",null,"Learn more about schema imports at ",Object(n.b)("a",{parentName:"p",href:"../wrapper-schema#imports"},"Wrapper Schema"),"."))}u.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.a.createElement(b,i(i({ref:t},l),{},{components:r})):n.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},196:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},197:function(e,t,r){"use strict";var a=r(0),n=r(198);t.a=function(){const e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},198:function(e,t,r){"use strict";var a=r(0);const n=Object(a.createContext)(void 0);t.a=n},199:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(197),c=r(196),i=r(57),p=r.n(i);const l=37,s=39;t.a=function(e){const{lazy:t,block:r,defaultValue:i,values:u,groupId:m,className:f}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(o.a)(),[h,y]=Object(a.useState)(i),g=a.Children.toArray(e.children),O=[];if(null!=m){const e=b[m];null!=e&&e!==h&&u.some(t=>t.value===e)&&y(e)}const w=e=>{const t=e.target,r=O.indexOf(t),a=g[r].props.value;y(a),null!=m&&(d(m,a),setTimeout(()=>{(function(e){const{top:t,left:r,bottom:a,right:n}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:c}=window;return t>=0&&n<=c&&a<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout(()=>t.classList.remove(p.a.tabItemActive),2e3))},150))},v=e=>{var t;let r;switch(e.keyCode){case s:{const t=O.indexOf(e.target)+1;r=O[t]||O[0];break}case l:{const t=O.indexOf(e.target)-1;r=O[t]||O[O.length-1];break}}null===(t=r)||void 0===t||t.focus()};return n.a.createElement("div",{className:"tabs-container"},n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},f)},u.map(e=>{let{value:t,label:r}=e;return n.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(c.a)("tabs__item",p.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:e=>O.push(e),onKeyDown:v,onFocus:w,onClick:w},r)})),t?Object(a.cloneElement)(g.filter(e=>e.props.value===h)[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},g.map((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h}))))}},200:function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.a=function(e){let{children:t,hidden:r,className:a}=e;return n.a.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}}}]);