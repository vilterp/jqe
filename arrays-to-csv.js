#!/usr/bin/env node
const fs = require("fs");

if (process.argv.length !== 2) {
  console.log("usage: yourdata | arrays-to-csv");
  process.exit(-1);
}

const dataStr = fs.readFileSync(0, "utf-8");
const dataParsed = JSON.parse(dataStr);

// TODO: escaping
console.log(dataParsed.map((row) => row.join(',')).join('\n'));
