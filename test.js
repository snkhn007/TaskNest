const db = require('./utils/database');
db.execute('SELECt * FROM tasks'). then(([result, fields])=>{
    console.log('Table contents: ', result);
}).catch((err)=>{
    console.log('Error occured: ', err);
})