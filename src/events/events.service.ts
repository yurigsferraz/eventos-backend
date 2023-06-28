import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { EventoDTO } from './event.dto';

@Injectable()
export class EventsService {
    constructor(private prisma : PrismaService){}

    async create ({ nome }: EventoDTO) {
        const event = await this.prisma.event.create({
            data: {
                nome,
            },
        });

        return event;
    }

    async findAll() {
        const events = await this.prisma.event.findMany();

        return events;
    }
}