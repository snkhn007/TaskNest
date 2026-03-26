exports.errorController = (req, res)=>{
    // res.sendFile(path.join(__dirname, 'views', '404.html'));  
    res.render('404', {title : '404 Page'});
};