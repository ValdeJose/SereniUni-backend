import { Injectable } from '@nestjs/common';
import { CreateUserDetailDto } from './dto/create-user_detail.dto';
import { UpdateUserDetailDto } from './dto/update-user_detail.dto';
import { UserDetail } from './entities/user_detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserDetailService {
  constructor(
    @InjectRepository(UserDetail)
    private readonly userDetailRepository: Repository<UserDetail>,
  ) {}
  async create(createUserDetailDto: CreateUserDetailDto) {
    return this.userDetailRepository.save(createUserDetailDto);
  }

  findAll() {
    return this.userDetailRepository.find();
  }

  findOne(id: number) {
    return this.userDetailRepository.findOneBy({id});
  }

  update(id: number, updateUserDetailDto: UpdateUserDetailDto) {
    return this.userDetailRepository.update(id, updateUserDetailDto);
  }

  remove(id: number) {
    return this.userDetailRepository.delete(id);
  }
}
