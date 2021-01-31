const express = require("express");
const connection = require("../config");

const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * from artiste", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else if (results.length < 1) {
      res.status(404).send("il n 'y a pas d' Artistes !");
    } else {
      res.status(200).json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM artiste WHERE idartiste = ?',
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).json(err);
      } else if (results.length < 1) {
        res.status(404).send("Artiste inconnu!");
      } else {
        res.status(200).json(results[0]);
      }
    }
  );
});

router.post("/", (req, res) => {
  const { nom, genre, pays, description, email, logoUrl } = req.body;
  connection.query(
    "INSERT INTO artiste(nom, genre, pays, description, email, logoUr) VALUES(?, ?, ?, ?, ?, ?)",
    [nom, genre, pays, description, email, logoUrl],
    (err) => {
      if (err) {
        res.status(500).send("Artiste non publié !");
      } else {
        res.status(201).send("Votre publication a bien était postée");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const idArtiste = req.params.id;
  const { nom, genre, pays, description, email, logoUrl } = req.body;
  connection.query(
    `UPDATE artiste SET nom = ?, genre = ?, pays = ?, description = ?, email = ?, logoUrl = ? WHERE idartiste = ?`,
    [nom, genre, pays, description, email, logoUrl, idArtiste],
    (error, result) => {
      if (error) {
        res.status(500).json({ errorMessage: error.message });
      } else {
        res.status(200).json({ result });
      }
    }
  );
});

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
