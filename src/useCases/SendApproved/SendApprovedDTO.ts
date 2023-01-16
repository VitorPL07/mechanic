interface IPart {
    name: string;
    description: string;
    value: number;
    priority: number
}

export interface IMessage {
    vehicle: string;
    client: string;
    price: number;
    components: Array<IPart>;
}

export interface SendApprovedRequestDTO {
    email: string;
    message: IMessage;
}