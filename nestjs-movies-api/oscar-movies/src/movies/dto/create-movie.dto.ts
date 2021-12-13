import { IsString, IsNotEmpty, IsOptional, IsNumber, IsArray} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  originalTitle: string;

  @IsString()
  @IsNotEmpty()
  brTitle: string;

  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @IsArray()
  @IsNotEmpty()
  genre: number[];

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  synopsis: string;

  @IsArray()
  @IsOptional()
  director: number[];

  @IsArray()
  @IsOptional()
  cast: number[];

  @IsArray()
  @IsOptional()
  producer: number[];

  @IsString()
  @IsNotEmpty()
  coverLink: string;
}
