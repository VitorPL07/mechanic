import { Request, Response } from "express";
import path from "path";
import { FindOrderUseCase } from "./FindOrderUseCase";

export class FindOrderController {
    constructor(
        private findOrderUseCase: FindOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<void> {
        const { code } = request.params;

        try {
            const order = await this.findOrderUseCase.execute(code);
            return response.render(path.resolve(__dirname, '..', '..', 'views', 'code.html'), { order: order });
        } catch (error: any) {
            return response.render(path.resolve(__dirname, '..', '..', 'views', 'error.html'));
        }
    }
}