import { SocketIOProvider } from "../../providers/implementations/SocketIOProvider";
import { SendApprovedController } from "./SendApprovedController";
import { SendApprovedUseCase } from "./SendApprovedUseCase";

const socketIOProvider = new SocketIOProvider()

const sendApprovedUseCase = new SendApprovedUseCase(socketIOProvider);

const sendApprovedController = new SendApprovedController(sendApprovedUseCase);

export { sendApprovedController, sendApprovedUseCase };

