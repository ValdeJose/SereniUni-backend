import { Injectable } from '@nestjs/common';
import { CreateUserAminDetailDto } from './dto/create-user-amin_detail.dto';
import { UpdateUserAminDetailDto } from './dto/update-user-amin_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAminDetail } from './entities/user-amin_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserAminDetailService {
  constructor(
    @InjectRepository(UserAminDetail)
    private readonly userAminDetailRepository: Repository<UserAminDetail>
  ) {}
  async create(createUserAminDetailDto: CreateUserAminDetailDto) {
    return this.userAminDetailRepository.save(createUserAminDetailDto);
  }

  findAll() {
    return this.userAminDetailRepository.find();
  }

  findOne(id: number) {
    return this.userAminDetailRepository.findOneBy({id});
  }

  update(id: number, updateUserAminDetailDto: UpdateUserAminDetailDto) {
    return this.userAminDetailRepository.update(id, updateUserAminDetailDto);
  }

  remove(id: number) {
    return this.userAminDetailRepository.delete(id);
  }
}
