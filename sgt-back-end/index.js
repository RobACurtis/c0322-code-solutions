const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
    `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      if (!grade) {
        res.status(404).json({ error: 'Cannot find grades' });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occured.' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).send({ error: 'fill out all fields' });
  } else {
    const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *;
  `;

    const params = [req.body.name, req.body.course, req.body.score];
    db.query(sql, params)
      .then(result => {
        const grades = result.rows;
        if (!grades) {
          res.status(404).json({ error: 'data table not found' });
        } else {
          res.status(201).json(grades);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occured.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on port 3000');
});
