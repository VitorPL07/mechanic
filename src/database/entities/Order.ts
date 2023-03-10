import { randomUUID } from 'crypto';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Mechanic } from './Mechanic';

interface IComponent {
    name: string;
    description: string;
    value: number;
    priority: number;
}

@Entity('order')
export class Order {
    @PrimaryColumn({ type: 'uuid' })
    id!: string;

    @Column()
    vehicle!: string;

    @Column()
    client!: string;

    @Column({ type: 'float' })
    price!: number;

    @Column()
    mechanic_id!: string;

    @ManyToOne(() => Mechanic, mechanic => mechanic.id)
    @JoinColumn({ name: 'mechanic_id' })
    mechanic!: Mechanic

    @Column('json')
    components!: IComponent[]

    @CreateDateColumn()
    created_at!: Date;

    constructor(props: Omit<Order, 'id' | 'created_at' | 'mechanic_id'>) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = randomUUID();
        }
    }
}