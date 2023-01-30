import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController {
    constructor(
        private createOrderUseCase: CreateOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, context } = request.body;

        try {
            const code = await this.createOrderUseCase.execute(context, email);

            return response.status(200).json({
                message: code
            });
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}