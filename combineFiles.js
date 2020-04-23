var fs = require("fs");

if (process.argv.length <= 3) {
  console.log("combine-files 'expr-getting-array' <file-path>+");
  process.exit(-1);
}

var inputExpr = process.argv[2];
var inputFun = eval(`(data) => (${inputExpr})`);

var files = process.argv.slice(3);

var contents = files.map(f => {
  var thisContents = fs.readFileSync(f, "utf-8");
  return JSON.parse(thisContents);
});

var arrays = contents.map(inputFun);
var out = [];
arrays.forEach(a => {
  a.forEach(x => {
    out.push(x);
  });
});
console.log(JSON.stringify(out, null, 2));
