import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{Paciente,IPaciente,IResult} from "../entity/paciente.entity"


export class PacienteService{

    public async getAll(req: Request, res: Response){
        //el paceinte es el mismo de abajo del .json(paciente)  
        const paciente = await getConnection().getRepository(Paciente).find();
        res.status(200).json(paciente);
    }
    public async updateOne(req:Request, res: Response){
        try{
    
            await getConnection().createQueryBuilder().update(Paciente)
            .set({
                PrimerNombre:req.body.PrimerNombre,
                SegundoNombre:req.body.SegundoNombre,
                PrimerApellido:req.body.PrimerApellido,
                SegundoApellido:req.body.SegundoApellido,
                Genero:req.body.Genero,
                FechaNacimiento:req.body.FechaNacimiento,
                EstadoCivil:req.body.EstadoCivil,
                Direccion:req.body.Direccion,
                Email:req.body.Email,
                Telefono:req.body.Telefono,
                Observaciones:req.body.Observaciones,

               
            })
            .where("PacienteID = :id",{id: req.params.id})
            .execute();
    
            res.status(200).json({
                updated: true
            });
    
    
        }catch(Error){
            res.status(401).json({
                updated: false,
                Message: Error.Message
            });
        } 

    }

    public  async CreateOne(req: Request, res: Response){

        const p: IPaciente = req.body;
        const result: IResult[] = await getConnection().query(`EXEC example.SP_CREATE_SUPPLIER 

        @PacienteID   @SupplierID = ${s.SupplierID},   
        @PrimerNombre   
        @SegundoNombre  
        @PrimerApellido 
        @SegundoApellido
        @Genero         
        @FechaNacimiento
        @EstadoCivil    
        @Direccion      
        @Email          
        @Telefono       
        @Observaciones  
        res.status(201).json(result[0])
    }
   
   
}



