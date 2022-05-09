const data = require('./data');
const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in data.notes) {
    notesArray.push(data.notes[key]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).send({ error: `can not find note with id ${id}` });
  } else {
    res.send(data.notes[id]);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on port 3000');
});
