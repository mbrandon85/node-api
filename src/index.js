const express = require('express');

const app = express();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'matthew.brandon',
    password: '',
    database: 'matt',
  },
});

app.get('/', (req, res) => {
  knex()
    .select()
    .from('Person')
    .then((data) => {
      res.send(data);
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
