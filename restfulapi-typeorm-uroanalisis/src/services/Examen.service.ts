import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{Examen,IExamen,IResult} from "../entity/examen.entity";
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
    public async bigUpdate(req: Request, res: Response){
        try{

            await getConnection().createQueryBuilder().update(Examen)
            .set({
                AnalistaID: req.body.AnalistaID,
                Fecha: req.body.Fecha,
                Color: req.body.Color,
                Aspecto: req.body.Aspecto,
                Gravedad_especifica: req.body.Gravedad_especifica,
                Esteresa_leucositoria: req.body.Esteresa_leucositoria,
                Nitritos: req.body.Nitritos,
                Ph: req.body.Ph,
                Proteinas: req.body.Proteinas,
                Glucosa: req.body.Glucosa,
                Cuerpos_cetonicos: req.body.Cuerpos_cetonicos,
                Urobililinogenos: req.body.Urobililinogenos,
                Bilirubina: req.body.Bilirubina,
                Sangre: req.body.Sangre,
                Celulas_epiteliales: req.body.Celulas_epiteliales,
                Erotrocitos: req.body.Erotrocitos,
                Leucositos: req.body.Leucositos,
                Bacterias: req.body.Bacterias,
                Mucus: req.body.Mucus,
                Cristales: req.body.Cristales,
                Cilindors: req.body.Cilindors,
                Levaduras: req.body.Levaduras,
                Observaciones: req.body.Observaciones
            })
            .where("ExamenID = :id",{id : req.params.id})
            .execute();

            res.status(200).json({
                updated: true
            });

        }catch(Error){
            res.status(401).json({
                updated : false,
                Message : Error.Message
            })
        }
    }
    //este endpoint es de medico (get fecha)
    //este endpoint es de medico (get lista de pacientes)
    public async getMedicalList(req: Request, res: Response){
        const examenesMedicos = await getConnection().getRepository(Examen).find({where: {MedicoID: req.params.id}});
        res.status(200).json(examenesMedicos);
    }
    //este endpoint es de medico (post) con validacion
    public async createOne(req: Request, res: Response){
        const e : IExamen = req.body;
        const result : IResult[] = await getConnection().query(`EXEC proyecto.SP_CREATE_EXAM
        @ExamenID = ${e.ExamenID},
        @PacienteID = ${e.PacienteID},
        @MedicoID = ${e.MedicoID}`);
        res.status(201).json(result[0])
    }
    //el put de resepcionista

}