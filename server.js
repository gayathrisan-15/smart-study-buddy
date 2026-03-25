const express = require('express');
const app = express();

app.use(express.json());

let notes = [];

app.post('/notes', (req, res) => {
  const { text } = req.body;

  // simple summary (basic version)
  const summary = text.substring(0, 50);

  notes.push(summary);

  res.json({ summary });
});

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

