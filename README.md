# benchmark-xml-parser

Benchmarks parsing time between different XML Parsers from npm

## Pre-requisites

- Install Node.js and corepack.
- Run `yarn` to install dependencies.

## Setup

Run `yarn benchmark`

### Node.js v20.20.1

```console
fast-xml-parser@5.5.6 x 86.26 ops/sec ±1.75% (76 runs sampled)
xmldom@0.8.11 x 138 ops/sec ±2.35% (74 runs sampled)
AWS SDK custom parser x 238 ops/sec ±0.70% (88 runs sampled)
Fastest is AWS SDK custom parser
```

### Node.js v22.22.1

```console
fast-xml-parser@5.5.6 x 84.91 ops/sec ±1.42% (74 runs sampled)
xmldom@0.8.11 x 142 ops/sec ±2.44% (83 runs sampled)
AWS SDK custom parser x 255 ops/sec ±0.80% (89 runs sampled)
Fastest is AWS SDK custom parser
```

### Node.js v24.14.0

```console
fast-xml-parser@5.5.6 x 85.95 ops/sec ±1.03% (75 runs sampled)
xmldom@0.8.11 x 148 ops/sec ±0.61% (83 runs sampled)
AWS SDK custom parser x 259 ops/sec ±1.82% (90 runs sampled)
Fastest is AWS SDK custom parser
```
