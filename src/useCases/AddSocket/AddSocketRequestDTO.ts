import { Socket } from "socket.io";
import { SocketIORepository } from "../../repositories/implementations/SocketIORepository";

export interface AddSocketRequestDTO {
    socket: Socket;
    email: string;
    repository: SocketIORepository
}