import { randomUUID } from 'crypto';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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

    @CreateDateColumn()
    created_at!: Date;

    constructor(props: Omit<Mechanic, 'id' | 'created_at'>, id?: string) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = randomUUID()
        }
    }
}