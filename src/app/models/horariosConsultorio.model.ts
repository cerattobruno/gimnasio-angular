export class HorarioConsultorioModel {
    constructor(
     public idHorario: string,
     public idConsultorio: string,
     public horaInicio: string,
     public horaFin: string,
     public idProfesional: string,
     public dia: string
    ) {}
 
 }