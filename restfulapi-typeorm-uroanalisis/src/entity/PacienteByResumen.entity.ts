import {ViewEntity, ViewColumn} from "typeorm";


@ViewEntity({schema:"proyecto", database:"ingreso_vehiculos", name:"VIEWPacienteByResumen"})

export class VIEWPacienteByResumen{

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
    Email:String;
    @ViewColumn()
    Telefono: String
  
}
