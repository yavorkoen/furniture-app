const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({text: 'it is working'})
});

app.listen('3030', () => console.log('App is listening on port 3030...'));