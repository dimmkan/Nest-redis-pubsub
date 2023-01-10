import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: { message: string }): Promise<void> {
    return this.appService.getHello(body);
  }
}
