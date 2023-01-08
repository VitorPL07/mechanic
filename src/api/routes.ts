import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { loginUserController } from "./useCases/LoginUser";

const router = Router();

router.post('/login', (req: Request, res: Response) => {
    return loginUserController.handle(req, res);
});

router.post('/create/user', (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

export { router };
