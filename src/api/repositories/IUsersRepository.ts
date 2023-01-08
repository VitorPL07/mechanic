import { User } from "../models/User";

export interface ILoginUser {
    email: string,
    password: string
}

export interface IUsersRepository {
    findByEmail(email: string): Promise<any>;
    find(data: ILoginUser): Promise<any>;
    save(user: User): Promise<void>;
}