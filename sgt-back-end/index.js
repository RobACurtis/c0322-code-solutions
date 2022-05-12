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
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occured.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on port 3000');
});
