import { ISocketProvider } from "../../providers/ISocketProvider";
import { ISocketRepository } from "../../repositories/ISocketRepository";
import { SendApprovedRequestDTO } from "./SendApprovedDTO";

export class SendApprovedUseCase {
    constructor(
        private socketProvider: ISocketProvider,
        private socketRepository: ISocketRepository
    ) { }

    async execute(data: SendApprovedRequestDTO) {
        const socketio = await this.socketRepository.findByEmail(data.email);

        if (!socketio) {
            throw new Error('SocketIO not registed');
        }

        this.socketProvider.send({
            socket: socketio.socket,
            message: data.message
        })

    }
}