import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSoma(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }

  getSubtracao(numero1: number, numero2: number): number {
    return numero1 - numero2;
  }

  getMultiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
  }

  getDivisao(numero1: number, numero2: number): number {
    return numero1 / numero2;
  }

  getPotencia(numero1: number, numero2: number): number {
    return numero1 ** numero2;
  }

  getRaiz(numero: number): number {
    return Math.sqrt(numero);
  }

  getPorcentagem(porcentagem: number, numero: number): number {
    return (porcentagem/100) * numero;
  }

  getSeno(numero: number): number {
    return Math.sin(numero)
  }

  getCosseno(numero: number): number {
    return Math.cos(numero)
  }

  getTangente(numero: number): number {
    return Math.tan(numero)
  }


}
