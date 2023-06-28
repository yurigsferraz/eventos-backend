import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TipoEventoDTO } from './tipo-evento.dto';

@Injectable()
export class TipoEventoService {
    constructor(private prisma : PrismaService){}

    async create({ nome, codigo} : TipoEventoDTO){
        const tipoEvento = await this.prisma.tipoEvento.create({
            data: {
                nome,
                codigo
            },
        });
    }

    async findAll() {
        const tipos = await this.prisma.tipoEvento.findMany();

        return tipos;
    }


}
