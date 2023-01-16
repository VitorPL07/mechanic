import { SocketIO } from "../models/SocketIO";

export interface ISocketRepository {
    findByEmail(email: string): Promise<SocketIO>;
    save(socket: SocketIO): Promise<void>;
}