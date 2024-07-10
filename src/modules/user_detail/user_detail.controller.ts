import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDetailService } from './user_detail.service';
import { CreateUserDetailDto } from './dto/create-user_detail.dto';
import { UpdateUserDetailDto } from './dto/update-user_detail.dto';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';

@ApiTags('user-detail')
@ApiBearerAuth()
@Controller('user-detail')
export class UserDetailController {
  constructor(private readonly userDetailService: UserDetailService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'The recorded has been successfully created.'})
  @ApiForbiddenResponse({description: 'Forbidden.'})
  create(@Body() createUserDetailDto: CreateUserDetailDto) {
    return this.userDetailService.create(createUserDetailDto);
  }

  @Get('getall')
  findAll() {
    return this.userDetailService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.userDetailService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateUserDetailDto: UpdateUserDetailDto) {
    return this.userDetailService.update(+id, updateUserDetailDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.userDetailService.remove(+id);
  }
}
