(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{162:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=t,d=m["".concat(a,".").concat(f)]||m[f]||s[f]||c;return r?o.a.createElement(d,i(i({ref:n},l),{},{components:r})):o.a.createElement(d,i({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return m}));var t=r(3),o=r(8),c=(r(0),r(162)),a=["components"],i={id:"plugin",title:"Plugin"},p={unversionedId:"reference/cli/commands/plugin",id:"reference/cli/commands/plugin",isDocsHomePage:!1,title:"Plugin",description:"`",source:"@site/docs/reference/cli/commands/plugin.md",slug:"/reference/cli/commands/plugin",permalink:"/reference/cli/commands/plugin",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/reference/cli/commands/plugin.md",version:"current",sidebar:"docs",previous:{title:"Deploy",permalink:"/reference/cli/commands/deploy"},next:{title:"Infra",permalink:"/reference/cli/commands/infra"}},l=[],u={toc:l};function m(e){var n=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"Usage: w3 plugin|p [options] [command]\n\nBuild/generate types for the plugin\n\nOptions:\n  -h, --help         display help for command\n\nCommands:\n  codegen [options]\n  help [command]     display help for command\n")))}m.isMDXComponent=!0}}]);