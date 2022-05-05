const read = require('./read');
const add = require('./add');
const data = require('./data');
const arg = process.argv[2];

if (arg === 'read') {
  read(data);
} else if (arg === 'add') {
  add(data);
}
