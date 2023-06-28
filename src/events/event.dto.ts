import { TipoEvento } from "@prisma/client";

export type EventoDTO = {
    id: string;
    nome: string;
    tipoEventoId: number;
}