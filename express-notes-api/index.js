const data = require('./data');
const fs = require('fs');
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

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (req.body.content) {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    const stringData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', stringData, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured.' });
      } else {
        res.status(201).send(data.notes[data.nextId - 1]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).send({ error: `can not find note with id ${id}` });
  } else {
    delete data.notes[id];
    const stringData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', stringData, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    data.notes[id] = req.body;
    const stringData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', stringData, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured.' });
      } else {
        res.status(200).send(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on port 3000');
});
