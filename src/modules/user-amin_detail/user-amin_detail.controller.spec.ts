import { Test, TestingModule } from '@nestjs/testing';
import { UserAminDetailController } from './user-amin_detail.controller';
import { UserAminDetailService } from './user-amin_detail.service';

describe('UserAminDetailController', () => {
  let controller: UserAminDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAminDetailController],
      providers: [UserAminDetailService],
    }).compile();

    controller = module.get<UserAminDetailController>(UserAminDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
