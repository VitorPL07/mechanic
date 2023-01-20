import { SocketIO } from "../../models/SocketIO";
import { AddSocketRequestDTO } from "./AddSocketRequestDTO";

export class AddSocketUseCase {
    async execute(data: AddSocketRequestDTO) {
        const socketio = await data.repository.findByEmail(data.email);

        if (socketio) {
            throw new Error('Socket already exists!');
        }

        const socket = new SocketIO(data);

        await data.repository.save(socket);
    }
}