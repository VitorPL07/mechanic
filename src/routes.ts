import { Request, Response, Router } from "express";
import path from "path";
import { SocketIORepository } from "./repositories/implementations/SocketIORepository";
import { createUserController } from "./useCases/CreateUser";
import { loginUserController } from "./useCases/LoginUser";
import { sendApprovedController } from "./useCases/SendApproved";

const router = Router();
const socketRepository = new SocketIORepository();

router.get('/', (request: Request, response: Response) => {
    response.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

router.get('/client/:code', (request: Request, response: Response) => {
    const { code } = request.params;
    response.render(path.resolve(__dirname, 'views', 'code.html'), { code: code });
});

router.post('/login', (request: Request, response: Response) => {
    return loginUserController.handle(request, response);
});

router.post('/create/user', (request: Request, response: Response) => {
    return createUserController.handle(request, response);
});

router.post('/send', (request: Request, response: Response) => {
    return sendApprovedController.handle(request, response, socketRepository);
})

export { router, socketRepository };

