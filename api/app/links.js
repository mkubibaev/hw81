const express = require('express');
const nanoid = require('nanoid');
const Link = require('../models/Link');

const router = express.Router();

router.get('/:shortUrl', (req, res) => {
    Link.findOne({shortUrl: req.params.shortUrl})
        .then(result => {
            if (result) {
                return res.status(301).redirect(result.originalUrl);
            }
            res.sendStatus(404);
        })
        .catch(() => res.sendStatus(500));
});

router.post('/', (req, res) => {
    const newLink = req.body;

    newLink.shortUrl = nanoid(7);

    const link = new Link(newLink);
    link.save()
        .then(result => res.send(result))
        .catch(() => res.status(400).send(error));

});


module.exports = router;
