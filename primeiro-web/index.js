const express = require('express');
const app = express();
const session = require('express-session');

// aplicando sessão na app
app.use(session({
    secret: 'fullstackacademy',
    saveUninitialized: true,
    resave: true
}))


app.get('/', (request, response) => {
    let i = 0;
    if (request.session.i) {
        i = request.session.i;
    }
    i++;
    request.session.i = i;
    response.send('Olá Fullstack Acadamy '+ i);
})
app.get('/page1', (request, response) => {
    let i = 0;
    if (request.session.i) {
        i = request.session.i;
    }
    i++;
    request.session.i = i;
    response.send('Olá '+i);
})

app.listen(3000, err => {
    if (err) {
        console.log('Não foi possível iniciar');
    }else{
        console.log('Servidor rodando');
    }
})