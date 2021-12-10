import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma.service';


@Module({
  imports:[PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [MoviesController],
  providers: [MoviesService, PrismaService]
})
export class MoviesModule {}
