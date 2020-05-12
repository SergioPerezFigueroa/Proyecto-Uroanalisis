import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Empleado} from "../entity/Empleado.entity"

export class EmpleadoService{

    public async getAll(req: Request, res: Response){
        const Empleados = await getConnection().getRepository(Empleado).find();
        res.status(200).json(Empleados);
    }

   
    
         }
       
    