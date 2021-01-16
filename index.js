const express = require('express');

const app = express();
const port = 8080;
const commentsRouter = require('./router/comments.controller');
const monCompteRouter = require('./router/monCompte.controller');
const profilRouter = require('./router/profil.controller');
const profilAdminRouter = require('./router/profilAdmin.controller');
const publicationsRouter = require('./router/publications.controller');

app.use(express.json());
app.use(commentsRouter);
app.use(monCompteRouter);
app.use(profilRouter);
app.use(profilAdminRouter);
app.use(publicationsRouter);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${port}`);
  }
});
