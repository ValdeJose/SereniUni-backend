import { Module } from '@nestjs/common';
import { UsersAdminService } from './users-admin.service';
import { UsersAdminController } from './users-admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersAdmin } from './entities/users-admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersAdmin])],
  controllers: [UsersAdminController],
  providers: [UsersAdminService],
  exports: [UsersAdminService]
})
export class UsersAdminModule {}
