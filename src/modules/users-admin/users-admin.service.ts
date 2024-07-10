import { Injectable } from '@nestjs/common';
import { CreateUsersAdminDto } from './dto/create-users-admin.dto';
import { UpdateUsersAdminDto } from './dto/update-users-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersAdmin } from './entities/users-admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersAdminService {
  constructor(
    @InjectRepository(UsersAdmin)
    private readonly usersAdminRepository: Repository<UsersAdmin>,
  ) {}
  async create(createUsersAdminDto: CreateUsersAdminDto) {
    return this.usersAdminRepository.save(createUsersAdminDto);
  }

  findAll() {
    return this.usersAdminRepository.find();
  }

  findOneByid(id: number) {
    return this.usersAdminRepository.findOneBy({id});
  }

  findOneByusername(username: string) {
    return this.usersAdminRepository.findOneBy({username});
  }

  update(id: number, updateUsersAdminDto: UpdateUsersAdminDto) {
    return this.usersAdminRepository.update(id, updateUsersAdminDto);
  }

  remove(id: number) {
    return this.usersAdminRepository.delete(id);
  }
}
