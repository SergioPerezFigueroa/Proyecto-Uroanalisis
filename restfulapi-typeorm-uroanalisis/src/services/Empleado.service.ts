import {Request, Response} from "express";
import {getConnection} from "typeorm";

//import { MessagePort } from "worker_threads";
import {Empleado,Ilogin,IResult} from "../entity/Empleado.entity"
import { Paciente } from "../entity/paciente.entity";


export class EmpleadoService{

    public async getAll(req: Request, res: Response){
        const Empleados = await getConnection().getRepository(Empleado).find();
        res.status(200).json(Empleados);
    }




    public async Login(req:Request, res:Response){
        const i: Ilogin = req.body;
        const result: IResult[] = await getConnection().query(`EXEC proyecto.S_P_LOGIN
        @EmpleadoID = ${i.EmpleadoID},
        @Password = '${i.Password}'`);
        res.status(201).json(result[0])

    }
    
    
        
}

       
    