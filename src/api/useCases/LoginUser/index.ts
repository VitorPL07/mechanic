import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersReposiory";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const postgresUserRepository = new PostgresUsersRepository();

const loginUserUseCase = new LoginUserUseCase(postgresUserRepository);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserUseCase, loginUserController };
