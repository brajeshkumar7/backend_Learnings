const express = require('express');
const storeRouter = express.Router();
const { getIndex, getHomes, getBookings, getFavouriteList } = require('../controllers/storeController');



storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourites", getFavouriteList);



module.exports = storeRouter;