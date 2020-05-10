import {Application} from "express";
import {EnfermeroService} from "../services/enfermero.service";


export class EnfermeroController{
    Enfermero_service: EnfermeroService;

    constructor(private app: Application){
        this.Enfermero_service = new EnfermeroService();
        this.routes();
    }
    private routes(){

       this.app.route("/enfermero/:id")
        .get(this.Enfermero_service.getOne); 


        //this.app.route("/empleados").get(this.Empleado_service.getAll);
    }
}
