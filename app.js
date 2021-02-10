const express = require('express');
const app = express();
const port = 8080;

app.get('/:name?', (req, res) => {
  const noun = req.params.name || 'World';
  res.send(`Hello ${noun}!`);
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
