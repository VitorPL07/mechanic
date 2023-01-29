import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginUserRequestDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(data: ILoginUserRequestDTO) {
        const user = await this.userRepository.findMechanic(data);

        if (!user) {
            throw new Error('User not found!');
        }

        return user;
    }
}