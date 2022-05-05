
const fs = require('fs');

module.exports = data => {
  data.notes[data.nextId] = process.argv[3];
  data.nextId += 1;
  const stringData = JSON.stringify(data);
  fs.writeFile('./data.json', stringData, 'utf8', err => {
    if (err) throw err;
    console.log(data);
  });
};
