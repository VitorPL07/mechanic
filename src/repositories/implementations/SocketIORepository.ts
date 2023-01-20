import { SocketIO } from "../../models/SocketIO";
import { ISocketRepository } from "../ISocketRepository";

export class SocketIORepository implements ISocketRepository {
    private sockets: Array<SocketIO> = [];

    async findByEmail(email: string): Promise<SocketIO | undefined> {
        const socketio = this.sockets.find((socketio) => socketio.email == email);

        return socketio
    }

    async save(socket: SocketIO): Promise<void> {
        this.sockets.push(socket);
    }
}