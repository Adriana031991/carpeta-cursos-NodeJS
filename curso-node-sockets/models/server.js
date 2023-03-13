const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        this.sockets();
    }



    middlewares() {

        // CORS
        this.app.use(cors());

        // // Lectura y parseo del body
        // this.app.use( express.json() );

        // Directorio Público
        this.app.use(express.static('public'));


    }

    routes() {

        // this.app.use( this.paths.auth, require('../routes/auth'));

    }

    sockets() {
        this.io.on('connection', client => {

            // client.on('event', data => { /* … */ });
            client.on('disconnect', () => { console.log('cliente desconectado') });
          });
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;
