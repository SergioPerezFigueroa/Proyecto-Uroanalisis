import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{Consulta,IConsulta,IResultado} from "../entity/consulta.entity";
//import{ViewExamenesDefault} from "../entity/ExamenesDefault.entity";

export class ConsultaServise{

    public async createOne(req: Request, res: Response){
        const ct : IConsulta = req.body;
        const result : IResultado[] = await getConnection().query(`EXEC proyecto.SP_CREATE_CONSULT
        @ConsultaID = ${ct.ConsultaID},
        @PacienteID = ${ct.PacienteID},
        @MedicoID = ${ct.MedicoID},
        @Fecha = ${ct.Fecha},
        @Sintomas = ${ct.Sintomas},
        @Receta = ${ct.Receta}`);
        res.status(201).json(result[0])
    }

}
