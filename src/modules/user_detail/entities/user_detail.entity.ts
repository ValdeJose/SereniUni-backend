import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class UserDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @Column()
    userId: number;

    @Column({ type: 'varchar', length: 75 })
    username: string;

    @CreateDateColumn({ type: 'date' })
    fechaCreacion: Date;

    @CreateDateColumn({ type: 'time' })
    horaCreacion: string;

    @Column({
        type: "enum",
        enum: ["activo", "inactivo"],
        default: "activo"
    })
    status: "activo" | "inactivo";
}
