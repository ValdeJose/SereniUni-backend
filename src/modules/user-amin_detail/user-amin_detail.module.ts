import { Module } from '@nestjs/common';
import { UserAminDetailService } from './user-amin_detail.service';
import { UserAminDetailController } from './user-amin_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAminDetail } from './entities/user-amin_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAminDetail])],
  controllers: [UserAminDetailController],
  providers: [UserAminDetailService],
  exports: [UserAminDetailService]
})
export class UserAminDetailModule {}
