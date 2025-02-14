import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//routing logic lies inside the controller unlike the express where we have routes directory. In the nest they are usually routing only
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
