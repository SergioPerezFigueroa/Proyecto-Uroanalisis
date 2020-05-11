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

    public async updateOne(req: Request, res: Response){
        try{
        
        await getConnection().createQueryBuilder().update(PreClinica)
        .set({
            
            PacienteID: req.body.PacienteID,
            EnfermeroID: req.body.EnfermeroID,
            MedicoID: req.body.MedicoID,
            Fecha: req.body.Fecha,
            Presion: req.body.Presion,
            Altura: req.body.Altura,
            Peso: req.body.Peso,
            Temperatura: req.body.Temperatura

        })
        .where("PreClinicaID=:ID",{ID: req.params.ID})
        .execute();

        res.status(200).json({
            updated:true            
        });

        }catch(Error){
            res.status(402).json({
                update: false,
                Message: Error.Message
            });

        }

    }
}    


