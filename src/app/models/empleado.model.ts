export class EmpleadoModel {
    constructor(
     public nombre: string,
     public apellido: string,
     public email: string,
     public dni: number,
     public genero: string,
     public telefono: string,
     public telefono_emergencia: string,
     public domicilio: string,
     public foto: string,
     public ficha_medica: string,
     public fecha_nacimiento: string,
     public fecha_inicio: string,
     public sucursal: number,
     public especialidad: string,
     public observaciones_medicas: string,
     public actividades: number,
    ) {}
 }
