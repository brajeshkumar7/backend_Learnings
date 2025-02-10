const express = require('express');
const homeRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

homeRouter.get("/", (req, res, next) => {
    console.log('handling / home path for the middleware')
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})


module.exports = homeRouter;