import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { QuizType } from "../../quiz_type/entities/quiz_type.entity";

@Entity()
export class Quiz {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column()
    quizTypeId: number; 

    @ManyToOne(() => QuizType)
    @JoinColumn({ name: "quizTypeId" })
    quizType: QuizType;
}
