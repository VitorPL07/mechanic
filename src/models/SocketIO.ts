import { Socket } from "socket.io";

export class SocketIO {
    public socket!: Socket;
    public email!: string;

    constructor(props: SocketIO) {
        Object.assign(this, props);
    }
}