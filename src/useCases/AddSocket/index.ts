import { AddSocketController } from "./AddSocketController";
import { AddSocketUseCase } from "./AddSocketUseCase";

const addSocketUseCase = new AddSocketUseCase();
const addSocketController = new AddSocketController(addSocketUseCase);

export { addSocketController, addSocketUseCase };
