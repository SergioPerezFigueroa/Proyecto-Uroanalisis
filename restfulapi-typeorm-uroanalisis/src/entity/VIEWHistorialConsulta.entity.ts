import {ViewEntity, ViewColumn, DatabaseType} from "typeorm";


@ViewEntity({schema:"proyecto", database:"ingreso_vehiculos", name:"VIEWHistorialConsulta"})

export class VIEWHistorialConsulta{
    
    @ViewColumn()
    PacienteID: number; 
    @ViewColumn()
    fecha: Date;
    @ViewColumn()
    Sintomas: String;
    @ViewColumn()
    Receta:String; 
    @ViewColumn()
    PrimerNombre: String  ; 
    @ViewColumn()
    SegundoNombre: string ; 
    @ViewColumn()
    PrimerApellido: string ; 
    @ViewColumn()
    SegundoApellido: String 


}
