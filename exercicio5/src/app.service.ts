import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMax(num1: number, num2: number, num3 : number) : number {
    return Math.max(num1, num2, num3);
  }
}
