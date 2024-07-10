import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAminDetailDto } from './create-user-amin_detail.dto';

export class UpdateUserAminDetailDto extends PartialType(CreateUserAminDetailDto) {}
