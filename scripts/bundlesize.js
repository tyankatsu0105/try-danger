// ==================================
// Settings
// ==================================
const fs = require('fs');

let origin = fs.readFileSync('reportBundlesize.txt', 'utf-8');
origin = origin.split('\n');
const output = './bundlesize.txt';

// // ==================================
// // Actions
// // ==================================
const result = origin
  .filter(word => word !== '')
  .map(word => {
    const trimedWord = word.trim();
    const status = trimedWord.slice(0, 4);
    const detail = trimedWord.slice(6);

    return {
      status,
      detail
    };
  })
  .sort((a, b) => {
    const statusA = a.status;
    const statusB = b.status;
    if (statusA < statusB) {
      return -1;
    }
    if (statusA > statusB) {
      return 1;
    }
    return 0;
  });

const toMarkdown = array => {
  return array.map(({ detail }) => {
    return `- ${detail}\n`;
  });
};

let passes = result.filter(({ status }) => status === 'PASS');
passes = `### PASS
${toMarkdown(passes).join('')}`;

let failes = result.filter(({ status }) => status === 'FAIL');
failes = `### FAIL
${toMarkdown(failes).join('')}`;

const markdown = passes + failes;

fs.writeFileSync(output, markdown);
