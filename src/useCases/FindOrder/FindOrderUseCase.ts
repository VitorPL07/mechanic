import { IUsersRepository } from "../../repositories/IUsersRepository";

export class FindOrderUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(code: string) {
        const order = await this.userRepository.findOrderByID(code);

        if (!order) {
            throw new Error('Order not found!');
        }

        return order;
    }
}