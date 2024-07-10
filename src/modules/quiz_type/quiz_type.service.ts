import { Injectable } from '@nestjs/common';
import { CreateQuizTypeDto } from './dto/create-quiz_type.dto';
import { UpdateQuizTypeDto } from './dto/update-quiz_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizType } from './entities/quiz_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizTypeService {
  constructor(
    @InjectRepository(QuizType)
    private readonly quizTypeRepository: Repository<QuizType>,
  ) {}
  async create(createQuizTypeDto: CreateQuizTypeDto) {
    return this.quizTypeRepository.save(createQuizTypeDto);
  }

  findAll() {
    return this.quizTypeRepository.find();
  }

  findOne(id: number) {
    return this.quizTypeRepository.findOneBy({id});
  }

  update(id: number, updateQuizTypeDto: UpdateQuizTypeDto) {
    return this.quizTypeRepository.update(id, updateQuizTypeDto);
  }

  remove(id: number) {
    return this.quizTypeRepository.delete(id);
  }
}
