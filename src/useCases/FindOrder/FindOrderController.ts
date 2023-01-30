import { Request, Response } from "express";
import { FindOrderUseCase } from "./FindOrderUseCase";

export class FindOrderController {
    constructor(
        private findOrderUseCase: FindOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { code } = request.body;

        try {
            const order = await this.findOrderUseCase.execute(code);
            //return response.render(path.resolve(__dirname, '..', '..', 'views', 'code.html'), { orderJson });

            return response.status(200).json(order);
        } catch (error: any) {
            //return response.render(path.resolve(__dirname, '..', '..', 'views', 'error.html'));
            return response.status(404).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}