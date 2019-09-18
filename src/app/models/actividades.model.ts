export class ActividadesModel {
   constructor(
    public nombre: string,
    public precio: string,
    public horario: Array<string> = []
   ) {}

}
