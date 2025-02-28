import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(
        //injecting Auth Service
        private readonly authService : AuthService,

    ){
    }
}