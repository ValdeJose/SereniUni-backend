import { Test, TestingModule } from '@nestjs/testing';
import { QuizTypeController } from './quiz_type.controller';
import { QuizTypeService } from './quiz_type.service';

describe('QuizTypeController', () => {
  let controller: QuizTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizTypeController],
      providers: [QuizTypeService],
    }).compile();

    controller = module.get<QuizTypeController>(QuizTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
