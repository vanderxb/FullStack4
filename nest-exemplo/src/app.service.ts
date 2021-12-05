import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nome: string): string {
    return `Hello ${nome}`;
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

  getPotencia(numero1: number, numero2: number): number {
    return numero1 ** numero2;
  }
}
