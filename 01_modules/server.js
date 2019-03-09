let express = require('express');
let app = express();

app.get('/', (request, response) => {
    response.send("Salut tu es à la racine");
})

app.get('/demo', (request, response) => {
    response.send("Yo t'es sur la demo")
})

app.listen(8000);   