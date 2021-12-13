import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

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

