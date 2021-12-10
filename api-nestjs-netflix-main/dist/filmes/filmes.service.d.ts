import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateFilmeDto): Promise<Filme & {
        generos: import(".prisma/client").Genero[];
        participantes: import(".prisma/client").Participante[];
    }>;
    findAll(): Promise<Filme[]>;
    findOne(id: number): Promise<Filme>;
    update(id: number, data: CreateFilmeDto): Promise<Filme & {
        generos: import(".prisma/client").Genero[];
        participantes: import(".prisma/client").Participante[];
    }>;
    deleteOne(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
