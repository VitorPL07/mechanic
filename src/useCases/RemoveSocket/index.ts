import { RemoveSocketController } from "./RemoveSocketController";
import { RemoveSocketUseCase } from "./RemoveSocketUseCase";

const removeSocketUseCase = new RemoveSocketUseCase();
const removeSocketController = new RemoveSocketController(removeSocketUseCase);

export { removeSocketController, removeSocketUseCase };

