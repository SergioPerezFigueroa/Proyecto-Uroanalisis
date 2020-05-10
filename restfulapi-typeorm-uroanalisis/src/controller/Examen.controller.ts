import {Application} from "express";
import {ExamenService} from "../services/Examen.service";

export class ExamenController{
    examen_service : ExamenService;

    constructor(private app : Application){
        this.examen_service = new ExamenService();
        this.routes();
    }

    private routes(){

        //this.app.route("/examen/:id").get(this.examen_service.getOne);
        this.app.route("/examenes").get(this.examen_service.getAll);
        this.app.route("/examen/:id").get(this.examen_service.getOneList);
        this.app.route("/examenesMedicos/:id").get(this.examen_service.getMedicalList);
    }
}