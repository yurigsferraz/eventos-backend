import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { TipoEventoModule } from './tipo-evento/tipo-evento.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [EventsModule, TipoEventoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
