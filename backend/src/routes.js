const express = require('express');
const OngControllers = require('./controllers/OngControllers');
const IncidentControllers = require('./controllers/IncidentControllers');
const ProfileController = require('./controllers/ProfileController');
const SessionControlle = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionControlle.create);

routes.get('/ongs', OngControllers.index);
routes.post('/ongs', OngControllers.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentControllers.create);
routes.get('/incidents', IncidentControllers.index);
routes.delete('/incidents/:id', IncidentControllers.delete);

module.exports = routes;