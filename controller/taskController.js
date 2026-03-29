const {Task} = require('../model/data');

exports.addTask = (req, res) => {
    res.render('create', {
        title: 'Create Task',
        editing: false,
        taskVal: {}
    });
};
exports.taskBoard = (req, res)=>{
    Task.fetchAll().then(([result, fields])=>{
        res.render('taskBoard', {title : 'Task Board', taskBoard : result, status:'all'});
    }).catch((err)=>{
        console.log(err);
    })
};
exports.submit =  (req, res)=>{
    const{title , category,priority,date,status,description} = req.body;
    const task = new Task (title , category,priority,date,status,description);
    task.save().then(([result, fields])=>{
        res.redirect('/');
    }).catch((err)=>{
        console.log(err);
    })
};
exports.signIn = (req, res)=>{
    res.render('signIn', {title : 'Sign In Page'});
};

exports.filter = (req, res)=>{
    const status = req.params.status;
    Task.filterByStatus(status).then(([result, fields])=>{
        res.render('taskBoard', {title : 'taskBoard', taskBoard : result, status:status});
    }).catch((err)=>{
        console.log(err);
    });
}

exports.taskDel = (req, res)=>{
    const taskId = req.params.taskId;
    Task.delTaskById(taskId).then(([result, fields])=>{
        res.redirect('/taskBoard');
    }).catch((err)=>{
        console.log(err);
    })
}

exports.update = (req, res)=>{
    const taskId = req.params.taskId;
    Task.update(taskId).then(([result, fields])=>{
        res.redirect('/taskBoard');
    }).catch((err)=>{
        console.log(err);
    })
}

exports.edit = (req, res) => {
    const editing = req.query.editing === 'true';
    const taskId = req.params.taskId;

    Task.filterById(taskId).then(([result, fiedls])=>{
        // result[0] -> actual task object not an array 
        res.render('create', {title : 'Create Task', taskVal:result[0], editing:editing});
    }).catch((err)=>{
        console.log(err);
    })
};

exports.postEditTask = (req, res) => {
    const taskId = req.params.taskId;
    const { title, category, priority, date, status, description } = req.body;

    Task.updateById(taskId, title, category, priority, date, status, description)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};