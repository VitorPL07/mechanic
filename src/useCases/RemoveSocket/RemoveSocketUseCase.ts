import { RemoveSocketRequestDTO } from "./RemoveSocketRequestDTO";

export class RemoveSocketUseCase {
    async execute(data: RemoveSocketRequestDTO) {
        const socketio = await data.repository.findByID(data.id);

        if (!socketio) {
            throw new Error('Socket not exists!');
        }

        await data.repository.remove(socketio);
    }
}