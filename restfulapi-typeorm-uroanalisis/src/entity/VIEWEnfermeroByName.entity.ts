import {ViewEntity, ViewColumn} from "typeorm";


@ViewEntity({schema:"proyecto", database:"ingreso_vehiculos", name:"VIEWEmpleadoByName"})

export class VIEWEmpleadoByName{
    @ViewColumn()
    EmpleadoID: number; 
    @ViewColumn()
    PrimerNombre: String  ; 
    @ViewColumn()
    SegundoNombre: string ; 
    @ViewColumn()
    PrimerApellido: string ; 
    @ViewColumn()
    SegundoApellido: String 


}

