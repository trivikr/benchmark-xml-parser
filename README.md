# benchmark-xml-parser

Benchmarks parsing time between different XML Parsers from npm

## Pre-requisites

- Install Node.js and corepack.
- Run `yarn` to install dependencies.

## Setup

Run `yarn benchmark`

### Node.js v20.20.1

```console
fast-xml-parser@5.5.6 x 36.99 ops/sec ±7.10% (52 runs sampled)
xmldom@0.9.8 x 24.20 ops/sec ±5.15% (44 runs sampled)
Fastest is fast-xml-parser@5.5.6
```

### Node.js v22.22.1

```console
fast-xml-parser@5.5.6 x 38.98 ops/sec ±3.82% (53 runs sampled)
xmldom@0.9.8 x 24.46 ops/sec ±4.23% (45 runs sampled)
Fastest is fast-xml-parser@5.5.6
```

### Node.js v24.14.0

```console
fast-xml-parser@5.5.6 x 37.10 ops/sec ±4.34% (53 runs sampled)
xmldom@0.9.8 x 29.96 ops/sec ±0.41% (54 runs sampled)
Fastest is fast-xml-parser@5.5.6
```
