import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        await this.createUserUseCase.execute({
            name,
            email,
            password
        }).catch((err: any) => {
            console.log(err);
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        })
        return response.status(201).json({
            message: 'User create'
        });
    };
}