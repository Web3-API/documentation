---
id: 'build-deploy-test'
title: 'Build, deploy and test'
---

### **Build**

Let's start building our template project! Simply run:

```bash
yarn build
```

In the output window, you'll see that our smart contract was compiled, and our Polywrap wrapper was built and output to the `./build/*` folder. It contains the following files:

```
build/
    ├── web3api.yaml           # Manifest
    ├── schema.graphql         # Schema
    |── query.wasm             # Query Logic
    └── mutation.wasm          # Mutation Logic
```

This directory's contents will be uploaded to decentralized storage, and enable any Polywrap Client to download, query, and execute your Polywrap's functionality within the application.

The `mutation.wasm` and `query.wasm` files are the WebAssembly files that are compiled from AssemblyScript.

The `schema.graphql` file contain the APIs schema, consisting of custom types and callable methods (query and mutation).

Lastly, the `web3api.yaml` manifest file describes the layout of the package.

### **Deploy**

To deploy our Polywrap wrapper and associated smart contracts for testing, let's first setup a test environment. Simply run:

```bash
yarn test:env:up
```

This will stand-up an Ethereum node, as well as an IPFS node.

:::tip
In the future, test environments will be easily configurable to include any nodes your Polywrap wrapper requires.
:::

Next, let's deploy the `SimpleStorage.sol` smart contract, and the `simplestorage.eth` Polywrap by running:

```bash
yarn deploy
```

### **Test**

With our Polywrapper live at `simplestorage.eth` on our test network, it's now time to test it out!

This is where our query recipes come in handy. Run `yarn test` to see this in action.

In the output window, you'll see a combination of input queries, and returned results from the Polywrapper. In this query recipe, we send a combination of `set.graphql` and `get.graphql` queries which modify the `SimpleStorage.sol` contract's stored value.

Now that we've built the template Polywrapper, let's add custom functionality to the template in the next section!
