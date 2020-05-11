import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Enfermero} from "../entity/enfermero.entity"; 
import {VIEWEnfermeroByName} from "../entity/VIEWEnfermeroByName.entity" ;
import{VIEWPacienteByResumen} from "../entity/PacienteByResumen.entity";
import{VIEWHistorialExamen} from "../entity/VIEWHistorialExamen.entity"; 
import{VIEWHistorialConsulta}  from "../entity/VIEWHistorialConsulta.entity"; 
import{VIEWNuevosPacientes} from "../entity/VIEWNuevosPacientes.entity"


export class EnfermeroService{

      public async getNombreEnferemera(req: Request, res: Response){
        const Enfermero :VIEWEnfermeroByName[] = await getConnection().getRepository(VIEWEnfermeroByName).find({ where :{EmpleadoID: req.params.id } }); 
        res.status(200).json(Enfermero[0]);
    }

    public async getResumen(req: Request, res: Response){
        const Paciente :VIEWPacienteByResumen[] = await getConnection().getRepository(VIEWPacienteByResumen).find({ where :{PacienteID: req.params.id } }); 
        res.status(200).json(Paciente[0]);
    }
 

    public  async getHistorialExamne(req: Request, res: Response){
      const examen: VIEWHistorialExamen[] = await getConnection().getRepository(VIEWHistorialExamen).find({ where :{PacienteID: req.params.id } }); 
      res.status(200).json(examen);
      }

      public  async getHistorialConsulta(req: Request, res: Response){
        const consulta: VIEWHistorialConsulta[] = await getConnection().getRepository(VIEWHistorialConsulta).find({ where :{PacienteID: req.params.id } }); 
        res.status(200).json(consulta);
      }

      public  async getNuevosPacientes(req: Request, res: Response){
        const nuevo: VIEWNuevosPacientes[] = await getConnection().getRepository(VIEWNuevosPacientes).find(); 
        res.status(200).json(nuevo);
      }
}
