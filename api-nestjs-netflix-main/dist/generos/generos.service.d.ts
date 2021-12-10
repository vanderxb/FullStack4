import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
export declare class GenerosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGeneroDto): Promise<Genero>;
    findAll(): Promise<Genero[]>;
    findOne(generoId: number): Promise<Genero>;
    update(id: number, data: CreateGeneroDto): Promise<Genero>;
    deleteOne(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
