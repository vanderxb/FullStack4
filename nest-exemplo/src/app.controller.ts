
import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello("Horse");
  }

  @Get('soma')
  getSoma(): number {
    return this.appService.getSoma(5, 5)
  }

  @Get('subtracao')
  getSubtracao(): number {
    return this.appService.getSubtracao(10, 5)
  }

  @Get('multiplicacao')
  getMultiplicacao(): number {
    return this.appService.getMultiplicacao(10, 5)
  }

  @Get('potencia')
  getPotencia(): number {
    return this.appService.getPotencia(10, 2)
  }


}
