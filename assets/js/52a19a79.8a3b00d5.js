(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=(n(0),n(194)),l=n(199),b=n(200);const i={id:"wrapper-schema",title:"Wrapper Schema"},p={unversionedId:"tutorials/wrapper-schema",id:"tutorials/wrapper-schema",isDocsHomePage:!1,title:"Wrapper Schema",description:"Every wrapper project has a schema.",source:"@site/docs/tutorials/wrapper-schema.md",slug:"/tutorials/wrapper-schema",permalink:"/tutorials/wrapper-schema",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/wrapper-schema.md",version:"current",sidebar:"docs",previous:{title:"schema-bind",permalink:"/reference/schema/schema-bind"},next:{title:"Understanding plugins",permalink:"/tutorials/understanding-plugins"}},c=[{value:"Declaration",id:"declaration",children:[]},{value:"Codegen",id:"codegen",children:[]},{value:"Language Syntax",id:"language-syntax",children:[{value:"Custom Types",id:"custom-types",children:[]},{value:"Nullability",id:"nullability",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Imports",id:"imports",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Default Types",id:"default-types",children:[{value:"Basic Types",id:"basic-types",children:[]},{value:"Complex Types",id:"complex-types",children:[]},{value:"Generic Types",id:"generic-types",children:[]}]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Environmental Variables",id:"environmental-variables",children:[{value:"Declare the Env object",id:"declare-the-env-object",children:[]},{value:"Add the @env directive",id:"add-the-env-directive",children:[]}]}],o={toc:c};function m(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Every wrapper project has a schema.\nThe schema defines the wrapper's dependencies, methods, and custom types.\nIn short, it's an interface describing how to use the wrapper."),Object(r.b)("p",null,"The schema is a sort of contract between a wrapper's developers and its users.\nA Wasm wrapper will not compile unless it implements and exports all of the methods declared in the schema.\nA Wasm wrapper's users can be certain that all of the methods declared in a schema are callable using the declared method signatures.\nPlugin wrappers do not have this same guarantee.\nHowever, the client will throw an exception if a user attempts to invoke a method and the method is not found."),Object(r.b)("h2",{id:"declaration"},"Declaration"),Object(r.b)("p",null,"A wrapper project's schema must be declared in the project manifest (Polywrap Manifest or ",Object(r.b)("a",{parentName:"p",href:"./create-plugin-wrappers/plugin-manifest"},"Plugin Manifest"),")."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"schema: ./src/schema.graphql\n")),Object(r.b)("h2",{id:"codegen"},"Codegen"),Object(r.b)("p",null,"The wrapper schema tells the Polywrap compiler which types and serialization logic to generate.\nGenerated types are updated every time you ",Object(r.b)("a",{parentName:"p",href:"../reference/cli/commands/codegen"},Object(r.b)("inlineCode",{parentName:"a"},"build"))," the wrapper.\nThe ",Object(r.b)("a",{parentName:"p",href:"../reference/cli/polywrap-cli"},Object(r.b)("inlineCode",{parentName:"a"},"polywrap"))," CLI also provides a ",Object(r.b)("a",{parentName:"p",href:"../reference/cli/commands/codegen"},Object(r.b)("inlineCode",{parentName:"a"},"codegen"))," command to\nquickly update the generated ",Object(r.b)("inlineCode",{parentName:"p"},"wrap")," folder where generated types are stored."),Object(r.b)("p",null,"The Polywrap compiler generates types for method arguments and custom schema types.\nWrapper developers must use the generated method arguments for methods declared in the schema,\nand generated types for method return values when the return value is of a custom type.\nThe generated types come with serialization logic that allows Wrappers to communicate with the client."),Object(r.b)("p",null,"The following example demonstrates this practice."),Object(r.b)(l.a,{defaultValue:"declaration",values:[{label:"Declaration",value:"declaration"},{label:"Implementation",value:"implementation"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"declaration",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type Module {\n  foo(\n    bar: String!\n    arg: Int!\n  ): ReturnType!\n}\n\ntype ReturnType {\n  prop: Int!\n}\n"))),Object(r.b)(b.a,{value:"implementation",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'import { Args_foo, ReturnType } from "./wrap"; // import generated types\n\nexport function foo(\n  args: Args_foo // accepts generated method arguments type\n): ReturnType { // returns generated return type\n  const parsed: i32 = I32.parseInt(args.bar) + args.arg;\n  const result: ReturnType = { prop: parsed };\n  return result;\n}\n')))),Object(r.b)("h2",{id:"language-syntax"},"Language Syntax"),Object(r.b)("p",null,"Wrapper schemas are written in Polywrap's variant of the ",Object(r.b)("a",{parentName:"p",href:"https://graphql.org/learn/"},"GraphQL")," schema definition language (SDL).\nPolywrap's GraphQL variant is simpler than standard GraphQL and easy to learn."),Object(r.b)("h3",{id:"custom-types"},"Custom Types"),Object(r.b)("p",null,"Custom types are declared with the ",Object(r.b)("inlineCode",{parentName:"p"},"type")," keyword. They can be given any number of properties. Properties can be of\nany supported type, including other custom types."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type CustomType {\n  myString: String!\n  myObject: AnotherType!\n}\n\ntype AnotherType {\n  myInt: Int!\n}\n")),Object(r.b)("h3",{id:"nullability"},"Nullability"),Object(r.b)("p",null,"As in standard GraphQL, properties, method arguments, and method return values are declared non-nullable by appending\na ",Object(r.b)("inlineCode",{parentName:"p"},"!")," at the end of the type name.\nThe absence of a ",Object(r.b)("inlineCode",{parentName:"p"},"!")," indicates that a value is nullable."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type CustomType {\n  nullable: String # can be String or null\n  nonNullable: String! # must be String\n}\n")),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("p",null,"Methods are declared within the ",Object(r.b)("inlineCode",{parentName:"p"},"Module")," type. Methods must return a value."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type Module {\n  foo(\n    arg: CustomType!\n    bar: CustomType\n  ): ReturnType!\n}\n")),Object(r.b)("p",null,"Custom types and modules can be imported from other wrappers by placing an import statement at the top of the schema.\nImports become available in the schema immediately and in the wrapper following codegen."),Object(r.b)("h3",{id:"imports"},"Imports"),Object(r.b)("p",null,"Imported types and modules must be assigned a namespace. References to them are prepended with the namespace."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'#import { Module, CustomType } into Namespace from "wrap://authority/path"\n\ntype CustomType {\n  prop: Namespace_CustomType!\n}\n')),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("p",null,"The following example uses all of the elements we've discussed so far."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'#import { Module, Connection } into Ethereum from "wrap://ens/ethereum.polywrap.eth"\n#import { Module } into Ipfs from "wrap://ens/ipfs.polywrap.eth"\n\ntype Module { # methods are declared in type Module\n\n    getIpfsData(\n        address: String! # types ending with ! are non-nullable\n        connection: Ethereum_Connection # imported types are used like local types\n    ): String!\n\n    setIpfsData(\n      options: SetIpfsDataOptions! # custom types can be arguments\n      connection: Ethereum_Connection\n    ): SetIpfsDataResult! # custom types can be return values\n}\n\ntype SetIpfsDataOptions { # custom types are declared with "type" keyword\n    address: String!\n    data: String!\n}\n\ntype SetIpfsDataResult {\n    ipfsHash: String!\n    txReceipt: String!\n}\n')),Object(r.b)("h2",{id:"default-types"},"Default Types"),Object(r.b)("p",null,"Polywrap's schema definition language supports three kinds of default types:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Basic types")," like integers and strings"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Complex types")," like BigInt and JSON"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Generic types")," like Array and Map")),Object(r.b)("p",null,"These types may be implemented differently in different programming languages.\nThe language-specific implementations are clarified in each of the following sections."),Object(r.b)("h3",{id:"basic-types"},"Basic Types"),Object(r.b)("p",null,"Basic types include primitive types like integers and boolean values, as well as Strings and Bytes."),Object(r.b)(l.a,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Client",value:"client"},{label:"Wasm wrapper",value:"wasm"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt"),Object(r.b)("td",{parentName:"tr",align:null},"32-bit unsigned integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt8"),Object(r.b)("td",{parentName:"tr",align:null},"8-bit unsigned integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt16"),Object(r.b)("td",{parentName:"tr",align:null},"16-bit unsigned integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt32"),Object(r.b)("td",{parentName:"tr",align:null},"32-bit unsigned integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int"),Object(r.b)("td",{parentName:"tr",align:null},"32-bit signed integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int8"),Object(r.b)("td",{parentName:"tr",align:null},"8-bit signed integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int16"),Object(r.b)("td",{parentName:"tr",align:null},"16-bit signed integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int32"),Object(r.b)("td",{parentName:"tr",align:null},"32-bit signed integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"String"),Object(r.b)("td",{parentName:"tr",align:null},"UTF-8 string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Boolean"),Object(r.b)("td",{parentName:"tr",align:null},"True or false stored as 1 byte")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Bytes"),Object(r.b)("td",{parentName:"tr",align:null},"Array of 8-bit unsigned integers"))))),Object(r.b)(b.a,{value:"client",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"TypeScript"),Object(r.b)("th",{parentName:"tr",align:null},"Rust"),Object(r.b)("th",{parentName:"tr",align:null},"Python"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt8"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt16"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt32"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int8"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int16"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int32"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"String"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Boolean"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Bytes"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"},"Uint8Array")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."))))),Object(r.b)(b.a,{value:"wasm",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"AssemblyScript"),Object(r.b)("th",{parentName:"tr",align:null},"Rust"),Object(r.b)("th",{parentName:"tr",align:null},"Go"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt"),Object(r.b)("td",{parentName:"tr",align:null},"u32"),Object(r.b)("td",{parentName:"tr",align:null},"u32"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt8"),Object(r.b)("td",{parentName:"tr",align:null},"u8"),Object(r.b)("td",{parentName:"tr",align:null},"u8"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt16"),Object(r.b)("td",{parentName:"tr",align:null},"u16"),Object(r.b)("td",{parentName:"tr",align:null},"u16"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UInt32"),Object(r.b)("td",{parentName:"tr",align:null},"u32"),Object(r.b)("td",{parentName:"tr",align:null},"u32"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int"),Object(r.b)("td",{parentName:"tr",align:null},"i32"),Object(r.b)("td",{parentName:"tr",align:null},"i32"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int8"),Object(r.b)("td",{parentName:"tr",align:null},"i8"),Object(r.b)("td",{parentName:"tr",align:null},"i8"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int16"),Object(r.b)("td",{parentName:"tr",align:null},"i16"),Object(r.b)("td",{parentName:"tr",align:null},"i16"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Int32"),Object(r.b)("td",{parentName:"tr",align:null},"i32"),Object(r.b)("td",{parentName:"tr",align:null},"i32"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"String"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"String"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Boolean"),Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Bytes"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.assemblyscript.org/stdlib/arraybuffer.html"},"ArrayBuffer")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://doc.rust-lang.org/std/vec/struct.Vec.html"},"Vec<u8",">")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")))))),Object(r.b)("h3",{id:"complex-types"},"Complex Types"),Object(r.b)("p",null,"Complex types are represented as basic types to the Polywrap client and plugin wrappers.\nWithin Wasm wrappers, they are implemented as classes or structs with behavior."),Object(r.b)("p",null,"For example, consider an application developer invoking a Wasm wrapper with the JavaScript client.\nIf the invoked method requires an argument of type ",Object(r.b)("inlineCode",{parentName:"p"},"BigInt"),", the application developer will provide a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\nrepresentation of an integer number to satisfy the argument.\nWithin the wrapper, the ",Object(r.b)("inlineCode",{parentName:"p"},"string")," is deserialized into an instantion of the wrapper language's implementation of a ",Object(r.b)("inlineCode",{parentName:"p"},"BigInt"),".\nIf the invoked method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"BigInt"),", the wrapper will serialize the returned ",Object(r.b)("inlineCode",{parentName:"p"},"BigInt"),",\nwhich the client will then deserialize into a ",Object(r.b)("inlineCode",{parentName:"p"},"string")," before returning it to the application developer."),Object(r.b)(l.a,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Client",value:"client"},{label:"Wasm wrapper",value:"wasm"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"BigInt"),Object(r.b)("td",{parentName:"tr",align:null},"Multiple precision integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"BigNumber"),Object(r.b)("td",{parentName:"tr",align:null},"Multiple precision float")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"JSON"),Object(r.b)("td",{parentName:"tr",align:null},"JSON object"))))),Object(r.b)(b.a,{value:"client",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"TypeScript"),Object(r.b)("th",{parentName:"tr",align:null},"Rust"),Object(r.b)("th",{parentName:"tr",align:null},"Python"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"BigInt"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"BigNumber"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"JSON"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."))))),Object(r.b)(b.a,{value:"wasm",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"AssemblyScript"),Object(r.b)("th",{parentName:"tr",align:null},"Rust"),Object(r.b)("th",{parentName:"tr",align:null},"Go"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"BigInt"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://github.com/polywrap/as-bigint"},"BigInt")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.rs/num-bigint/latest/num_bigint/"},"num_bigint::BigInt")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"BigNumber"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://github.com/polywrap/as-bignumber"},"BigNumber")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.rs/bigdecimal/latest/bigdecimal/"},"bigdecimal::BigDecimal as BigNumber")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"JSON"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://github.com/polywrap/assemblyscript-json"},"JSON.Value")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.serde.rs/serde_json/"},"serde_json::Value as JSON::Value")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")))))),Object(r.b)("h3",{id:"generic-types"},"Generic Types"),Object(r.b)("p",null,"When using a generic type, with the exception of arrays,\nschema writers must add a ",Object(r.b)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#directives"},"directive")," annotation declaring its subtype(s)."),Object(r.b)("p",null,"The directive takes the form ",Object(r.b)("inlineCode",{parentName:"p"},'@annotate(type: "TypeName<T\\>")'),", where ",Object(r.b)("inlineCode",{parentName:"p"},"T")," is the type of the subtype.\nThe generic type and its subtype(s) can be independently nullable or non-nullable.\nThe following example illustrates use of the generic type directive with the ",Object(r.b)("inlineCode",{parentName:"p"},"Map")," type."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'type Module {\n  getKey(\n    key: String!\n    map: Map! @annotate(type: "Map<String!, Int!\\>!")\n  ): Int!\n\n  returnMap(\n    map: Map! @annotate(type: "Map<String!, Int!\\>!")\n  ): Map! @annotate(type: "Map<String!, Int!\\>!")\n}\n')),Object(r.b)("p",null,"Like complex types, the implementation of generic types can differ by language."),Object(r.b)(l.a,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Client",value:"client"},{label:"Wasm wrapper",value:"wasm"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"schema",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"[Type]"),Object(r.b)("td",{parentName:"tr",align:null},"Array of elements.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Map"),Object(r.b)("td",{parentName:"tr",align:null},"Map of key-value pairs."))))),Object(r.b)(b.a,{value:"client",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"TypeScript"),Object(r.b)("th",{parentName:"tr",align:null},"Rust"),Object(r.b)("th",{parentName:"tr",align:null},"Python"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"[Type]"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"Array<Type",">")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Map"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"Map<K,V",">")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon..."))))),Object(r.b)(b.a,{value:"wasm",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Schema Type"),Object(r.b)("th",{parentName:"tr",align:null},"AssemblyScript"),Object(r.b)("th",{parentName:"tr",align:null},"Rust"),Object(r.b)("th",{parentName:"tr",align:null},"Go"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"[Type]"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.assemblyscript.org/stdlib/array.html"},"Array<T",">")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://doc.rust-lang.org/std/vec/struct.Vec.html"},"Vec<T",">")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Map"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.assemblyscript.org/stdlib/map.html"},"Map<K, V",">")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://doc.rust-lang.org/std/collections/struct.BTreeMap.html"},"BTreeMap<K, V",">")),Object(r.b)("td",{parentName:"tr",align:null},"Coming soon...")))))),Object(r.b)("h2",{id:"interfaces"},"Interfaces"),Object(r.b)("p",null,"A module can inherit the method declarations of any other module by using the ",Object(r.b)("inlineCode",{parentName:"p"},"implements")," keyword.\nA module that implements an interface in this manner is required to implement and export the interface module's declared methods."),Object(r.b)("p",null,"Similarly, a type can inherit the property declarations of any other type by using the ",Object(r.b)("inlineCode",{parentName:"p"},"implements")," keyword.\nIf a type implements an interface, it inherits the interface type's property declarations as though the properties\nwere declared explicitly."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'#import { Module, InterfaceType } into Interface from "wrap://ens/interface.eth"\n\ntype Module implements Interface_Module {\n  # declares methods of Interface_Module\n}\n\ntype ImplementationType implements Interface_InterfaceType {\n  # declares properties of Interface_InterfaceType\n}\n')),Object(r.b)("h2",{id:"environmental-variables"},"Environmental Variables"),Object(r.b)("p",null,"Wrapper developers can declare a map of environmental variables for application developers to provide. To use environmental variables, declare an ",Object(r.b)("inlineCode",{parentName:"p"},"Env")," type and add a directive to each schema method that will use it. "),Object(r.b)("p",null,"You can learn how to access environmental variables in code by reading the ",Object(r.b)("a",{parentName:"p",href:"./env-variables#access-env-in-the-module"},"Access Env in the module")," section of our ",Object(r.b)("a",{parentName:"p",href:"./env-variables"},"Environmental Variables")," documentation for wrapper developers."),Object(r.b)("h3",{id:"declare-the-env-object"},"Declare the Env object"),Object(r.b)("p",null,"Environmental variables are declared in a custom type named ",Object(r.b)("inlineCode",{parentName:"p"},"Env"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type Env {\n  str: String!\n  number: Int!\n  bool: Boolean!\n}\n")),Object(r.b)("h3",{id:"add-the-env-directive"},"Add the @env directive"),Object(r.b)("p",null,"To access an ",Object(r.b)("inlineCode",{parentName:"p"},"Env")," object during a method invocation, add the ",Object(r.b)("inlineCode",{parentName:"p"},"@env")," directive to a method. The ",Object(r.b)("inlineCode",{parentName:"p"},"@env")," directive has one attribute that indicates whether the ",Object(r.b)("inlineCode",{parentName:"p"},"Env")," is required or optional."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type Module {\n  # App developers are required to provide Env to invoke this method\n  methodRequireEnv(\n    arg: String!\n  ): String! @env(required: true)\n\n  # Env is optional when invoking this method\n  methodOptionalEnv(\n    arg: String!\n  ): String! @env(required: false)\n}\n")))}m.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,u=m["".concat(b,".").concat(d)]||m[d]||s[d]||l;return n?r.a.createElement(u,i(i({ref:t},c),{},{components:n})):r.a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},196:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},197:function(e,t,n){"use strict";var a=n(0),r=n(198);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},198:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},199:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(197),b=n(196),i=n(57),p=n.n(i);const c=37,o=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:s,className:d}=e,{tabGroupChoices:u,setTabGroupChoices:g}=Object(l.a)(),[O,j]=Object(a.useState)(i),h=a.Children.toArray(e.children),N=[];if(null!=s){const e=u[s];null!=e&&e!==O&&m.some(t=>t.value===e)&&j(e)}const y=e=>{const t=e.target,n=N.indexOf(t),a=h[n].props.value;j(a),null!=s&&(g(s,a),setTimeout(()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:b}=window;return t>=0&&r<=b&&a<=l&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout(()=>t.classList.remove(p.a.tabItemActive),2e3))},150))},f=e=>{var t;let n;switch(e.keyCode){case o:{const t=N.indexOf(e.target)+1;n=N[t]||N[0];break}case c:{const t=N.indexOf(e.target)-1;n=N[t]||N[N.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},d)},m.map(e=>{let{value:t,label:n}=e;return r.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(b.a)("tabs__item",p.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:e=>N.push(e),onKeyDown:f,onFocus:y,onClick:y},n)})),t?Object(a.cloneElement)(h.filter(e=>e.props.value===O)[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O}))))}},200:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){let{children:t,hidden:n,className:a}=e;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);