#!/usr/bin/env node
const fs = require("fs");

const dataStr = fs.readFileSync(0, "utf-8");
const dataParsed = JSON.parse(dataStr);

for (const item of dataParsed) {
  console.log(JSON.stringify(item));
}
