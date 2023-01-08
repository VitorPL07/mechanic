import { client } from "../../database/db";
import { User } from "../../models/User";
import { ILoginUser, IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<any> {
        const { rows } = await client.query('SELECT * FROM test.users WHERE email = $1', [email]);

        return rows[0];
    }

    async save(user: User): Promise<void> {
        await client.query('INSERT INTO test.users VALUES ($1, $2, $3, $4)', [user.id, user.name, user.email, user.password]);
    }

    async find(data: ILoginUser): Promise<any> {
        const { rows } = await client.query('SELECT * FROM test.users WHERE email = $1 AND password = $2', [data.email, data.password]);

        return rows[0];
    }
}