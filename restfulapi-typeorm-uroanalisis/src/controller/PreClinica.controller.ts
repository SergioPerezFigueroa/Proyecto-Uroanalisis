import {Application} from "express";
import {PreClinicaService} from "../services/PreClinica.service";

export class PreClinicaController{
    preclinica_service:PreClinicaService  ;

    constructor(private app: Application){
        this.preclinica_service= new PreClinicaService();
        this.routes();
    }
    private routes(){

        this.app.route("/preclinica/:ID")
        .get(this.preclinica_service.getOne)
        .put(this.preclinica_service.updateOne);
        this.app.route("/preclinica")
        .post (this.preclinica_service.createOne);
        this.app.route("/preclinica").get(this.preclinica_service.getAll);
       
    }
}
