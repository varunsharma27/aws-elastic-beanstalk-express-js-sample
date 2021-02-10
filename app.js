const express = require('express');
const app = express();
const port = 8080;

app.get('/:name?', (req, res) => {
  res.set('Content-Type', 'text/html');
  const noun = req.params.name || 'World';
  res.send(Buffer.from((`
    <html>
      <head>
        <style>
          .body {
            background-color: #8080802b;
          }
          .body:hover {
            background-color: #80808038;
          }
          .text {
            position: absolute;
            text-align: center;
            top: 50%;
            width: 99%;
          }
        </style>
      </head>
      <body class="body">
        <h1 class="text">
          Hello ${noun}!
        </h1>
      </body>
    </html>
  `)));
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
