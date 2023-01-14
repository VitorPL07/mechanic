import { ISocketMessage, ISocketProvider } from "../ISocketProvider";

export class SocketIOProvider implements ISocketProvider {
    async send(data: ISocketMessage): Promise<void> {
        data.socket.emit('approved', data.message);
    }
}