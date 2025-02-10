const express = require('express');
const hostRouter = express.Router();
const { getHostHomes, getAddHome } = require('../controllers/hostController');
const { postAddHome } = require('../controllers/hostController');


hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-home-list", getHostHomes);


exports.hostRouter = hostRouter;