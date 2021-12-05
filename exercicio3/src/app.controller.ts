import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('CtoF')
  getCtoF(): number {
    return this.appService.getCtoF(30);
  }

  @Get('CtoK')
  getCtoK(): number {
    return this.appService.getCtoK(30);
  }

  @Get('FtoK')
  getFtoK(): number {
    return this.appService.getFtoK(30);
  }
}
