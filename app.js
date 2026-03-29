const express = require('express');
const path = require('path')
const app = express();

// ejs->
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const{mainRouter} = require('./routes/mainRoutes');
app.use('/',mainRouter);


const {taskRouter} = require('./routes/taskRoutes');
app.use(taskRouter);

const {errorController} = require('./controller/errorController');
app.use(errorController);
app.listen(4000, ()=>{
    console.log('Started...')
})


// const express = require('express');
// const path = require('path');
// const app = express();

// // ejs ->
// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// const { mainRouter } = require('./routes/mainRoutes');
// app.use('/', mainRouter);

// const { taskRouter } = require('./routes/taskRoutes');
// app.use(taskRouter);

// const { errorController } = require('./controller/errorController');
// app.use(errorController);

// app.listen(4000, () => {
//     console.log('Server Running On 4000');
// });