import {Application} from "express";
import {ConsultaServise} from "../services/Consulta.service";

export class ConsultaController{

    Consulta_service : ConsultaServise;

    constructor(private app : Application){
        this.Consulta_service = new ConsultaServise();
        this.routes();
    }

    private routes(){
        this.app.route("/consulta").post(this.Consulta_service.createOne);
    }
}