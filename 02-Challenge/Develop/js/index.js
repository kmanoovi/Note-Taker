const express = require('express');
const api = require('./js/index');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/assets/notes.html'))
);

app.get('/api/notes', (req, res) => {
  res.json({
    term: 'api',
  });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);