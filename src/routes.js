const express = require('express');
const devcontroller = require('./controllers/devcontroller');
const likeController = require('./controllers/likeController');
const dislikeController = require('./controllers/dislikeController');


const routes = express.Router();
routes.get('/devs/', devcontroller.index);
routes.post('/devs', devcontroller.store);
routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/dislikes', dislikeController.store);


module.exports = routes;