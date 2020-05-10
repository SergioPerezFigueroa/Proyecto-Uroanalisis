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
    Gravedad_especifica : number;           ;

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