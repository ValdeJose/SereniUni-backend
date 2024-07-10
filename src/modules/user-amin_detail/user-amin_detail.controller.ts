import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAminDetailService } from './user-amin_detail.service';
import { CreateUserAminDetailDto } from './dto/create-user-amin_detail.dto';
import { UpdateUserAminDetailDto } from './dto/update-user-amin_detail.dto';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';

@ApiTags('user-admin-detail')
@ApiBearerAuth()
@Controller('user-amin-detail')
export class UserAminDetailController {
  constructor(private readonly userAminDetailService: UserAminDetailService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'The recorded has been successfully created.'})
  @ApiForbiddenResponse({description: 'Forbidden.'})
  create(@Body() createUserAminDetailDto: CreateUserAminDetailDto) {
    return this.userAminDetailService.create(createUserAminDetailDto);
  }

  @Get('getall')
  findAll() {
    return this.userAminDetailService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.userAminDetailService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateUserAminDetailDto: UpdateUserAminDetailDto) {
    return this.userAminDetailService.update(+id, updateUserAminDetailDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.userAminDetailService.remove(+id);
  }
}
