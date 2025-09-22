# benchmark-xml-parser

Benchmarks parsing time between different XML Parsers from npm

## Pre-requisites

- Install Node.js and corepack.
- Run `yarn` to install dependencies.

## Setup

Run `yarn benchmark`

### Node.js v20.19.5

```console
fast-xml-parser@5.2.5 x 43.18 ops/sec ±5.42% (58 runs sampled)
xmldom@0.8.11 x 64.09 ops/sec ±8.80% (70 runs sampled)
Fastest is xmldom@0.8.11
```

### Node.js v22.19.0

```console
fast-xml-parser@5.2.5 x 49.80 ops/sec ±1.41% (64 runs sampled)
xmldom@0.8.11 x 75.12 ops/sec ±0.46% (77 runs sampled)
Fastest is xmldom@0.8.11
```

### Node.js v24.8.0

```console
fast-xml-parser@5.2.5 x 48.09 ops/sec ±5.57% (65 runs sampled)
xmldom@0.8.11 x 80.06 ops/sec ±0.56% (69 runs sampled)
Fastest is xmldom@0.8.11
```
