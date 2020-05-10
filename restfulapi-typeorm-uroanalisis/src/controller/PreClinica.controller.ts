import {Application} from "express";
import {PreClinicaService} from "../services/PreClinica.service";

export class PreClinicaController{
    PreClinica_service:PreClinicaService  ;

    constructor(private app: Application){
        this.PreClinica_service= new PreClinicaService();
        this.routes();
    }
    private routes(){

        this.app.route("/PreClinica").get(this.PreClinica_service.getAll);
    }
}
