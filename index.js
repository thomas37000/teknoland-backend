const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
const musicRouter = require('./router/music.controller');
const vinylesRouter = require('./router/vinyles.controller');

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use( '/artistes', musicRouter );
app.use( '/vinyles', vinylesRouter );

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${port}`);
  }
});

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const helloasso = require('./src/crons/helloasso');

// helloasso.start();

// const SERVER_PORT = process.env.SERVER_PORT || 8080;

// const app = express();

// const indexRouter = require('./src/router/index.router');

// app.use(cors({ origin: process.env.CLIENT_URL }));
// app.use(express.json());
// app.use(cors());
// app.use('/', indexRouter);

// app.listen(SERVER_PORT, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(`Express server listening on ${SERVER_PORT}`);
//   }
// });

