import {ViewEntity, ViewColumn, DatabaseType} from "typeorm";


@ViewEntity({schema:"proyecto", database:"ingreso_auto", name:"VIEWHistorialExamen"})

export class VIEWHistorialExamen{
    @ViewColumn()
    PacienteID: number; 
    @ViewColumn()
    fecha: Date;
    @ViewColumn()
    PrimerNombre: String  ; 
    @ViewColumn()
    SegundoNombre: string ; 
    @ViewColumn()
    PrimerApellido: string ; 
    @ViewColumn()
    SegundoApellido: String 


}
