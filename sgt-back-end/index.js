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
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occured.' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).send({ error: 'fill out all fields' });
  } else if (score <= 0 || !Number.isInteger(score)) {
    res.status(400).send({ error: 'score must be a positive integer' });
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
        res.status(201).json(grades[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occured.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).send({ error: 'fill out all fields' });
  } else if (score <= 0 || !Number.isInteger(score)) {
    res.status(400).send({ error: 'score must be a positive integer' });
  } else {
    const sql = `
        update "grades"
        set "name" = $1 ,
            "course" = $2 ,
            "score" = $3
        where "gradeId" = $4
        returning *;
    `;
    const params = [req.body.name, req.body.course, req.body.score, gradeId];

    db.query(sql, params)
      .then(result => {
        const grades = result.rows;
        if (grades[0] === undefined) {
          res.status(404).json({ error: 'Cannot find grades' });
        } else {
          res.status(200).json(grades[0]);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occured.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (gradeId < 0 || !Number.isInteger(gradeId)) {
    res.status(400).send({ error: 'gradeId must be a positive integer' });
  } else {
    const sql = `
        delete from "grades"
        where "gradeId" = $1
        returning *;
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grades = result.rows;
        if (grades[0] === undefined) {
          res.status(404).json({ error: 'Cannot find gradeId' });
        } else {
          res.sendStatus(204);
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
