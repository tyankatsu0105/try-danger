import { markdown } from 'danger';

const fs = require('fs');

const report = fs.readFileSync('./bundlesize.txt', 'utf-8');

markdown(report);
