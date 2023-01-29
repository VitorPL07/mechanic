import { Mechanic } from "../database/entities/Mechanic";
import { Order } from "../database/entities/Order";

export interface ILoginUser {
    email: string,
    password: string
}

export interface IUsersRepository {
    findMechanicByEmail(email: string): Promise<Mechanic | null>;
    findOrderByID(id: string): Promise<Order | null>;
    findMechanic(data: ILoginUser): Promise<Mechanic | null>;
    saveOrder(order: Order): Promise<void>;
    saveMechanic(user: Mechanic): Promise<void>;
}