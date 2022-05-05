const fs = require('fs');

module.exports = data => {
  for (const key in data.notes) {
    if (key === process.argv[3]) {
      data.notes[key] = process.argv[4];
    }
  }
  const stringData = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', stringData, 'utf8', err => {
    if (err) throw err;
  });
};
