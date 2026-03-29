const db = require('../utils/database');

let taskData =[];
exports.Task = class Task{
    constructor(title, category, priority, date, status, description){
        this.title = title;
        this.category = category;
        this.priority = priority;
        this.date = date;
        this.status = status;
        this.description = description;
    }

    save(){
        return db.execute(
            'INSERT INTO tasks (title, category, priority, date, status, description) VALUES (?,?,?,?,?,?)',
            [
                this.title, 
                this.category, 
                this.priority, 
                this.date, 
                this.status, 
                this.description
            ]
        )
    }

    static fetchAll(){
        return db.execute('SELECT * FROM tasks');
    }

    static filterByStatus(status){
        return db.execute('SELECT * FROM tasks WHERE status = ?', [status])
    }
    static filterById(id){
        return db.execute('SELECT * FROM tasks WHERE id = ?', [id])
    }
    static delTaskById(id){
        return db.execute('DELETE FROM tasks WHERE id = ?', [id]);
    }
    static update(id){
        const status = 'completed';
        return db.execute('UPDATE tasks SET status = ? WHERE id = ?',[status, id]);
    }
    static updateById(id, title, category, priority, date, status, description) {
        return db.execute(
            'UPDATE tasks SET title = ?, category = ?, priority = ?, date = ?, status = ?, description = ? WHERE id = ?',
            [title, category, priority, date, status, description, id]
        );
    }
}