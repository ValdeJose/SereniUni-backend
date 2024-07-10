import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizTypeService } from './quiz_type.service';
import { CreateQuizTypeDto } from './dto/create-quiz_type.dto';
import { UpdateQuizTypeDto } from './dto/update-quiz_type.dto';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';

@ApiTags('quiz-type')
@ApiBearerAuth()
@Controller('quiz-type')
export class QuizTypeController {
  constructor(private readonly quizTypeService: QuizTypeService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'The recorded has been successfully created.'})
  @ApiForbiddenResponse({description: 'Forbidden.'})
  create(@Body() createQuizTypeDto: CreateQuizTypeDto) {
    return this.quizTypeService.create(createQuizTypeDto);
  }

  @Get('getall')
  findAll() {
    return this.quizTypeService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.quizTypeService.findOne(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateQuizTypeDto: UpdateQuizTypeDto) {
    return this.quizTypeService.update(+id, updateQuizTypeDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.quizTypeService.remove(+id);
  }
}
