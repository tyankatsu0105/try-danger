const fs = require("fs");

const report = JSON.parse(fs.readFileSync("./output.json", "utf-8"));

let reportText = "";

report.forEach(element => {
  reportText += `
  ## ${element.name}
  size : ${element.size}
  oroginal : ${element.numeric}
  `;
});

console.log(reportText);
