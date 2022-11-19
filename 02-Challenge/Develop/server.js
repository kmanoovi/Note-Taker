const express = require('express');
const { read } = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const dbData = require('./db/db.json');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/db', (req, res) => res.json(dbData));
app.post('/api/db', (req, res) => {
    console.info(`${req.method} request received to add to db`);
    let response;

    if (req.body && read.body.product) {
        response = {
            status: 'success',
            data: req.body,
        };
        res.json(`Note for ${response.data.product} has been added!`);
    } else {
        res.json('Request body must contain a product name');
    }
    console.log(req.body);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
