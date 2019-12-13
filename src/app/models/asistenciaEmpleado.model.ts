export class AsistenciaEmpleadoModel {
    constructor(
        public idEmpleado: number,
        public fecha: string,
        public hora: string,
        public tipo: boolean
    ) {}
}
