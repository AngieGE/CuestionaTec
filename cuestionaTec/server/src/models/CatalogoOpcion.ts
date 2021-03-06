import { Opcion } from "./Opcion";

export class CatalogoOpcion {
    idCatalogoOpcion?: number;
    opcion?: string;
    
    // Has many
    opciones?: Opcion[];

    // Belongs to 

    constructor(catalogoOpcion: CatalogoOpcion) {
        this.idCatalogoOpcion=catalogoOpcion.idCatalogoOpcion,
        this.opcion=catalogoOpcion.opcion;
    }
}
