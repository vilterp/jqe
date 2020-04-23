import * as fs from "fs";

const dataStr = fs.readFileSync(0, "utf-8");
const dataParsed = JSON.parse(dataStr);

const inputExpr = process.argv[2];
const inputFun = eval(`(data) => (${inputExpr})`);

const out = inputFun(dataParsed);

console.log(JSON.stringify(out, null, 2));
