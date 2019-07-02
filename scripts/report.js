// ==================================
// Settings
// ==================================
const fs = require("fs");
const fsExtra = require("fs-extra");

const path = require("path");
const originReport = JSON.parse(
  fs.readFileSync(path.join("./dist", "report.json"), "utf-8")
);
const output = path.join("./output.json");

// 桁の指定
const selectDigit = 100;

// ==================================
// Actions
// ==================================
const { assets } = originReport;

const toKB = size =>
  `${Math.round((size / Math.pow(2, 10)) * selectDigit) / selectDigit} KB`;

const result = assets.map(asset => {
  const { name, size } = asset;
  return `### ${name}
- ${toKB(size)}
- ${size}
`;
});

fs.writeFileSync(output, JSON.stringify(result, null, 2));

fsExtra.remove(path.join("./dist"));
