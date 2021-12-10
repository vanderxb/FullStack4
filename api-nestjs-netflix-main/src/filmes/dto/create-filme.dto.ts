import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  ano_lancamento: number;

  @IsNotEmpty()
  tempo_duracao: number;

  @IsOptional()
  generos: number[];

  @IsOptional()
  participantes: number[];
}
