import {ViewEntity, ViewColumn, DatabaseType} from "typeorm";


@ViewEntity({schema:"proyecto", database:"ingreso_auto", name:"VIEWHistorialPreclinica"})

export class VIEWHistorialPreclinica{
    
    @ViewColumn()
    PacienteID:number;
    @ViewColumn()
    Fecha:Date;
    @ViewColumn()
    Presion:Number;
    @ViewColumn()
    Altura :Number;
    @ViewColumn()
    Peso: Number;
    @ViewColumn()
    Temperatura: Number;
    @ViewColumn()
    PrimerNombre: string;
    @ViewColumn()
    SegundoNombre :string;
    @ViewColumn()
    PrimerApellido:string;
    @ViewColumn()
    SegundoApellido:string;


}
