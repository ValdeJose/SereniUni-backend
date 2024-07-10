import { Injectable } from '@nestjs/common';
import { CreateQuizDetailDto } from './dto/create-quiz_detail.dto';
import { UpdateQuizDetailDto } from './dto/update-quiz_detail.dto';
import { QuizDetail } from './entities/quiz_detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuizDetailsService {
  constructor(
    @InjectRepository(QuizDetail)
    private readonly quizDetailRepository: Repository<QuizDetail>,
  ) {}

  async create(createQuizDetailDto: CreateQuizDetailDto) {
    return this.quizDetailRepository.save(createQuizDetailDto);
  }

  findAll() {
    return this.quizDetailRepository.find();
  }

  findOneByid(id: number) {
    return this.quizDetailRepository.findOneBy({id});
  }

  update(id: number, updateQuizDetailDto: UpdateQuizDetailDto) {
    return this.quizDetailRepository.update(id, updateQuizDetailDto);
  }

  remove(id: number) {
    return this.quizDetailRepository.delete(id);
  }
}
