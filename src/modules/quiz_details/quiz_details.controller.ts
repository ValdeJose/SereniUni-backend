import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizDetailsService } from './quiz_details.service';
import { CreateQuizDetailDto } from './dto/create-quiz_detail.dto';
import { UpdateQuizDetailDto } from './dto/update-quiz_detail.dto';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';

@ApiTags('quiz-details')
@ApiBearerAuth()
@Controller('quiz-details')
export class QuizDetailsController {
  constructor(private readonly quizDetailsService: QuizDetailsService) {}

  @Post('create')
  @ApiCreatedResponse({description: 'The recorded has been successfully created.'})
  @ApiForbiddenResponse({description: 'Forbidden.'})
  create(@Body() createQuizDetailDto: CreateQuizDetailDto) {
    return this.quizDetailsService.create(createQuizDetailDto);
  }

  @Get('getall')
  findAll() {
    return this.quizDetailsService.findAll();
  }

  @Get('getby/:id')
  findOne(@Param('id') id: string) {
    return this.quizDetailsService.findOneByid(+id);
  }

  @Patch('updateby/:id')
  update(@Param('id') id: string, @Body() updateQuizDetailDto: UpdateQuizDetailDto) {
    return this.quizDetailsService.update(+id, updateQuizDetailDto);
  }

  @Delete('deleteby/:id')
  remove(@Param('id') id: string) {
    return this.quizDetailsService.remove(+id);
  }
}
