import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  getTest(): string {
    return this.appService.getabc();
  }
  @Get("ppp")
  newTest(): string {
    return this.appService.newTest();
  }
  @Get("ccb")
  newTests(): string {
    return this.appService.newTestss();
  }
  @Get("huanxiaomang")
  newTestsaa(): string {
    return this.appService.newTestss();
  }
  @Get("huan")
  mma(): string {
    return this.appService.mma();
  }
}
