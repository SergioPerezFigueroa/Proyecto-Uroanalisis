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
<<<<<<< HEAD
        .get(this.Enfermero_service.getNuevosPacientes);
        //this.app.route("/empleados").get(this.Empleado_service.getAll);
=======
        .get(this.Enfermero_service.getHistorialConsulta);
        
        this.app.route("/paciente/:id/historial_preclinica")
        .get(this.Enfermero_service.getHistorialPreclinica);
>>>>>>> c3122c20dec96e0a316259baf23436227ff4280e
    }
}

