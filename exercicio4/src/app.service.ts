import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMedia(nota1: number, nota2: number, nota3: number) : string {
    let media = (nota1 + nota2 + nota3) / 3
    if (media >= 7) {
      return `${media} Aprovado`
    }else{
      return `${media} Reprovado`
    }
  }
}
