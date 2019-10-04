export class HorarioModel {
    constructor(
     public idHorario: string,
     public horaInicio: string,
     public horaFin: Array<string> = [],
     public idActividad: string,
     public dia: string
    ) {}
 
 }