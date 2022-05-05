
module.exports = data => {
  for (const x in data.notes) {
    console.log(`${x}: ${data.notes[x]}`);
  }
};
