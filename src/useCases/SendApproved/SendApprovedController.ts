import { Request, Response } from "express";
import { SocketIORepository } from "../../repositories/implementations/SocketIORepository";
import { SendApprovedUseCase } from "./SendApprovedUseCase";

export class SendApprovedController {
    constructor(
        private sendApprovedUseCase: SendApprovedUseCase
    ) { }

    async handle(request: Request, response: Response, repository: SocketIORepository): Promise<Response> {
        const { email, context } = request.body;

        try {
            await this.sendApprovedUseCase.execute({
                email,
                message: context,
                repository
            });
            return response.status(200).json({ message: 'Sucess!' });
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }

    }
}