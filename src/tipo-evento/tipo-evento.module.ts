import { Module } from '@nestjs/common';
import { TipoEventoController } from './tipo-evento.controller';
import { TipoEventoService } from './tipo-evento.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
    controllers: [TipoEventoController],
    providers: [TipoEventoService,PrismaService]
})
export class TipoEventoModule {}
