import {Application} from "express";
import {ExamenService} from "../services/Examen.service";

export class ExamenController{
    examen_service : ExamenService;

    constructor(private app : Application){
        this.examen_service = new ExamenService();
        this.routes();
    }

    private routes(){

        this.app.route("/examenes").get(this.examen_service.getAll);

        this.app.route("/examen/:id")
        .get(this.examen_service.getOneList)
        .put(this.examen_service.bigUpdate);//analista

        this.app.route("/examen/:id/Recepcionista").put(this.examen_service.smallUpdate);

        
        this.app.route("/exameneshechos").post(this.examen_service.getDateExam);


        this.app.route("/examenesMedicos/:id").get(this.examen_service.getMedicalList);

        this.app.route("/examen")
        .post(this.examen_service.createOne);
        

        
    }
}