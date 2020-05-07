import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{Paciente} from "../entity/paciente.entity"


export class PacienteService{

    public async getAll(req: Request, res: Response){
        //el paceinte es el mismo de abajo del .json(paciente)  
        const paciente = await getConnection().getRepository(Paciente).find();
        res.status(200).json(paciente);
    }

} 


