import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { IMeasure } from './interfaces/measure.interface';
import { IBodyType } from './interfaces/bodytype.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/generate_type')
  getHelloTyped(@Body() body: IBodyType): any {
    return this.appService.getParamType(body);
  }

  @Post()
  getHello(@Body() body: IMeasure): Promise<void> {
    return this.appService.getHello(body);
  }
}
