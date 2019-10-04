export class ProveedorModel {
    constructor(
     public idProveedor: string,
     public nombre: string,
     public telefono: string,
     public correo: string,
     public domicilio: string,
     public cuit: string,
     public rubro: any,
     public saldo: number
    ) {}
 
 }