import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types'; //npm i @nestjs/mapped-types@2.0.5

export class PatchUserDto extends PartialType(CreateUserDto) {} //So with this one line of code, we were able to inherit all the properties of Create user DTO and makethem optional.