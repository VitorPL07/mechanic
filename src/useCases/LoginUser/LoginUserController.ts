import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
    constructor(
        private loginUserUseCase: LoginUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const user = await this.loginUserUseCase.execute({
                email,
                password
            });
            return response.status(200).json(user);
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }


    }
}