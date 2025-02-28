import { Injectable } from '@nestjs/common';

//this file contains the actual logic like controllers in the express. They are one which contains business logic and talk to databases
@Injectable()
export class AppService {
  getHello(): string {
    return 'My First NESTJS app!';
  }
}
