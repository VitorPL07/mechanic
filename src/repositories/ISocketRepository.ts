import { SocketIO } from "../models/SocketIO";

export interface ISocketRepository {
    findByEmail(email: string): Promise<SocketIO | undefined>;
    findByID(id: string): Promise<SocketIO | undefined>
    save(socket: SocketIO): Promise<void>;
    remove(socket: SocketIO): Promise<void>;
}