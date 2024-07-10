import { Column, PrimaryGeneratedColumn } from "typeorm";

export class QuizType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 5, unique: true })
    codigo: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    name: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    descripcion: string;
}
