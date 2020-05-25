import {Application} from "express";
import {EmpleadoService} from "../services/Empleado.service";


export class EmpleadoController{
    Empleado_service: EmpleadoService;

    constructor(private app: Application){
        this.Empleado_service = new EmpleadoService();
        this.routes();
    }
    private routes(){



        this.app.route("/empleados").get(this.Empleado_service.getAll);

        this.app.route ("/login")
        .post(this.Empleado_service.Login)
    }
}

