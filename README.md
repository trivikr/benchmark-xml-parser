# benchmark-xml-parser

Benchmarks parsing time between different XML Parsers from npm

## Pre-requisites

- Install Node.js and corepack.
- Run `yarn` to install dependencies.

## Setup

Run `yarn benchmark`

Example run

### Node.js v22.19.0

```console
fast-xml-parser x 67,588 ops/sec ±0.48% (99 runs sampled)
xmldom x 77,250 ops/sec ±1.46% (97 runs sampled)
Fastest is xmldom
```
