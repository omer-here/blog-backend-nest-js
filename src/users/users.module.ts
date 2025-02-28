import { Module, forwardRef } from "@nestjs/common"
import { UserController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { AuthModule } from "src/auth/auth.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
    imports:[forwardRef(()=> AuthModule), TypeOrmModule.forFeature([User])], //we used forwardRef to overcome the circular dependency error //
    controllers:[UserController],
    providers:[UsersService],
    exports:[UsersService], //here we explicitly define which providers to export and this creates inter-modular dependency injection
})
export class UsersModule{}

//forFeature method takes in an argument which is an array of entities.