---
id: 'project-folder'
title: 'The Polywrap project folder'
---

Once you have your project set up, the folder tree should look something like this:

```
web3api.yaml                  # Manifest File
src/
│   ├── query/                # Read Queries
│   |── mutation/             # Write Queries
|   └── contracts/            # Smart Contracts
|
recipes/                      # Query Recipes (covered below)
|
scripts/                      # Smart Contract Build/Deploy
```

### **`web3api.yaml`**

The `web3api.yaml` is a manifest file describing the layout of a Polywrap wrapper.

### **`src/mutation/*` & `src/query/*`**

The `src/mutation` & `src/query` folders are where the API's GraphQL schema and AssemblyScript implementation files live.

### **`src/contracts/*`**

The `src/contracts` directory contains our protocol's Ethereum-based smart contracts.

### **`recipes/*`**

Query recipes provide a simple way to test your Polywrap without having to write custom testing logic (with JavaScript and Jest for example).

We'll be using this functionality further down in this guide with the `w3 query` command, allowing us to easily send test queries against our API.

### **`scripts/*`**

We've defined some simple build & deployment scripts for our Solidity smart contracts. These are basic utilities, and can be replaced entirely by a [Truffle](https://www.trufflesuite.com/) or [Hardhat](https://hardhat.org/) project.

In the next section, we'll build this example template and see what gets outputted in the build folder!
