#!/usr/bin/env node
const fs = require("fs");

if (process.argv.length <= 3) {
  console.log("jqe-ndjson-cat 'expr-getting-array' <file-path>");
  process.exit(-1);
}

// take an NDJSON file and output a file that's an array
// of the lines, with the expr applied to each

const inputExpr = process.argv[2];
const inputFun = eval(`(data) => (${inputExpr})`);

const filePath = process.argv[3];

const contentsStr = fs.readFileSync(filePath, "utf-8");
const lines = contentsStr.split("\n");
const parsed = lines.map((line, idx) => {
  if (line === "") {
    return null;
  }
  try {
    return JSON.parse(line);
  } catch (e) {
    console.error(`error parsing line ${idx + 1}:`, e.toString());
    process.exit(-1)
  }
});

const mapped = parsed.filter(l => l !== null).map(inputFun);

console.log(JSON.stringify(mapped, null, 2));
