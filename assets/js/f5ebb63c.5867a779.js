(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=(a(0),a(194)),o=a(199),i=a(200);const l={id:"add-metadata",title:"Add Metadata"},s={unversionedId:"tutorials/create-wasm-wrappers/add-metadata",id:"tutorials/create-wasm-wrappers/add-metadata",isDocsHomePage:!1,title:"Add Metadata",description:"Developers can add metadata to their wrappers by writing a Meta Manifest polywrap.meta.yaml file.",source:"@site/docs/tutorials/create-wasm-wrappers/add-metadata.md",slug:"/tutorials/create-wasm-wrappers/add-metadata",permalink:"/tutorials/create-wasm-wrappers/add-metadata",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-wasm-wrappers/add-metadata.md",version:"current",sidebar:"docs",previous:{title:"Default plugins",permalink:"/tutorials/create-wasm-wrappers/default-plugins"},next:{title:"Writing tests with TypeScript",permalink:"/tutorials/test-wasm-wrappers/end-to-end-test"}},c=[{value:"Declaration",id:"declaration",children:[]},{value:"Content",id:"content",children:[]}],p={toc:c};function u(e){let{components:t,...a}=e;return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Developers can add metadata to their wrappers by writing a Meta Manifest ",Object(r.b)("inlineCode",{parentName:"p"},"polywrap.meta.yaml")," file.\nMetadata makes it easier for application developers to display a wrapper, make it searchable, and find helpful links."),Object(r.b)("h2",{id:"declaration"},"Declaration"),Object(r.b)("p",null,"Its location must be referenced in the ",Object(r.b)("a",{parentName:"p",href:"./polywrap-manifest"},"Polywrap Manifest")," with a field labeled ",Object(r.b)("em",{parentName:"p"},"meta"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"meta: ./polywrap.meta.yaml\n")),Object(r.b)("h2",{id:"content"},"Content"),Object(r.b)("p",null,"The Meta Manifest contains titles, descriptions, images, tags, and links that application developers can display\nwhen presenting or discussing your wrapper."),Object(r.b)(o.a,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"format: # The manifest format version\ndisplayName: # (Optional) Name of the wrapper that users should use for presentation\nsubtext: # (Optional) Subtext of display name; brief description of the wrapper\ndescription: # (Optional) Detailed description\nrepository: # (Optional) Repository URL\nicon: # (Optional) Path to wrapper icon or log\ntags: # (Optional) Array of terms that can help find your wrapper in search\nlinks: # (Optional) Array of links relevant to your wrapper\n  - name: # Name of link\n    icon: # (Optional) Icon associated with link\n    url: # (Optional) Link URL\n"))),Object(r.b)(i.a,{value:"example",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Fully configured Meta Manifest"',title:'"Fully',configured:!0,Meta:!0,'Manifest"':!0},"format: 0.1.0\ndisplayName: Simple Storage\nsubtext: Simple Storage on Ethereum\ndescription: Set and get a value on an Ethereum smart contract using Polywrap.\nrepository: https://github.com/polywrap/demos\nicon: ./meta/icon.png\ntags:\n  - simple\n  - polywrap\nlinks:\n  - name: dApp\n    icon: ./meta/link.svg\n    url: https://demo.simplestorage.polywrap.io\n  - name: Polywrap\n    icon: ./meta/link.svg\n    url: https://polywrap.io\n")))))}u.isMDXComponent=!0},194:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?r.a.createElement(f,l(l({ref:t},c),{},{components:a})):r.a.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},196:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},197:function(e,t,a){"use strict";var n=a(0),r=a(198);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},198:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(197),i=a(196),l=a(57),s=a.n(l);const c=37,p=39;t.a=function(e){const{lazy:t,block:a,defaultValue:l,values:u,groupId:m,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(o.a)(),[y,w]=Object(n.useState)(l),h=n.Children.toArray(e.children),g=[];if(null!=m){const e=f[m];null!=e&&e!==y&&u.some(t=>t.value===e)&&w(e)}const v=e=>{const t=e.target,a=g.indexOf(t),n=h[a].props.value;w(n),null!=m&&(b(m,n),setTimeout(()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&n<=o&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout(()=>t.classList.remove(s.a.tabItemActive),2e3))},150))},O=e=>{var t;let a;switch(e.keyCode){case p:{const t=g.indexOf(e.target)+1;a=g[t]||g[0];break}case c:{const t=g.indexOf(e.target)-1;a=g[t]||g[g.length-1];break}}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},u.map(e=>{let{value:t,label:a}=e;return r.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:e=>g.push(e),onKeyDown:O,onFocus:v,onClick:v},a)})),t?Object(n.cloneElement)(h.filter(e=>e.props.value===y)[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y}))))}},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){let{children:t,hidden:a,className:n}=e;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);