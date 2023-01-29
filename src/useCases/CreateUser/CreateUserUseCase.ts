
import { Mechanic } from "../../database/entities/Mechanic";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }
    async execute(data: ICreateUserRequestDTO) {
        const mechanicAlreadyExists = await this.usersRepository.findMechanicByEmail(data.email);

        if (mechanicAlreadyExists) {
            throw new Error('User already exists.');
        }

        const mechanic = new Mechanic(data);

        await this.usersRepository.saveMechanic(mechanic);
    }
}