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
        .get(this.Enfermero_service.getNombreEnferemera);

        this.app.route("/paciente/:id")
        .get(this.Enfermero_service.getResumen); 

        this.app.route("/paciente/:id/historial_examen")
        .get(this.Enfermero_service.getHistorialExamne);

        this.app.route("/paciente/:id/historial_consulta")
        .get(this.Enfermero_service.getHistorialConsulta);

        this.app.route("/nuevos_pacientes")
        .get(this.Enfermero_service.getNuevosPacientes);
        //this.app.route("/empleados").get(this.Empleado_service.getAll);

        
        this.app.route("/paciente/:id/historial_preclinica")
        .get(this.Enfermero_service.getHistorialPreclinica);

    }
}
