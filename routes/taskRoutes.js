const express = require('express');
const taskRouter = express.Router();

const{addTask, taskBoard, submit, signIn, filter, taskDel, update, edit, postEditTask} = require('../controller/taskController');
taskRouter.get('/addTask', addTask);
taskRouter.get('/taskBoard', taskBoard);
taskRouter.post('/submit', submit);
taskRouter.get('/signIn', signIn);
taskRouter.get('/taskBoard/:status', filter);

// Delete ->
taskRouter.post('/delete/:taskId', taskDel);
// Done ->
taskRouter.post('/done/:taskId', update);
// Editing ->
taskRouter.get('/addTask/:taskId', edit);
taskRouter.post('/updateTask/:taskId', postEditTask);

exports.taskRouter = taskRouter;