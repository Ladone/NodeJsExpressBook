const express = require('express');
const expressHandlebars = require('express-handlebars');
const fortune = require('./lib/fortune');

const app = express();
const port = process.env.port || 3000;

app.engine('hbs', expressHandlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => {
    res.render('about', {fortune: fortune.getFortune()});
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((req, res, next) => {
    res.status(500);
    res.render('500');
});

app.listen(port, () => console.log(`Server has been started by port: ${port}; Press Ctrl+C for end process...`))