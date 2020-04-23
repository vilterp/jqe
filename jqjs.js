const fs = require("fs");

if (process.argv.length !== 3) {
  console.log("usage: yourdata | jqjs 'some-javascript'");
  process.exit(-1);
}

const inputExpr = process.argv[2];
const inputFun = eval(`(data) => (${inputExpr})`);

const dataStr = fs.readFileSync(0, "utf-8");
const dataParsed = JSON.parse(dataStr);

const out = inputFun(dataParsed);

console.log(JSON.stringify(out, null, 2));
