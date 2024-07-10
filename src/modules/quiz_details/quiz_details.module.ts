import { Module } from '@nestjs/common';
import { QuizDetailsService } from './quiz_details.service';
import { QuizDetailsController } from './quiz_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizDetail } from './entities/quiz_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizDetail])],
  controllers: [QuizDetailsController],
  providers: [QuizDetailsService],
  exports: [QuizDetailsService]
})
export class QuizDetailsModule {}
