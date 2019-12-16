export class CuotaModel {
    constructor(
     public idSocio: number,
     public fechaVencimiento: string,
     public descripcion: string,
     public monto: number,
     public metodo_pago: string,
     public codigo_transac: string,
    ) {}
}
