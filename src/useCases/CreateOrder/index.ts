import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersReposiory";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

const postgresUserRepository = new PostgresUsersRepository()

const createOrderUseCase = new CreateOrderUseCase(postgresUserRepository);

const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController, createOrderUseCase };
