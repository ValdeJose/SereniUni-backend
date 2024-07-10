import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizDetailDto } from './create-quiz_detail.dto';

export class UpdateQuizDetailDto extends PartialType(CreateQuizDetailDto) {}
