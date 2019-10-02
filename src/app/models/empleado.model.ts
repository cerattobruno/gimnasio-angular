export class EmpleadoModel {
    constructor(
     public nombre: string,
     public apellido: string,
     public actividad: Array<string> = [],
     public sucursal: number
    ) {}
 }
