export class InsumoModel {
    constructor(
     public idInsumo: string,
     public nombre: string,
     public fechaCompra: string,
     public estado: string,
     public observaciones: string,
     public actividad: string,
     public idProveedor: string
    ) {}
 
 }