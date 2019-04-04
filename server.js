const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const links = require('./app/links');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect('mongodb://localhost/link_shortener', {useNewUrlParser: true}).then(() => {

    app.use('/links', links);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});
