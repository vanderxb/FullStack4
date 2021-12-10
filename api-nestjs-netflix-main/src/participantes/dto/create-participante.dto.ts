import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: string;

  @IsNotEmpty()
  isStaff: boolean;

  @IsNotEmpty()
  isAtor: boolean;

  @IsOptional()
  filmes: number[];
}
