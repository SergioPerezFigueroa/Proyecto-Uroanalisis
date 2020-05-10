import express,{Application} from "express";

import bodyParser from "body-parser";
import cors from "cors";

import {config} from "dotenv";
import {resolve} from "path";

config({"path": resolve(__dirname,"../.env")});

import {createConnection} from "typeorm";

import {MainController} from "./controller/main.controller";
import{EmpleadoController} from "./controller/Empleado.controller"; 
import {PacienteController} from "./controller/paciente.controller";


//import {SupplierController} from "./controller/supplier.controller";

class App{

    public app: Application;
    public main_controller: MainController;
    public empleado_controller: EmpleadoController;
    public paciente_controller : PacienteController;

    constructor(){
       this.app = express();
       this.setConfig();
       this.setDBConnection();

       this.main_controller = new MainController(this.app);
       this.empleado_controller = new EmpleadoController(this.app);
       this.paciente_controller= new PacienteController(this.app); 
    }

    private setConfig(){
        this.app.use(bodyParser.json({limit:"50mb"}));
        this.app.use(bodyParser.urlencoded({limit:"50mb"}));
        this.app.use(cors());
    }

   private setDBConnection(){
       createConnection().then(connection=>{
            console.log("BD connected");
        });
   
    } 
}

export default new App().app;