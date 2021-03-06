import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"proyecto", database:"ingreso_vehiculos", name:"Pacientes"})
export class Paciente{
    
   @PrimaryColumn()
    PacienteID :        number;

       @Column()
    PrimerNombre:       String;  

    @Column()
    SegundoNombre:      String;

    @Column()
    PrimerApellido:     String;

    @Column()
    SegundoApellido:     String;

    @Column ()
    Genero:             String;

    @Column()
    FechaNacimiento:    Date;

    @Column()
    EstadoCivil:        String; 


    @Column()
    Direccion:          String;
    
    @Column()         
    Email:              String;
    
    @Column()
    Telefono:           String;
    
    @Column()
    Observaciones:      String;

}

export interface IPaciente{    
   
   PacienteID :        number;
   PrimerNombre:       String;  
   SegundoNombre:      String;
   PrimerApellido:     String;
   SegundoApellido:    String;
   Genero:             String;
   FechaNacimiento:    Date;
   EstadoCivil:        String; 
   Direccion:          String;    
   Email:              String;
   Telefono:           String;
   Observaciones:      String;

}
//manda el mensaje de encontro el resultado 
export interface IResult{
   Successed: boolean;
   MSG: string
}
