import orm from '../../../ormconfig';
import { Mechanic } from '../../database/entities/Mechanic';
import { Order } from '../../database/entities/Order';
import { ILoginUser, IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
    async findMechanicByEmail(email: string): Promise<Mechanic | null> {
        const mechanic = await orm.getRepository(Mechanic).findOne({
            where: {
                email: email
            }
        });

        return mechanic;
    }

    async findOrderByID(id: string): Promise<Order | null> {
        const order = await orm.getRepository(Order).findOne({
            where: {
                id: id
            }
        });

        return order;
    }

    async findMechanic(props: ILoginUser): Promise<Mechanic | null> {
        const mechanic = await orm.getRepository(Mechanic).findOne({
            where: {
                email: props.email,
                password: props.password
            }
        });

        return mechanic;
    }

    async saveOrder(props: Order): Promise<void> {
        await orm.getRepository(Order).save(props);
    }

    async saveMechanic(props: Mechanic): Promise<void> {
        await orm.getRepository(Mechanic).save(props);
    }
}