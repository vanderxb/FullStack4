import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTime(seg: number): string {
    let horas = Math.floor(seg / 3600)
    let minutos = Math.floor((seg % 3600) / 60)
    let segundos = seg % 60
    return  `${horas}:${minutos}:${segundos}`
  }
}
