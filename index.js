import { readFile, readFileSync } from "node:fs";
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

const fastXmlParserVersion = JSON.parse(
  readFileSync(
    join(__dirname, "node_modules", "fast-xml-parser", "package.json")
  ).toString()
).version;
const xmldomVersion = JSON.parse(
  readFileSync(
    join(__dirname, "node_modules", "@xmldom", "xmldom", "package.json")
  )
    .toString()
    .replace(/\^/g, "")
).version;

suite
  .add(`fast-xml-parser@${fastXmlParserVersion}`, function () {
    fastXmlParser.parse(xmlData);
  })
  .add(`xmldom@${xmldomVersion}`, function () {
    domParser.parseFromString(xmlData, "application/xml");
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: false });
