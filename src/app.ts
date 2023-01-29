import cors from 'cors';
import ejs from 'ejs';
import express from 'express';
import http from 'http';
import socket, { Socket } from 'socket.io';
import { router, socketRepository } from './routes';
import { addSocketController } from './useCases/AddSocket';
import { removeSocketController } from './useCases/RemoveSocket';

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.engine('html', ejs.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

io.on('connection', (client: Socket) => {
    console.log(`Client: [${client.id}] connected!`);

    client.on('add', async (data) => {
        await addSocketController.handle(client, data.email, socketRepository);
    });

    client.on('disconnect', async () => {
        await removeSocketController.handle(client.id, socketRepository)
        console.log(`Client: [${client.id}] disconnected!`);
    });
});


export { server };

