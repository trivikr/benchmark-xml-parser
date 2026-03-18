# benchmark-xml-parser

Benchmarks parsing time between different XML Parsers from npm

## Pre-requisites

- Install Node.js and corepack.
- Run `yarn` to install dependencies.

## Setup

Run `yarn benchmark`

### Node.js v20.20.1

```console
fast-xml-parser@5.5.6 x 36.91 ops/sec ±6.18% (52 runs sampled)
xmldom@0.8.11 x 58.57 ops/sec ±7.39% (63 runs sampled)
Fastest is xmldom@0.8.11
```

### Node.js v22.22.1

```console
fast-xml-parser@5.5.6 x 37.80 ops/sec ±1.05% (63 runs sampled)
xmldom@0.8.11 x 71.73 ops/sec ±1.27% (73 runs sampled)
Fastest is xmldom@0.8.11
```

### Node.js v24.14.0

```console
fast-xml-parser@5.5.6 x 39.94 ops/sec ±2.85% (54 runs sampled)
xmldom@0.8.11 x 79.24 ops/sec ±1.66% (69 runs sampled)
Fastest is xmldom@0.8.11
```
