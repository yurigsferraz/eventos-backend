import { Body, Controller, Post, Get } from '@nestjs/common';
import { TipoEventoService } from './tipo-evento.service';
import { TipoEventoDTO } from './tipo-evento.dto';

@Controller('tipo-evento')
export class TipoEventoController {
    constructor(private readonly service : TipoEventoService){}

    @Post()
    async create(@Body() data: TipoEventoDTO){
        return this.service.create(data);
    }

    @Get()
    async findAll(){
        return this.service.findAll();
    }
}
