import { Entity, Column, ManyToOne, JoinColumn, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity"; 
import { Quiz } from "../../quizzes/entities/quiz.entity"; 

@Entity()
export class QuizDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.username)
    @JoinColumn({ name: "username" }) // Esto asocia username con la clave foránea
    user: User;

    @ManyToOne(() => Quiz, quiz => quiz.score)
    @JoinColumn({ name: "score" }) // Esto asocia score con la clave foránea
    quizScore: Quiz;

    @ManyToOne(() => Quiz, quiz => quiz.name)
    @JoinColumn({ name: "name" }) // Esto asocia name con la clave foránea
    quizName: Quiz;

    @CreateDateColumn({ type: 'date' })
    fechaCreacion: Date;

    @CreateDateColumn({ type: 'time' })
    horaCreacion: string;
}
