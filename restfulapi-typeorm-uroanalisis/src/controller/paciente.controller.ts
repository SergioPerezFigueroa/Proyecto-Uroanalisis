import {Application} from "express";
import {PacienteService} from "../services/paciente.service";

export class PacienteController{
    paciente_service: PacienteService ;

    constructor(private app: Application){
        this.paciente_service= new PacienteService();
        this.routes();
    }
    private routes(){

        this.app.route("/pacientes").get(this.paciente_service.getAll);
    }
}
