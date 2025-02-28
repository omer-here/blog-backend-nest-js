import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        //Injected User Service
        @Inject(forwardRef(()=> UsersService))
        private readonly userService : UsersService, 
    ){}
}
