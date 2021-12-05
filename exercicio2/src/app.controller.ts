import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('listaCrescente')
  getList(): Array<number> {
    return this.appService.getList([1,3,7,9,10,4,0,25,12]);
  }

  @Get('listaDecrescente')
  getList2(): Array<number> {
    return this.appService.getList2([1,2,3]);
  }
}