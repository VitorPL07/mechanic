import { Socket } from "socket.io";
import { SocketIORepository } from "../../repositories/implementations/SocketIORepository";
import { AddSocketUseCase } from "./AddSocketUseCase";

export class AddSocketController {
    constructor(
        private addSocketUseCase: AddSocketUseCase
    ) { }

    async handle(socket: Socket, email: string, repository: SocketIORepository): Promise<void> {
        try {
            await this.addSocketUseCase.execute({
                socket,
                email,
                repository
            });
        } catch (err: any) {
            console.log(err.message || 'Unexpected error');
        }
    }
}