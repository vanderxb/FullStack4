import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateParticipanteDto): Promise<Participante>;
    findAll(): Promise<Participante[]>;
    findOne(participanteId: number): Promise<Participante>;
    update(id: number, data: CreateParticipanteDto): Promise<Participante>;
    deleteOne(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
