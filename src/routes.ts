import { Request, Response, Router } from "express";
import path from "path";
import { createUserController } from "./useCases/CreateUser";
import { loginUserController } from "./useCases/LoginUser";

const router = Router();

router.get('/', (request: Request, response: Response) => {
    response.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

router.get('/:code', (request: Request, response: Response) => {
    const { code } = request.params;
    response.render(path.resolve(__dirname, 'views', 'code.html'), { code: code });
});

router.post('/login', (req: Request, res: Response) => {
    return loginUserController.handle(req, res);
});

router.post('/create/user', (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

export { router };
