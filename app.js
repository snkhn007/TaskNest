const express = require('express');
const path = require('path')
const app = express();

// ejs->
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'views', 'home.html'));
    res.render('home', {title : 'Home'});
})
app.get('/addTask', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'views', 'create.html'));  
    res.render('create', {title : 'Create Task'});
})
app.get('/taskBoard', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'views', 'taskBoard.html'));  
    res.render('taskBoard', {title : 'Task Board'});
})
app.post('/submit', (req, res)=>{
    res.redirect('/');
})
// wil be made in future
app.get('/signIn', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'views', 'signIn.html'));  
    res.render('signIn', {title : 'Sign In Page'});
})
app.use((req, res)=>{
    // res.sendFile(path.join(__dirname, 'views', '404.html'));  
    res.render('404', {title : '404 Page'});
})
app.listen(4000, ()=>{
    console.log('Started...')
})