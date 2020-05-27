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


        this.app.route("/paciente/:id").put(this.paciente_service.updateOne);
        this.app.route("/paciente").post(this.paciente_service.CreateOne);

        this.app.route("/pacientes/:id").get(this.paciente_service.getOne);

        this.app.route("/examenaprobado/:id").get(this.paciente_service.getAprobate);

    }
}
