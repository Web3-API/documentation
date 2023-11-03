---
id: polywrap-manifest
title: 'Configure a Polywrap Manifest'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each wrap is orchestrated by a Polywrap Manifest `polywrap.yaml` file. 
The Polywrap Manfiest provides the Polywrap CLI with basic information it needs to [`build`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli#build--b) the wrap
and generate code bindings with [`codegen`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli#codegen--g).

## Content

The Polywrap Manifest contains the name of the wrap, programming language used to write it, 
and the location of the wrap schema that declares the wrap's interface. 

It optionally includes a path to the wrap's entry file (e.g. src/index.ts, src/lib.rs)
and paths to other manifests that can be used to configure the build and deploy process.
It can also contain an array of [URI Redirects](/concepts/uri-redirects).

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format: # The manifest format version
project: # Project information
  name: # Name of wrap
  type: # Type/language of project
source: # Source code information
    schema: # Path to wrap schema
    module: # (Optional) Path to entry file
    import_abis: # (Optional) Array of URI redirects used to resolve imports in the schema
      - uri: # One of the schema's import URI
        abi: # Path to a local ABI or schema. Supported file formats: [*.graphql, *.info, *.json, *.yaml]
extensions:
    build: # (Optional) Path to Build Manifest file
resources: # (Optional) Path to Resources directory
```

</TabItem>
<TabItem value="example">

```yaml
$snippet: yaml-simple-storage-package-manifest
```
</TabItem>
</Tabs>