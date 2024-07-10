import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';

@ApiTags('user')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'The recorded has been successfully created.'})
  @ApiForbiddenResponse({description: 'Forbidden.'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('getall')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('getby/:id')
  findOneByid(@Param('id') id: string) {
    return this.usersService.findOneByid(+id);
  }

  @Get('getby/:username')
  findOneByusername(@Param('id') username: string) {
    return this.usersService.findOneByusername(username);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
