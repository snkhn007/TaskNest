exports.addTask = (req, res)=>{ 
    res.render('create', {title : 'Create Task'});
};
exports.taskBoard = (req, res)=>{
    res.render('taskBoard', {title : 'Task Board'});
};
exports.submit =  (req, res)=>{
    res.redirect('/');
};
exports.signIn = (req, res)=>{
    res.render('signIn', {title : 'Sign In Page'});
};