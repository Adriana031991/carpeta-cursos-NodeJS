require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT ;

//handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//midelware -> funcion que se ejecuta antes de alguna cosa
//servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('jola')
    res.render('home', {
        name:'course node with express',
        title: 'Course Of Node'});
})


app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', {
        name:'course node with express',
        title: 'Course Of Node'});
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        name:'course node with express',
        title: 'Course Of Node'});
})

app.get('*', (req, res) => {
    // res.sendFile(__dirname + '/public/404.html')
    res.render('404');
})

app.listen(port)