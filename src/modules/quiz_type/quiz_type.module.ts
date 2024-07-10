import { Module } from '@nestjs/common';
import { QuizTypeService } from './quiz_type.service';
import { QuizTypeController } from './quiz_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizType } from './entities/quiz_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizType])],
  controllers: [QuizTypeController],
  providers: [QuizTypeService],
  exports: [QuizTypeService]
})
export class QuizTypeModule {}
