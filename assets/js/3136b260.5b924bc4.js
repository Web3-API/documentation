(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(175)),o=["components"],c={id:"client-js",title:"Client"},l={unversionedId:"reference/clients/js/client-js",id:"reference/clients/js/client-js",isDocsHomePage:!1,title:"Client",description:"The Polywrap JavaScript client exists to help developers integrate wrappers into their applications. It's designed to run in any environment that can execute JavaScript (think websites, node scripts, etc.).",source:"@site/docs/reference/clients/js/client-js.md",slug:"/reference/clients/js/client-js",permalink:"/reference/clients/js/client-js",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/reference/clients/js/client-js.md",version:"current",sidebar:"docs",previous:{title:"Run",permalink:"/reference/cli/commands/run"},next:{title:"Client Config",permalink:"/reference/clients/js/client-config"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("a",{href:"https://www.npmjs.com/package/@polywrap/client-js",target:"_blank",rel:"noopener noreferrer"},Object(a.b)("img",{src:"https://img.shields.io/npm/v/@polywrap/client-js.svg",alt:"npm"})),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("p",null,"The Polywrap JavaScript client exists to help developers integrate wrappers into their applications. It's designed to run in any environment that can execute JavaScript (think websites, node scripts, etc.)."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm install @polywrap/client-js\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Use an ",Object(a.b)("inlineCode",{parentName:"p"},"import")," or ",Object(a.b)("inlineCode",{parentName:"p"},"require")," statement, depending on which your environment supports."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'import { PolywrapClient } from "@polywrap/client-js";\n')),Object(a.b)("p",null,"Then, you will be able to use the ",Object(a.b)("inlineCode",{parentName:"p"},"PolywrapClient")," like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// Simply instantiate the PolywrapClient.\nconst client = new PolywrapClient();\n\n// ...And then you\'ll be able to use the `invoke`\n// method to execute methods within the wrapper\n// located at the specified URI.\nconst result = await client.invoke({\n  uri: \'ens/api.example.eth\',\n  method: "doSomething",\n  args: {\n    variable: 555,\n    value: "important value"\n  }\n});\n')))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);