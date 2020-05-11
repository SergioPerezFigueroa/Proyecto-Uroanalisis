import {Application} from "express";
import {PreClinicaService} from "../services/PreClinica.service";

export class PreClinicaController{
    preclinica_service:PreClinicaService  ;

    constructor(private app: Application){
        this.preclinica_service= new PreClinicaService();
        this.routes();
    }
    private routes(){
        this.app.route("/preclinica/:ID").get(this.preclinica_service.getOne);
        this.app.route("/preclinica").get(this.preclinica_service.getAll);
    }
}
