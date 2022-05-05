const data = require('./data');
const read = require('./read');
const addItem = require('./add');
const removeItem = require('./delete');
const editItem = require('./edit');
const arg = process.argv[2];

if (arg === 'read') {
  read(data);
} else if (arg === 'add') {
  addItem(data);
} else if (arg === 'delete') {
  removeItem(data);
} else if (arg === 'edit') {
  editItem(data);
} else {
  console.log('command not found');
}
