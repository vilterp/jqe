var fs = require("fs");

if (process.argv.length !== 3) {
  console.log("usage: yourdata | jqe 'some-javascript'");
  process.exit(-1);
}

var inputExpr = process.argv[2];
var inputFun = eval(`(data) => (${inputExpr})`);

var dataStr = fs.readFileSync(0, "utf-8");
var dataParsed = JSON.parse(dataStr);

var out = inputFun(dataParsed);

console.log(JSON.stringify(out, null, 2));
