import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNumero(num: number): string {    
    let classificacao = (num % 2 === 0? 'par':'ímpar');
    let positivoNegativo = (num > 0 ? 'positivo' : 'negativo');
    return `O número ${num} é ${classificacao} e ${positivoNegativo}`;
  } 
}
