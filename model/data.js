const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../', 'data', 'tasks.json');

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
        Task.fetchAll((data)=>{
            taskData = data;
            taskData.push(this);
            // console.log('All Tasks: ', taskData);
            fs.writeFile(filePath, JSON.stringify(taskData, null, 2), (err) => {
                if(err){
                    console.error("Error writing file:", err);
                } else {
                    console.log("File saved successfully");
                }
            });
        });
    }

    static fetchAll(callback){
        fs.readFile(filePath, 'utf8', (err, data)=>{
            let callbackData;
            if(err){
                console.log('Error reading file, resetting file: ', err);
                return callback([]);
            }else{
                try{
                    callbackData = data ? JSON.parse(data) : [];
                }catch{
                    console.log('Invalid Json');
                    return callback([]);
                }
            }
            callback(callbackData);
        })
    }

    static filterByStatus(status, callback){
        let reqtasks = [];
        Task.fetchAll((alltasks)=>{
            console.log("All Tasks: ",alltasks);
            for(let i =0; i< alltasks.length; i++){
                if(String(alltasks[i].status) === status){
                    reqtasks.push(alltasks[i]);
                }
            }
            callback(reqtasks);
        })
    }
}