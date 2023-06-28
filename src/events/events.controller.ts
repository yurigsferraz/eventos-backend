import { Body, Controller, Post, Get } from '@nestjs/common';
import { EventoDTO } from './event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private readonly service: EventsService) {}

    @Post()
    async create(@Body() data: EventoDTO){
        return this.service.create(data);
    }

    @Get()
    async findAll(){
        return this.service.findAll();
    }
}
