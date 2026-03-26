exports.addTask = (req, res)=>{ 
    res.render('create', {title : 'Create Task'});
};
exports.taskBoard = (req, res)=>{
    res.render('taskBoard', {title : 'Task Board', taskBoard : Task.fetchAll()});
};
const {Task} = require('../model/data');
exports.submit =  (req, res)=>{
    const{title , category,priority,date,status,description} = req.body;
    const task = new Task (title , category,priority,date,status,description);
    task.save();
    console.log(Task.fetchAll());
    res.redirect('/');
};
exports.signIn = (req, res)=>{
    res.render('signIn', {title : 'Sign In Page'});
};