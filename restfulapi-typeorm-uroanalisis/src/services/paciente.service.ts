import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{Paciente} from "../entity/paciente.entity";
import {AprobacionExamen} from "../entity/AprobacionExamen.entity"


export class PacienteService{

    public async getAll(req: Request, res: Response){
        //el paceinte es el mismo de abajo del .json(paciente)  
        const paciente = await getConnection().getRepository(Paciente).find();
        res.status(200).json(paciente);
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


