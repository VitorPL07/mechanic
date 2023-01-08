import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginUserDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(data: ILoginUserDTO) {
        const user = await this.userRepository.find(data);

        if (!user) {
            throw new Error('User not found!');
        }

        return user;
    }
}