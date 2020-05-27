import {ViewEntity,ViewColumn, Column} from "typeorm";

@ViewEntity({schema:"proyecto", database:"ingreso_vehiculos", name:"AprobacionExamen"})
export class AprobacionExamen{
        @ViewColumn()
        PrimerNombre :          string;
        @ViewColumn()
        PrimerApellido:         string;
        @ViewColumn()
        PacienteID:             number;
}