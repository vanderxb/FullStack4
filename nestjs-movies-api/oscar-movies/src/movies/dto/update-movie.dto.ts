import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  brTitle: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  coverImage: string;
}