import { SocketIOProvider } from "../../providers/implementations/SocketIOProvider";
import { SocketIORepository } from "../../repositories/implementations/SocketIORepository";
import { SendApprovedController } from "./SendApprovedController";
import { SendApprovedUseCase } from "./SendApprovedUseCase";

const socketIORepository = new SocketIORepository();
const socketIOProvider = new SocketIOProvider()

const sendApprovedUseCase = new SendApprovedUseCase(socketIOProvider, socketIORepository);

const sendApprovedController = new SendApprovedController(sendApprovedUseCase);

export { sendApprovedController, sendApprovedUseCase };
