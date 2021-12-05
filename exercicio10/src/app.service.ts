import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getIdade(anos: number,meses: number, dias: number): string {
    let anoDias = anos * 365;
    let mesDias = meses * 30;
    return `${anoDias + mesDias + dias}`
  }
}
