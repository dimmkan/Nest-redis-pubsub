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

  @Post('/easr')
  easrListener(@Body() body: any): Promise<void> {
    return this.appService.easrListener(body);
  }

  @Post('/diplom-functional')
  diplomFunctionListener(@Body() body: any): Promise<void> {
    return this.appService.diplomFunctionListener(body);
  }

  @Post('/diplom-procedure')
  diplomProcedureListener(@Body() body: any): Promise<void> {
    return this.appService.diplomProcedureListener(body);
  }

  @Post('/nri')
  nriListener(@Body() body: any): Promise<void> {
    return this.appService.nriListener(body);
  }

  @Post('/hpsa')
  hpsaListener(@Body() body: any): Promise<void> {
    return this.appService.hpsaListener(body);
  }

  @Post('/startip')
  startIpListener(@Body() body: any): Promise<void> {
    return this.appService.startIpListener(body);
  }

  @Post('/start')
  startListener(@Body() body: any): Promise<void> {
    return this.appService.startListener(body);
  }

  @Post('/onyma')
  onymaListener(@Body() body: any): Promise<void> {
    return this.appService.onymaListener(body);
  }

  @Post('/asr')
  asrListener(@Body() body: any): Promise<void> {
    return this.appService.asrListener(body);
  }

  @Post('/hpsa-mock')
  hpsaMockListener(@Body() body: any): Promise<void> {
    return this.appService.hpsaMockListener(body);
  }

  @Post('/bis')
  bisListener(@Body() body: any): Promise<void> {
    return this.appService.bisListener(body);
  }

  @Post('/sipal')
  sipalListener(@Body() body: any): Promise<void> {
    return this.appService.sipalListener(body);
  }
}
