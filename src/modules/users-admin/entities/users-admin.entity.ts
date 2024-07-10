import { PrimaryGeneratedColumn, Column } from "typeorm";

export class UsersAdmin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 75, unique:true })
    username: string;

    @Column({ type: 'varchar', length: 255, unique:true })
    email: string;

    @Column({ type: 'varchar', length: 20 })
    password: string;
}
