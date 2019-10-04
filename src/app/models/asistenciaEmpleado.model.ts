export class AsistenciaEmpleadoModel {
    constructor(
     public idAsistenciaEmp: string,
     public fecha: string,
     public hora: string,
     public tipo: string,
     public idEmpleado: string
    ) {}
 
 }