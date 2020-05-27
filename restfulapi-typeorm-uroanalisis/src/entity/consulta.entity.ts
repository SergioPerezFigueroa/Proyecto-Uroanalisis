import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"proyecto", database:"ingreso_auto", name:"Consulta"})
export class Consulta{
    @PrimaryColumn()
    ConsultaID : number;

    @Column()
    PacienteID : number;
    
    @Column()
    MedicoID   : number;
    
    @Column()
    Fecha      : Date;
    
    @Column()
    Sintomas   : String;
    
    @Column()
    Receta     : String;
}


export interface IConsulta{
    ConsultaID : number;
    PacienteID : number;
    MedicoID   : number;
    Fecha      : Date;
    Sintomas   : String;
    Receta     : String;
}

export interface IResultado{
    successed : boolean;
    MSG : String
}