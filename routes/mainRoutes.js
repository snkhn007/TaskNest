const express = require('express');
const mainRouter = express.Router();

const{home} = require('../controller/mainController');
mainRouter.get('/',home);

exports.mainRouter = mainRouter;