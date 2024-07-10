import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersAdminService } from './users-admin.service';
import { CreateUsersAdminDto } from './dto/create-users-admin.dto';
import { UpdateUsersAdminDto } from './dto/update-users-admin.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('userAdmin')
@ApiBearerAuth()
@Controller('users-admin')
export class UsersAdminController {
  constructor(private readonly usersAdminService: UsersAdminService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'The recorded has been successfully created.'})
  @ApiForbiddenResponse({description: 'Forbidden.'})
  create(@Body() createUsersAdminDto: CreateUsersAdminDto) {
    return this.usersAdminService.create(createUsersAdminDto);
  }

  @Get('getall')
  findAll() {
    return this.usersAdminService.findAll();
  }

  @Get('getby/:id')
  findOneByid(@Param('id') id: string) {
    return this.usersAdminService.findOneByid(+id);
  }

  @Get('getby/:username')
  findOneByusername(@Param('username') username: string) {
    return this.usersAdminService.findOneByusername(username);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateUsersAdminDto: UpdateUsersAdminDto) {
    return this.usersAdminService.update(+id, updateUsersAdminDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.usersAdminService.remove(+id);
  }
}
