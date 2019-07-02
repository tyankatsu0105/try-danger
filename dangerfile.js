import { markdown } from 'danger';
const fs = require('fs');

const report = JSON.parse(fs.readFileSync('./output.json', 'utf-8'));

markdown(report.join(''));
