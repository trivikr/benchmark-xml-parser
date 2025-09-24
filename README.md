# benchmark-xml-parser

Benchmarks parsing time between different XML Parsers from npm

## Pre-requisites

- Install Node.js and corepack.
- Run `yarn` to install dependencies.

## Setup

Run `yarn benchmark`

### Node.js v20.19.5

```console
fast-xml-parser@5.2.5 x 45.98 ops/sec ±3.32% (61 runs sampled)
xmldom@0.9.8 x 25.22 ops/sec ±4.14% (46 runs sampled)
Fastest is fast-xml-parser@5.2.5
```

### Node.js v22.19.0

```console
fast-xml-parser@5.2.5 x 47.42 ops/sec ±3.04% (62 runs sampled)
xmldom@0.9.8 x 26.88 ops/sec ±3.17% (49 runs sampled)
Fastest is fast-xml-parser@5.2.5
```

### Node.js v24.8.0

```console
fast-xml-parser@5.2.5 x 51.58 ops/sec ±2.12% (69 runs sampled)
xmldom@0.9.8 x 31.61 ops/sec ±0.22% (55 runs sampled)
Fastest is fast-xml-parser@5.2.5
```
