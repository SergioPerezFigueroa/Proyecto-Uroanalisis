import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema:"proyecto", database:"ingreso_auto", name:"ViewExamenesDefault"})
export class ViewExamenesDefault{
    @ViewColumn()
    ExamenID :          number;
    @ViewColumn()
    PacienteID :        number;
    @ViewColumn()
    nombre_paciente:    String;
    @ViewColumn()
    apellido_paciente:  String;
    @ViewColumn()
    nombre_medico:      String;
    @ViewColumn()
    apellido_medico:    String;
    @ViewColumn()
    Fecha :              Date;
    @ViewColumn()
    Color :              String;
    @ViewColumn()
    Aspecto :            String;
    @ViewColumn()
    Gravedad_especifica : number; 
    @ViewColumn()
    Esteresa_leucositoria : String;
    @ViewColumn()
    Nitritos :             String;
    @ViewColumn()
    Ph :                   number;
    @ViewColumn()
    Proteinas :            String;
    @ViewColumn()
    Glucosa :              String;
    @ViewColumn()
    Cuerpos_cetonicos :    String;
    @ViewColumn()
    Urobililinogenos :     number;
    @ViewColumn()
    Bilirubina :           String;
    @ViewColumn()
    Sangre :               String;
    @ViewColumn()
    Celulas_epiteliales :  String;
    @ViewColumn()
    Erotrocitos :          String;
    @ViewColumn()
    Leucositos :           String;
    @ViewColumn()
    Bacterias :            String;
    @ViewColumn()
    Mucus :                String;
    @ViewColumn()
    Cristales:             String;
    @ViewColumn()
    Cilindors :            String;
    @ViewColumn()
    Levaduras :            String;
    @ViewColumn()
    Observaciones :        String;
}