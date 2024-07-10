import { Test, TestingModule } from '@nestjs/testing';
import { UserAminDetailService } from './user-amin_detail.service';

describe('UserAminDetailService', () => {
  let service: UserAminDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAminDetailService],
    }).compile();

    service = module.get<UserAminDetailService>(UserAminDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
