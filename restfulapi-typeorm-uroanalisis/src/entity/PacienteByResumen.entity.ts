import {ViewEntity, ViewColumn} from "typeorm";


@ViewEntity({schema:"proyecto", database:"ingreso_auto", name:"VIEWPacienteByResumen"})

export class VIEWPacienteByResumen{

    @ViewColumn()
    PacienteID: String ; 
    @ViewColumn()
    PrimerNombre: String  ; 
    @ViewColumn()
    SegundoNombre: string ; 
    @ViewColumn()
    PrimerApellido: string ; 
    @ViewColumn()
    SegundoApellido: String; 
    @ViewColumn()
    Edad: Int32List; 
    @ViewColumn()
    Email:String;
    @ViewColumn()
    Telefono: String
  
}
