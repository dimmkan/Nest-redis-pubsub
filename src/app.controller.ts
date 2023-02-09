import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { IMeasure } from './interfaces/measure.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: IMeasure): Promise<void> {
    return this.appService.getHello(body);
  }
}
