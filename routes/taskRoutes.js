const express = require('express');
const taskRouter = express.Router();

const{addTask, taskBoard, submit, signIn, filter} = require('../controller/taskController');
taskRouter.get('/addTask', addTask);
taskRouter.get('/taskBoard', taskBoard);
taskRouter.post('/submit', submit);
taskRouter.get('/signIn', signIn);
taskRouter.get('/taskBoard/:status', filter);

exports.taskRouter = taskRouter;