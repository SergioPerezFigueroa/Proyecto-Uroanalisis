import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Enfermero} from "../entity/enfermero.entity"; 
import {VIEWEmpleadoByName} from "../entity/VIEWEnfermeroByName.entity" ;
import{VIEWPacienteByResumen} from "../entity/PacienteByResumen.entity";
import{VIEWHistorialExamen} from "../entity/VIEWHistorialExamen.entity"; 
import{VIEWHistorialConsulta}  from "../entity/VIEWHistorialConsulta.entity"; 
import{VIEWNuevosPacientes} from "../entity/VIEWNuevosPacientes.entity";
import{VIEWHistorialPreclinica}from "../entity/VIEWHistorialPreclinica.entity";


export class EnfermeroService{

      public async getNombreEnferemera(req: Request, res: Response){
        const Enfermero :VIEWEmpleadoByName[] = await getConnection().getRepository(VIEWEmpleadoByName).find({ where :{EmpleadoID: req.params.id } }); 
        res.status(200).json(Enfermero[0]);
    }

    public async getResumen(req: Request, res: Response){
        const Paciente :VIEWPacienteByResumen[] = await getConnection().getRepository(VIEWPacienteByResumen).find({ where :{PacienteID: parseInt(req.params.id) } }); 
        res.status(200).json(Paciente[0]);
    }
 

    public  async getHistorialExamen(req: Request, res: Response){
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
      public  async getHistorialPreclinica(req: Request, res: Response){
        const preclinica: VIEWHistorialPreclinica[] = await getConnection().getRepository(VIEWHistorialPreclinica).find({ where :{PacienteID: req.params.id } }); 
        res.status(200).json(preclinica);
      }
}
