import {ViewEntity, ViewColumn} from "typeorm";


@ViewEntity({schema:"proyecto", database:"ingreso_vehiculos", name:"VIEWNuevosPacientes"})

export class VIEWNuevosPacientes{

    @ViewColumn()
    PacienteID: number ; 
    @ViewColumn()
    PrimerNombre: String  ; 
    @ViewColumn()
    SegundoNombre: string ; 
    @ViewColumn()
    PrimerApellido: string ; 
    @ViewColumn()
    SegundoApellido: String; 
    @ViewColumn()
    Edad: number; 
    @ViewColumn()
    Genero: String;
  
}
