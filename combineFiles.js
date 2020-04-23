const fs = require("fs");

if (process.argv.length <= 3) {
  console.log("combine-files 'expr-getting-array' <file-path>+");
  process.exit(-1);
}

const inputExpr = process.argv[2];
const inputFun = eval(`(data) => (${inputExpr})`);

const files = process.argv.slice(3);

const contents = files.map(f => {
  const thisContents = fs.readFileSync(f, "utf-8");
  return JSON.parse(thisContents);
});

const arrays = contents.map(inputFun);
const out = [];
arrays.forEach(a => {
  a.forEach(x => {
    out.push(x);
  });
});
console.log(JSON.stringify(out, null, 2));
