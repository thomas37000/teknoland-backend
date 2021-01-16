const express = require('express');

const app = express();
const port = 8080;
const musicRouter = require('./router/music.controller');

app.use(express.json());
app.use(musicRouter);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${port}`);
  }
});
