
import { UsersAdmin } from "src/modules/users-admin/entities/users-admin.entity";
import { PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, CreateDateColumn } from "typeorm";

export class UserAminDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UsersAdmin)
    @JoinColumn()
    user: UsersAdmin;

    @Column()
    userAdminId: number;

    @Column({ type: 'varchar', length: 75 })
    username: string;

    @CreateDateColumn({ type: 'date' })
    fechaCreacion: Date;

    @CreateDateColumn({ type: 'time' })
    horaCreacion: string;

}
