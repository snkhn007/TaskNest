const express = require('express');
const taskRouter = express.Router();

const{addTask, taskBoard, submit, signIn} = require('../controller/taskController');
taskRouter.get('/addTask', addTask);
taskRouter.get('/taskBoard', taskBoard);
taskRouter.post('/submit', submit);
taskRouter.get('/signIn', signIn);

exports.taskRouter = taskRouter;