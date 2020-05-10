import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"proyecto", database:"ingreso_auto", name:"PreClinica"})
export class PreClinica{

    @PrimaryColumn()

    PreClinicaID:number;

   @Column()
    PacienteID:number;
    @Column()
    EnfermeraID:number;
    
    @Column()

    MedicoID:number;
    @Column ()

    Fecha:String;
    @Column ()

    Presion:number;

    @Column ()

    Altura:number;

    @Column ()
    Peso:number;

    @Column ()

    Temperatura:number;


}