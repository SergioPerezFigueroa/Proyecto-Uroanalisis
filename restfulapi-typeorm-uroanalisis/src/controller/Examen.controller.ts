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
        .get(this.examen_service.getOneList)//archivista,recepcionista
        .put(this.examen_service.bigUpdate);//analista

        this.app.route("/examenV/:id")
        .get(this.examen_service.getOneV);//archivista

        this.app.route("/examen/:id/Recepcionista").put(this.examen_service.smallUpdate);//recepcionista

        
        this.app.route("/exameneshechos").post(this.examen_service.getDateExam);


        this.app.route("/examenesMedicos/:id").get(this.examen_service.getMedicalList);

        this.app.route("/examen")
        .post(this.examen_service.createOne);

        this.app.route("/examenes/:id").get(this.examen_service.getOne);
        

        
    }
}