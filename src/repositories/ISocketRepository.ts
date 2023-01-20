import { SocketIO } from "../models/SocketIO";

export interface ISocketRepository {
    findByEmail(email: string): Promise<SocketIO | undefined>;
    save(socket: SocketIO): Promise<void>;
}