import {ViewEntity, ViewColumn} from "typeorm";


@ViewEntity({schema:"proyecto", database:"ingreso_auto", name:"VIEWEnfermeroByName"})

export class VIEWEnfermeroByName{
    @ViewColumn()
    EmpleadoID: String ; 
    @ViewColumn()
    PrimerNombre: String  ; 
    @ViewColumn()
    SegundoNombre: string ; 
    @ViewColumn()
    PrimerApellido: string ; 
    @ViewColumn()
    SegundoApellido: String 


}

