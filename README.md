# benchmark-xml-parser

Benchmarks parsing time between different XML Parsers from npm

## Pre-requisites

- Install Node.js and corepack.
- Run `yarn` to install dependencies.

## Setup

Run `yarn benchmark`

### Node.js v20.20.1

```console
fast-xml-parser@5.5.6 x 72.18 ops/sec ±2.00% (76 runs sampled)
xmldom@0.8.11 x 127 ops/sec ±1.18% (82 runs sampled)
Fastest is xmldom@0.8.11
```

### Node.js v22.22.1

```console
fast-xml-parser@5.5.6 x 77.66 ops/sec ±1.13% (68 runs sampled)
xmldom@0.8.11 x 136 ops/sec ±0.57% (86 runs sampled)
Fastest is xmldom@0.8.11
```

### Node.js v24.14.0

```console
fast-xml-parser@5.5.6 x 79.36 ops/sec ±1.03% (70 runs sampled)
xmldom@0.8.11 x 148 ops/sec ±0.42% (85 runs sampled)
Fastest is xmldom@0.8.11
```
