import {Application} from "express";
import {EmpleadoService} from "../services/Empleado.service";


export class EmpleadoController{
    Empleado_service: EmpleadoService;

    constructor(private app: Application){
        this.Empleado_service = new EmpleadoService();
        this.routes();
    }
    private routes(){

       // this.app.route("/supplier/:id/summary")
        //.get(this.supplier_service.getOneSummary); 


       /* this.app.route("/supplier/:id")
        .get(this.supplier_service.getOne)
        .put(this.supplier_service.updateOne);

    
       this.app.route("/supplier/:id/summary")
        .get(this.supplier_service.getOneSummary);

        this.app.route("/supplier")
        .post(this.supplier_service.createOne);

        this.app.route("/supplier/:id")
        .get(this.supplier_service.getOne)
        .put(this.supplier_service.updateOne)
        .delete(this.supplier_service.deleteOne);        
        */

        this.app.route("/empleados").get(this.Empleado_service.getAll);
    }
}