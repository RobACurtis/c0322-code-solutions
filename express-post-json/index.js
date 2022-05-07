const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
let gradesArray = [];

app.get('/api/grades', (req, res) => {
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  res.status(201).send({req.body[0].id: nextId,});
  grades[nextId] = req.body;
  gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  console.log(gradesArray);
  nextId++;
});

app.listen(3000, () => {
  console.log('server listening');
});
