import {Request, Response} from "express";
import {getConnection} from "typeorm";

import{Paciente,IPaciente,IResult} from "../entity/paciente.entity"

import {AprobacionExamen} from "../entity/AprobacionExamen.entity"



export class PacienteService{

    public async getAll(req: Request, res: Response){
        //el paciente es el mismo de abajo del .json(paciente)  
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
        const result: IResult[] = await getConnection().query(`EXEC proyecto.SP_CREATE_PACIENTES

        @PacienteID = ${p.PacienteID},   
        @PrimerNombre  = ${p.PrimerNombre} ,
        @SegundoNombre = '${p.SegundoNombre}',
        @PrimerApellido = '${p.PrimerApellido}',
        @SegundoApellido= '${p.SegundoApellido}',
        @Genero         =' ${p.Genero}',
        @FechaNacimiento= '${p.FechaNacimiento}',
        @EstadoCivil    = '${p.EstadoCivil}',
        @Direccion      =' ${p.Direccion}',
        @Email          =' ${p.Email}',
        @Telefono       =' ${p.Telefono}',
        @Observaciones  =' ${p.Observaciones}'`);
        res.status(201).json(result[0])
    }
    public async getOne(req:Request, res: Response){
        const paciente: Paciente[] = await getConnection().getRepository(Paciente).find({ where: {PacienteID: req.params.id} });
        res.status(200).json(paciente[0]);
    }

    public async getAprobate(req:Request, res: Response){
        const aprobacion: AprobacionExamen[] = await getConnection().getRepository(AprobacionExamen).find({ where: {PacienteID: req.params.id}});
        res.status(200).json(aprobacion[0]);
    }
   
}

    

 


