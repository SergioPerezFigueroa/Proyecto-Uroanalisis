import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"proyecto", database:"ingreso_vehiculos", name:"Empleado"})
export class Enfermero{
   @PrimaryColumn()
    EmpleadoID :        number;

    @Column()
    TipoEmpleadoID :    number ; 

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
