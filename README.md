# benchmark-xml-parser

Benchmarks parsing time between different XML Parsers from npm

## Pre-requisites

- Install Node.js and corepack.
- Run `yarn` to install dependencies.

## Setup

Run `yarn benchmark`

### Node.js v20.19.5

```console
fast-xml-parser@5.2.5 x 36,819 ops/sec ±1.48% (94 runs sampled)
xmldom@0.8.11 x 34,932 ops/sec ±0.85% (98 runs sampled)
Fastest is fast-xml-parser@5.2.5
```

### Node.js v22.19.0

```console
fast-xml-parser@5.2.5 x 36,327 ops/sec ±0.82% (93 runs sampled)
xmldom@0.8.11 x 37,480 ops/sec ±0.91% (93 runs sampled)
Fastest is xmldom@0.8.11
```

### Node.js v24.8.0

```console
fast-xml-parser@5.2.5 x 39,032 ops/sec ±0.45% (87 runs sampled)
xmldom@0.8.11 x 40,194 ops/sec ±0.44% (97 runs sampled)
Fastest is xmldom@0.8.11
```
