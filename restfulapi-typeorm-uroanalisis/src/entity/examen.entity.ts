import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"proyecto", database:"ingreso_auto", name:"Examenes"})
export class Examen{
    @PrimaryColumn()
    ExamenID :          number;

    @Column()
    PacienteID :        number;

    @Column()
    RecepcionistaID :   number;

    @Column()
    AnalistaID :        number;

    @Column()
    MedicoID :          number;

    @Column()
    Fecha :              Date;

    @Column()
    Color :              String;

    @Column()
    Aspecto :            String;

    @Column()
    Gravedad_especifica : number;           

    @Column()
    Esteresa_leucositoria : String;

    @Column()
    Nitritos :             String;

    @Column()
    Ph :                   number;

    @Column()
    Proteinas :            String;

    @Column()
    Glucosa :              String;

    @Column()
    Cuerpos_cetonicos :    String;

    @Column()
    Urobililinogenos :     number;

    @Column()
    Bilirubina :           String;

    @Column()
    Sangre :               String;

    @Column()
    Celulas_epiteliales :  String;

    @Column()
    Erotrocitos :          String;

    @Column()
    Leucositos :           String;

    @Column()
    Bacterias :            String;

    @Column()
    Mucus :                String;

    @Column()
    Cristales:             String;

    @Column()
    Cilindors :            String;

    @Column()
    Levaduras :            String;

    @Column()
    Observaciones :        String;
}

export interface IExamen{
    ExamenID :          number;
    PacienteID :        number;
    MedicoID :          number;
}

export interface IResult{
    successed : boolean;
    MSG : String
}

export interface DateExam{
    Fecha_inicial : String;
    Fecha_final : String
}


export interface IResultExaHechos{
     ExamenID :                 number;
     PacienteID :               number;
     nombre_paciente :          String;
     apellido_paciente :        String;
     nombre_medico :            String;
     apellido_medico :          String;
     fecha :                    Date;
     Color :                    String;
     Aspecto :                  String;
     Gravedad_especifica :      number;
     Esteresa_leucositoria :    String;
     Nitritos :                 String;
     Ph    :                    number;
     Proteinas :                String;
     Glucosa :                  String;
     Cuerpos_cetonicos :        String;
     Urobililinogenos  :        number;
     Bilirubina :               String;
     Sangre :                   String;
     Celulas_epiteliales :      String;
     Erotrocitos :              String;
     Leucositos :               String;
     Bacterias :                String;
     Mucus :                    String;
     Cristales :                String;
     Cilindors :                String;
     Levaduras :                String;
     Observaciones :            String;
}

