import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma.service';
import { Movie } from '@prisma/client'

@Injectable()
export class MoviesService {
  constructor(private database: PrismaService) {}

  async create(moviedata: CreateMovieDto): Promise<Movie> {
    const movieExists = await this.database.movie.findUnique({
      where: { originalTitle: moviedata.originalTitle },
    });

    if (movieExists) {
      throw new ConflictException('This movie is already registered');
    }

    const movie = await this.database.movie.create({ data: moviedata });
    return movie;
  }

  async findAll(): Promise<Movie[]> {
    const movies = await this.database.movie.findMany();
    return movies;
  }

  async findOne(id: number): Promise<Movie> {
    const movieExists = await this.database.movie.findUnique({
      where: { id },
    });

    if (!movieExists) {
      throw new NotFoundException(
        'Movie not found',
      );
    }

    return movieExists;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.database.movie.update({
      data: updateMovieDto,
      where: { id },
    });
    return movie;
  }

  async remove(id: number): Promise<{ message: string }> {
    const movieExists = await this.database.movie.findUnique({
      where: { id },
    });

    if (!movieExists) {
      throw new NotFoundException(
        'Movie not found',
      );
    } else {
      await this.database.movie.delete({
        where: { id },
      });
    }

    return { message: 'Movie successfully deleted' };
  }

  async updatewatched(id: number): Promise<Movie> {
    const watchedmovie = await this.database.movie.findUnique({
      where: {id}
    })

    const modify = !watchedmovie.watched
   
    const movie = await this.database.movie.update({
      where: { id },
      data: {...watchedmovie,
                watched: modify
      }
    
    });
    return movie;
  }
}