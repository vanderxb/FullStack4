import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMax(num1: number, num2: number, num3: number): string {
    let maior = Math.max(num1, num2, num3)
    return `${maior} é o maior`
  }
}
