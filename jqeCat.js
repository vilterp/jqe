#!/usr/bin/env node
const fs = require("fs");

// concatenate a bunch of files containing JSON
// into a single file containing json

if (process.argv.length <= 3) {
  console.log("jqe-cat 'expr-getting-array' <file-path>+");
  process.exit(-1);
}

const inputExpr = process.argv[2];
const inputFun = eval(`(data) => (${inputExpr})`);

const files = process.argv.slice(3);

const contents = files.map(f => {
  const thisContents = fs.readFileSync(f, "utf-8");
  try {
    return JSON.parse(thisContents);
  } catch (e) {
    console.error(`error parsing ${f}:`, e.toString());
    process.exit(-1);
  }
});

const arrays = contents.map(inputFun);
const out = [];
arrays.forEach(a => {
  a.forEach(x => {
    out.push(x);
  });
});
console.log(JSON.stringify(out, null, 2));
