import { Socket } from "socket.io";

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

export interface ISocketMessage {
    socket: Socket;
    message: IMessage
}

`
{
    socket: object,
    vehicle: 'Fan 125i',
    client: 'Vitor',
    price: 129.59,
    components: [
        {
            name: 'Farol',
            description: 'O farol dianteiro está queimado',
            value: 29.99,
            priority: 2
        },
        {
            name: 'Caixa de luz',
            description: 'Está dando curso nos farois',
            value: 49.99,
            priority: 2
        },
        {
            name: 'Capa do banco',
            description: 'A Capa do banco está rasgada',
            value: 19.99,
            priority: 1
        }
    ]    
}
`
export interface ISocketProvider {
    send(data: ISocketMessage): Promise<void>;
}