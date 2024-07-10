import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizTypeDto } from './create-quiz_type.dto';

export class UpdateQuizTypeDto extends PartialType(CreateQuizTypeDto) {}
