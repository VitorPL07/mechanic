import { SocketIO } from "../../models/SocketIO";
import { ISocketRepository } from "../ISocketRepository";

export class SocketIORepository implements ISocketRepository {
    private sockets: Array<SocketIO> = [];

    async findByEmail(email: string): Promise<SocketIO | undefined> {
        const socketio = this.sockets.find((socketio) => socketio.email == email);

        return socketio;
    }

    async findByID(id: string): Promise<SocketIO | undefined> {
        const socketio = this.sockets.find((socketio) => socketio.socket.id == id);

        return socketio;
    }

    async save(socket: SocketIO): Promise<void> {
        this.sockets.push(socket);
    }

    async remove(socket: SocketIO): Promise<void> {
        this.sockets.splice(this.sockets.indexOf(socket))
    }
}