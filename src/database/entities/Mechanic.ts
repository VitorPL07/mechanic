import { randomUUID } from 'crypto';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Order } from './Order';

@Entity('mechanic')
export class Mechanic {
    @PrimaryColumn({ type: 'uuid' })
    id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => Order, order => order.mechanic)
    orders!: Order[]

    @CreateDateColumn()
    created_at!: Date;

    constructor(props: Omit<Mechanic, 'id' | 'created_at' | 'orders'>) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = randomUUID()
        }
    }
}