import { ISocketProvider } from "../../providers/ISocketProvider";
import { SendApprovedRequestDTO } from "./SendApprovedDTO";

export class SendApprovedUseCase {
    constructor(
        private socketProvider: ISocketProvider,
    ) { }

    async execute(data: SendApprovedRequestDTO) {
        const socketio = await data.repository.findByEmail(data.email);

        if (!socketio) {
            throw new Error('Socket not found!');
        }

        this.socketProvider.send({
            socket: socketio.socket,
            message: data.message
        })
    }
}