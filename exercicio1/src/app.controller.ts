import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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

  @Get('divisao')
  getDivisao(): number {
    return this.appService.getDivisao(10, 5)
  }


  @Get('potencia')
  getPotencia(): number {
    return this.appService.getPotencia(10, 2)
  }

  @Get('raiz')
  getRaiz(): number {
    return this.appService.getRaiz(9)
  }

  @Get('porcentagem')
  getPorcentagem(): number {
    return this.appService.getPorcentagem(10, 150)
  }

  @Get('seno')
  getSeno(): number {
    return this.appService.getSeno(5)
  }

  @Get('cosseno')
  getCosseno(): number {
    return this.appService.getCosseno(5)
  }

}
