import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Enfermero} from "../entity/enfermero.entity"; 
import {VIEWEnfermeroByName} from "../entity/VIEWEnfermeroByName.entity" ;
import{VIEWPacienteByResumen} from "../entity/PacienteByResumen.entity"


export class EnfermeroService{

      public async getOne(req: Request, res: Response){
        const Enfermero :VIEWEnfermeroByName[] = await getConnection().getRepository(VIEWEnfermeroByName).find({ where :{EmpleadoID: req.params.id } }); 
        res.status(200).json(Enfermero[0]);
    }

    public async getResumen(req: Request, res: Response){
        const Paciente :VIEWPacienteByResumen[] = await getConnection().getRepository(VIEWPacienteByResumen).find({ where :{PacienteID: req.params.id } }); 
        res.status(200).json(Paciente[0]);
    }
 
     
    
}
