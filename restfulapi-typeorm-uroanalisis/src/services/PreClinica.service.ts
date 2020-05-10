import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{PreClinica} from "../entity/PreClinica.entity"

export class PreClinicaService{

    public async getAll(req: Request, res: Response){ 
        const PreClinica = await getConnection().getRepository(PreClinicaService).find();
        res.status(200).json(PreClinicaService);
    }

} 



