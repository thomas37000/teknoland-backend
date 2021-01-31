const express = require('express');
const connection = require('../config');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * from discographie', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else if (results.length < 1) {
      res.status(404).send("il n 'y a pas de vinyles !");
    } else {
      res.status(200).json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM discographie WHERE iddiscographie = ?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).json(err);
      } else if (results.length < 1) {
        res.status(404).send("vinyle inconnu !");
      } else {
        res.status(200).json(results[0]);
      }
    }
  );
});

// router.post('/', (req, res) => {
//   const { content, title, publish_date: publishDate } = req.body;
//   connection.query(
//     'INSERT INTO publication(content, title, publish_date) VALUES(?, ?, ?)',
//     [content, title, publishDate],
//     (err) => {
//       if (err) {
//         res.status(500).send('Publication non postée !');
//       } else {
//         res.status(201).send('Votre publication a bien était postée');
//       }
//     }
//   );
// });

// router.put('/:id', (req, res) => {
//   const idPublication = req.params.id;
//   const { content, title, publish_date: publishDate } = req.body;
//   connection.query(
//     `UPDATE publication SET content = ?, title = ?, publish_date = ? WHERE idpublication = ?`,
//     [content, title, publishDate, idPublication],
//     (error, result) => {
//       if (error) {
//         res.status(500).json({ errorMessage: error.message });
//       } else {
//         res.status(200).json({ result });
//       }
//     }
//   );
// });

// router.delete('/:id', (req, res) => {
//   const idPublication = req.params.id;
//   connection.query(
//     'DELETE FROM publication WHERE idpublication = ?',
//     [idPublication],
//     (err) => {
//       if (err) {
//         res.status(500).send("la suppression n' a pas marché !");
//       } else {
//         res.status(200).send('Publication bien supprimée');
//       }
//     }
//   );
// });

module.exports = router;
