import { Socket } from "socket.io";

interface IPart {
    name: string;
    description: string;
    value: number;
    priority: number
}

interface IMessage {
    vehicle: string;
    client: string;
    price: number;
    components: Array<IPart>;
}

export interface ISocketMessage {
    socket: Socket;
    message: IMessage
}

export interface ISocketProvider {
    send(data: ISocketMessage): Promise<void>;
}