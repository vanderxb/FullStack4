import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCtoF(temperatura: number) : number {
    return temperatura * 1.8 + 32
  } 

  getCtoK(temperatura: number) : number {
    return temperatura + 273
  }

  getFtoK(temperatura: number) : number {
    return ((temperatura - 32) * 5/9) + 273.15
  }


}
