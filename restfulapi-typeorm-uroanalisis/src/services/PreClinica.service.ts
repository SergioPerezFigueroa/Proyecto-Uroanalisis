import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{PreClinica} from "../entity/PreClinica.entity"

export class PreClinicaService{

    public async getAll(req: Request, res: Response){ 
        const preclinica = await getConnection().getRepository(PreClinica).find();
        res.status(200).json(preclinica);
    }

    public async getOne(req: Request, res: Response){ 
        const preclinica : PreClinica [] = await getConnection().getRepository(PreClinica).find( {where : { PreClinicaID: req.params.ID } });
        res.status(200).json(preclinica[0]);
    }
}    


