import { SocketIORepository } from "../../repositories/implementations/SocketIORepository";

export interface RemoveSocketRequestDTO {
    id: string;
    repository: SocketIORepository
}