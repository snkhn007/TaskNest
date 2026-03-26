const fs = require('fs');
const path = require('path');


const taskData =[];
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
    taskData.push(this);
    const filePath = path.join(__dirname, '../', 'data', 'tasks.json');
    fs.writeFile(filePath, JSON.stringify(taskData), (err) => {
        if(err){
            console.error("Error writing file:", err);
        } else {
            console.log("File saved successfully");
        }
    });
    }

    static fetchAll(){
        return taskData;
    }
}