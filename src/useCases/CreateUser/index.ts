import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersReposiory";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersReposiroty = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersReposiroty,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
