const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
const gradesArray = [];

app.get('/api/grades', (req, res) => {
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  gradesArray.push(grades[nextId]);
  res.status(201).send(grades);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening');
});
