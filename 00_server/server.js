
let http = require('http');
let fs = require('fs');
let url = require('url');
const EventEmmitter = require('events');

let App = {
    start: function(port){
        let emitter = new EventEmmitter();
        let server = http.createServer((request, response) =>{
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            });
            if (request.url == '/'){
                emitter.emit('root', response);
            }
            response.end();
        }).listen(port);
        return emitter;
    }

}

let app = App.start(8000);
app.on('root', function (response){
    response.write('je suis à la racine');
});

/*

let server = http.createServer();

server.on('request', (request, response) => {
    response.writeHead(200);
    let query = url.parse(request.url, true).query;
    let name = query.name === undefined ? 'anonyme' : query.name;

    fs.readFile('index.html', 'utf8', (err, data) => {
        if(err){
            response.writeHead(404);
            response.end("Ce fichier n'existe pas");    
        }   else{
                response.writeHead(200, {
                    'Content-type': 'text/html; charset=utf-8'
                });
                
                data = data.replace('{{ name }}', name);
                response.end(data);
            }

    })

})

server.listen('8080');

*/