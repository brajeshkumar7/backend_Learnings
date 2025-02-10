const express = require('express');
const contactRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/path');


contactRouter.get("/contact-us", (req, res, next) => {
    console.log('handling /contact-us get method path for the middleware')
    res.sendFile(path.join(rootDir, 'views', 'giveDetails.html'));
})
contactRouter.post('/contact-us', (req, res, next) => {
    console.log('handling /contact-us post method path for the middleware', req.body);
    //res.redirect('/')
    res.sendFile(path.join(rootDir, 'views', 'detailsGiven.html'));
})


module.exports = contactRouter;