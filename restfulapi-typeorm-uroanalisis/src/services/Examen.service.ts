import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{Examen} from "../entity/examen.entity";
import{ViewExamenesDefault} from "../entity/ExamenesDefault.entity";

export class ExamenService{

    public async getAll(req: Request, res: Response){
        const examens = await getConnection().getRepository(Examen).find();
        res.status(200).json(examens);
    }

    //este endpoint es de analista , cambiar id paciente por id examen
    public async getOne(req: Request, res: Response){
        const examen : Examen[] = await getConnection().getRepository(Examen).find({where: {PacienteID: req.params.id}});
        res.status(200).json(examen[0]);
    }
    //endpoint de archivista view de examenes default
    public async getOneList(req: Request, res: Response){
        const examenes = await getConnection().getRepository(ViewExamenesDefault).find({where: {PacienteID: req.params.id}});
        res.status(200).json(examenes);
    }
    //este endpoint es de analista (put)
    //este endpoint es de medico (get fecha)
    //este endpoint es de medico (get lista de pacientes)
    public async getMedicalList(req: Request, res: Response){
        const examenesMedicos = await getConnection().getRepository(Examen).find({where: {MedicoID: req.params.id}});
        res.status(200).json(examenesMedicos);
    }
    //este endpoint es de medico (post) con balidacion
    
    //el put de resepcionista
}