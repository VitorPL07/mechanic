import { SocketIORepository } from "../../repositories/implementations/SocketIORepository";
import { RemoveSocketUseCase } from "./RemoveSocketUseCase";

export class RemoveSocketController {
    constructor(
        private removeSocketUseCase: RemoveSocketUseCase
    ) { }

    async handle(id: string, repository: SocketIORepository): Promise<void> {
        try {
            await this.removeSocketUseCase.execute({
                id,
                repository
            });
        } catch (err: any) {
            console.log(err.message || 'Unexpected error');
        }
    }
}