import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersAdminDto } from './create-users-admin.dto';

export class UpdateUsersAdminDto extends PartialType(CreateUsersAdminDto) {}
