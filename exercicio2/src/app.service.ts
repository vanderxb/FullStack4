import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getList(lista: Array<number>): Array<number> {
    return lista.sort((a, b) => a - b);
  }

  getList2(lista: Array<number>): Array<number> {
    return lista.sort((a, b) => b - a);
  }
    
}
