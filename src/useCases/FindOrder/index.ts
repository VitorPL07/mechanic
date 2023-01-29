import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersReposiory";
import { FindOrderController } from "./FindOrderController";
import { FindOrderUseCase } from "./FindOrderUseCase";

const postgresUsersReposiroty = new PostgresUsersRepository();

const findOrderUseCase = new FindOrderUseCase(postgresUsersReposiroty);

const findOrderController = new FindOrderController(findOrderUseCase);

export { findOrderController, findOrderUseCase };
