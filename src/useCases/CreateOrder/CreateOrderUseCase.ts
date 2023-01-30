import { Order } from "../../database/entities/Order";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateOrderRequestDTO } from "./CreateOrderDTO";

export class CreateOrderUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(data: CreateOrderRequestDTO, email: string): Promise<string> {
        const mechanic = await this.userRepository.findMechanicByEmail(email);

        if (!mechanic) {
            throw new Error('Mechanic not found!');
        }

        const order = new Order({ ...data, mechanic: mechanic });

        await this.userRepository.saveOrder(order);

        return order.id;
    }
}