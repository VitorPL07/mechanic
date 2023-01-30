
interface Components {
    name: string;
    description: string;
    value: number;
    priority: number;
}

export interface CreateOrderRequestDTO {
    vehicle: string;
    client: string;
    price: number;
    components: Array<Components>;
}