const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

// =========================
// MySQL Connection
// =========================
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'faithverse'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('MySQL Connected');
});

// =========================
// GET all verses
// =========================
app.get('/verses', (req, res) => {
  db.query('SELECT * FROM verse', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// =========================
// GET single verse
// =========================
app.get('/verses/:id', (req, res) => {
  db.query(
    'SELECT * FROM verse WHERE id = ?',
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results[0]);
    }
  );
});

// =========================
// CREATE verse 
// =========================
app.post('/verses', (req, res) => {
  const { book, chapter, verse_number, verse_text, is_favorite } = req.body;

  db.query(
    `INSERT INTO verse (book, chapter, verse_number, verse_text, is_favorite)
     VALUES (?, ?, ?, ?, ?)`,
    [book, chapter, verse_number, verse_text, is_favorite || 0],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId });
    }
  );
});

// =========================
// UPDATE verse 
// =========================
app.put('/verses/:id', (req, res) => {
  const { book, chapter, verse_number, verse_text, is_favorite } = req.body;

  db.query(
    `UPDATE verse
     SET book=?, chapter=?, verse_number=?, verse_text=?, is_favorite=?
     WHERE id=?`,
    [book, chapter, verse_number, verse_text, is_favorite, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send('Updated');
    }
  );
});

// =========================
// TOGGLE favorite 
// =========================
app.patch('/verses/:id/favorite', (req, res) => {
  console.log("ID:", req.params.id);
  console.log("PATCH HIT:", req.params.id);

  db.query(
    `UPDATE verse
     SET is_favorite = IF(is_favorite = 1, 0, 1)
     WHERE id = ?`,
    [req.params.id],
    (err) => {
      if (err) {
        console.log("SQL ERROR:", err);
        return res.status(500).send(err);
      }
      res.send("Favorite toggled");
    }
  );
});

// =========================
// DELETE verse
// =========================
app.delete('/verses/:id', (req, res) => {
  db.query(
    'DELETE FROM verse WHERE id=?',
    [req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send('Deleted');
    }
  );
});

// =========================
// Start server
// =========================
app.listen(3000, () => {
  console.log('Server running on port 3000');
});