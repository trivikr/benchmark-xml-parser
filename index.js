import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import benchmark from "benchmark";
import { XMLParser } from "fast-xml-parser";
import { DOMParser } from "@xmldom/xmldom";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileNamePath = join(__dirname, "data", "sample.xml");
const xmlData = readFileSync(fileNamePath).toString();

const suite = new benchmark.Suite();
const fastXmlParser = new XMLParser();
const domParser = new DOMParser();

suite
  .add("fast-xml-parser", function () {
    fastXmlParser.parse(xmlData);
  })
  .add("xmldom", function () {
    domParser.parseFromString(xmlData, "application/xml");
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: false });
